const { databaseName } = require("../config/db")

const userCollection = databaseName.collection("userdetail")
const listAllemployee = async (req, res) => {
    const result = await userCollection.find({})
    return res.send(result)
}

const listSalary = async (req, res) => {
    const result = await userCollection.find({salary:{$gt:"30000"}})
    return res.send(result)
}

const overAllexp = async (req, res) => {
    const result = await userCollection.find({overallExp:{$gt:"2"}})
    return res.send(result)
}

const graduate = async (req, res) => {
    const result = await userCollection.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
    return res.send(result)
}

const updateSalary = async (req, res) => {
    const result = await userCollection.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
    return res.send(result)
}

const deleteYcompany = async (req, res) => {
    const result = await userCollection.deleteMany({lastCompany:"Y"})
    return res.send(result)
}

module.exports = {listAllemployee,listSalary,overAllexp,graduate,updateSalary,deleteYcompany}