const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({

    name : {
        type : String ,
        required : true
    } ,

    title : {
        type : String ,
        required : true
    } ,

    imgLink : {
        type : String ,
        required : true
    } ,

    linkedin : {
        type : String ,
        required : true
    } 

})

module.exports = mongoose.model('employee' , EmployeeSchema)