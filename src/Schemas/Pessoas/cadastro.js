const joi = require('joi')

const SchemaCadastrarPessoas = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório',
        'string.base': 'O campo nome precisa ser uma string'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',
        'string.email': 'E-mail inválido',
        'string.base': 'O campo email precisa ser uma string'
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

module.exports = { SchemaCadastrarPessoas }