const joi = require('joi')

const cadastrarPasseios = joi.object({
    // id: joi.number().required().messages({
    //     'any.required': 'O campo id é obrigatório',
    //     'number.empty': 'O campo id é obrigatório',
    // }),
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório',
        'string.base': 'O campo nome precisa ser uma string'
    }),
    apelido: joi.string().required().messages({
        'any.required': 'O campo apelido é obrigatório',
        'string.empty': 'O campo apelido é obrigatório',
    }),
    senha: joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
    }),

})

module.exports = { cadastrarPasseios }