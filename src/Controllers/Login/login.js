const jwt = require("jsonwebtoken");
const conn = require("../../Connections/db.js");

function gerarToken(usuarioId) {
  const chaveSecreta = process.env.JWT_PASSWORD;

  return jwt.sign(usuarioId, chaveSecreta);
}

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await conn("pessoas").where({ email }).first();

    if (!user) return res.json({ error: "Usuario ou senha incorreto!" });

    console.log(user);

    if (user.senha != senha) return res.json({ error: "Usuario ou senha incorreto!" });

    const tokenId = gerarToken(user.id);

    return res.json({
      name: user.nome,
      token: tokenId,
    });
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = { login };
