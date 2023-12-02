const { listAllemployee,listSalary,overAllexp,graduate, updateSalary, deleteYcompany} = require ("../controller/employeeallData")

const Route = require("express").Router()

Route.get("/fetchAlldetails", listAllemployee) 

Route.get("/fetchSalary",listSalary )

Route.get("/fetchExperience", overAllexp)

Route.get("/fetchGraduate",graduate)

Route.get("/fetchUpdateSalary", updateSalary)

Route.delete("/fetchcompanyY",deleteYcompany)

module.exports = Route