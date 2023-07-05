const conn = require('../../Connections/db.js');

const listarRecebimentos = async (req, res) => {

    try{
        const selectRecebimento  = await conn.select('*').from('recebimentos')

        return res.json({selectRecebimento})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
    
};

module.exports = listarRecebimentos;
