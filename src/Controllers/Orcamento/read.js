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

const orcamentoTotal = async(req, res)  => {
    try{
        const orcamentoTotal  = await conn('orcamentos')
            .sum("valor")
        return res.json({orcamentoTotal})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
}


module.exports = {listarOrcamentos,orcamentoTotal }
