const conn = require('../../Connections/db.js');

const listarPasseios = async (req, res) => {

    try{
        const selectPasseio  = await conn.select('*').from('passeios')

        return res.json({selectPasseio})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
    
};

const detalharPasseio = async (req, res) => {
    const { id } = req.body
    console.log(id)
    try{
        const detalhePasseio  = await conn('passeios')
        .join('pessoas_passeios','passeios.id', '=', 'pessoas_passeios.id_passeio')
        .join('pessoas', 'pessoas_passeios.id_pessoa', '=', 'pessoas.id')
        .select('passeios.id', 'passeios.descricao', 'pessoas.id', 'pessoas.nome')
        .where('passeios.id', '=', id)

        return res.json({detalhePasseio})
    }catch(error) {
     console.log(error)
     res.status(500).json({erro: error})   
    }
    
};
module.exports = { listarPasseios, detalharPasseio };
