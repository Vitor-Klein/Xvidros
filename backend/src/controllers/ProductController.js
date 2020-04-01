const connection = require("../database/connection")

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const[count] = await connection('products').count()

    const products = await connection('products')
      .join('lojas', 'loja_id', '=', 'products.loja_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'products.*', 
        'lojas.name', 
        'lojas.email', 
        'lojas.whatsapp', 
        'lojas.city', 
        'lojas.uf'
      ])

      response.header('X-Total-Count', count['count(*)'])

    return response.json(products)
  },

  async create(request,response) {
    const { title, description, value } = request.body
    const loja_id = request.headers.authorization

    const [id] = await connection('products').insert({
      title,
      description,
      value,
      loja_id,
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params
    const loja_id = request.headers.authorization

    const product = await connection('products')
      .where('id', id)
      .select('loja_id')
      .first()

      if(product.loja_id !== loja_id) {
        return response.status(401).json({ error: 'Operation not permitted' })
      }

      await connection('products').where('id', id).delete()

      return response.status(204).send()
  }
}