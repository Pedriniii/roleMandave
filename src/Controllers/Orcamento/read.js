const conn = require('../../Connections/db.js');

const listarOrcamentos = async (req, res) => {

    try{
        const selectOrcamento  = await conn.select('*').from('orcamentos')

        return res.json({selectOrcamento})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
    
};

module.exports = listarOrcamentos
