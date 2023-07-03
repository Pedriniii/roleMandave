const jwt = require('jsonwebtoken');
const conn = require('../Connections/db.js');

const verificarLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    const token = authorization.split(' ')[1];

    try {
        const id = jwt.verify(token, process.env.JWT_PASSWORD);
        
        const user = await conn('pessoas').where({ id })

        if (user.length === 0) {
            return res.status(401).json({ mensagem: 'Não autorizado' });
        }
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Não autorizado' });
    }
}

module.exports = verificarLogin