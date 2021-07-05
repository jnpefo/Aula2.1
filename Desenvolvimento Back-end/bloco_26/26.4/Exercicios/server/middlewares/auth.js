module.exports = (req, res, next) => {
  if(req.headers.authorization){
    return next()
  }

  next({ status: 401, mesasage: "you are not batata!" })
}
