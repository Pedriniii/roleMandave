const conn = require('../../Connections/db.js');

const listarRecebimentos = async (req, res) => {

    try{
        const selectRecebimento  = await conn('recebimentos')
            .join("pessoas","pessoas.id","=","recebimentos.id_pessoa")
            .select("pessoas.nome")
            .sum("recebimentos.valor_pago")
            .groupBy("pessoas.nome")
            .orderBy("pessoas.nome", "asc")
        return res.json({selectRecebimento})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }    
};


const extratoRecebimentos = async(req, res)  => {
    try{
        const extratoRecebimento  = await conn('recebimentos')
            .join("pessoas","pessoas.id","=","recebimentos.id_pessoa")
            .select("pessoas.nome","recebimentos.valor_pago","recebimentos.data_recebimento")
            .orderBy("data_recebimento", "desc")
        return res.json({extratoRecebimento})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
}

const saldoEmConta = async(req, res)  => {
    try{
        const saldoEmConta  = await conn('recebimentos')
            .sum("valor_pago")
        return res.json({saldoEmConta})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
}


module.exports = {listarRecebimentos, extratoRecebimentos, saldoEmConta};
