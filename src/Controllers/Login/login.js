const jwt = require('jsonwebtoken');
const conn = require('../../Connections/db.js');

const login = async (req, res) => {
    const { usuario, senha } = req.body;    

    try {
        const user = await conn('pessoas').where({ usuario }).first();

        if (!user) return res.json({"error":'usuario errado'})

        console.log(user)

        if(user.senha != senha) return res.json({"error":'senha errada'})

        return res.json({
            "name": user.nome,
            "token": "comi o cu de quem ta lendo" 
        })
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
}

module.exports = { login } 