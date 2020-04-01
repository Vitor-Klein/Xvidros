const connection = require("../database/connection")

module.exports = {
  async index(request,response) {
    const loja_id = request.headers.authorization

    const products = await connection('products')
      .where('loja_id', loja_id)
      .select('*')

      return response.json(products)
  }
}