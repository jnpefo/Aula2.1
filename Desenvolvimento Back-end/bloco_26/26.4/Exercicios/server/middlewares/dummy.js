module.exports = (req, res, next) => {
  const responseTime = Date.now() - req.startTime
  // console.log("Hello from dummy");
  // throw new Error ("Erro de conexão com o banco de dados")
  res.status(200).json({ method:req.method, responseTime, user: req.user })
}
