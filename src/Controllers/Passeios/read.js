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

module.exports = listarPasseios;
