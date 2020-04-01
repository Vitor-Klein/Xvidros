const connection = require("../database/connection")

module.exports = {
  async create(request, response) {
    const { id } = request.body

    const loja = await connection('lojas')
      .where('id', id)
      .select('name')
      .first()

      if(!loja) {
        return response.status(400).json({ error: 'No Loja found with this ID' })
      }

      return response.json(loja)
  }
}