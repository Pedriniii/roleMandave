const conn = require ('../../Connections/db');

const create = async (req, res) => {
    const {nome, apelido, senha } = req.body

    try {
        const usuario = await knex('usuarios').where({ apelido })

        if (usuario.length > 0) {
            return res.status(400).json({ mensagem: 'Usuario existente' })
        }

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(senha, salt)

        await knex('usuarios')
            .insert({
                nome,
                apelido,
                senha: hash,
            })

        return res.status(201).json({ mensagem: 'Cadastro Feito' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }

}