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

const readOrcamento = async (req, res) => {
    const { id } = req.body;

    try{
        const readOrcamento  = await conn.select('*')
        .from('orcamentos')
        .where('id','=', id)

        return res.json({readOrcamento})
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


module.exports = {listarOrcamentos, orcamentoTotal, readOrcamento }
