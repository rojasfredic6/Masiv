/**
 * XkcdController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const url = 'https://xkcd.com'
const path = 'info.0.json'
const axios = require('axios')

module.exports = {
  comics: async(req, res) =>{
    try{
      console.log(req.allParams())
      const { id } = req.allParams()
      console.log(id)
      if(!id){
        return res.badRequest('Se necesita un id')
      }
      const response = await axios.get(`${url}/${id}/${path}`)
      console.log(response.data)
      return res.ok(response.data).json()
    }catch(err){
      return res.serverError(err)
    }
  }
};

