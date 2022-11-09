

//ASSIGNMENT

const myMidd1 = function (req, res, next) {
  const isFreeAppUser = req.headers["isfreeappuser"]

  if (!isFreeAppUser) {
    return res.send({ msg: "isfreeAppUser is mandatory" })
    // console.log('give isfreeAppUser')
  }
  else {
    next()
  }
}





// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
module.exports.myMidd1 = myMidd1
