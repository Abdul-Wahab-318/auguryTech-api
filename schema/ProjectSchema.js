const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({

    subtitle : {
        type : String ,
        required : true
    } ,

    title : {
        type : String ,
        required : true
    } ,

    desktopImg : {
        type : String ,
        required : true
    } ,

    mobileImg : {
        type : String ,
        required : true
    } ,

    newProject : {
        type : Boolean ,
        default : false
    } ,

    category : [
        {
            type : mongoose.Types.ObjectId ,
        }
    ]

})

module.exports = mongoose.model('project' , ProjectSchema)