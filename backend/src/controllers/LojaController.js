const connection = require('../database/connection')
const crypto = require("crypto")

module.exports = {
  async index (request, response)  {
    const lojas = await connection('lojas').select('*')
  
    return response.json(lojas)
  },

  async create(request,response) {
    const { name, email, whatsapp, city, uf } = request.body

  const id = crypto.randomBytes(4).toString('HEX')

  await connection('lojas').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

  return response.json({ id })
  }
}