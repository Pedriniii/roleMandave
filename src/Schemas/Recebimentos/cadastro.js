const joi = require('joi')

const cadastrarRecebimento = joi.object({
    // id: joi.number().required().messages({
    //     'any.required': 'O campo id é obrigatório',
    //     'number.empty': 'O campo id é obrigatório',
    // }),
    id_pessoa: joi.string().required().messages({
        'any.required': 'Voce precisa selecionar uma pessoa',
        'string.empty': 'Voce precisa selecionar uma pessoa',
    }),
    id_passeio: joi.string().required().messages({
        'any.required': 'Voce precisa selecionar um passeio',
        'string.empty': 'Voce precisa selecionar um passeio',
    }),
    valor_pago: joi.string().required().messages({
        'any.required': 'Voce precisa informar um valor pago',
        'string.empty': 'Voce precisa informar um valor pago',
    }),

})

module.exports = { cadastrarRecebimento }