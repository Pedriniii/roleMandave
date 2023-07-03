const conn = require('../../Connections/db.js');

const listarPessoas = async (req, res) => {

    try{
        const selectPessoa  = await conn.select('*').from('pessoas')

        return res.json({selectPessoa})
    }catch(error) {
     console.log(error)
     res.status(500).json({error: 'Deu erro, porra'})   
    }
    
};

module.exports = listarPessoas;
