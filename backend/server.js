let express = require('express');
let {Sequelize} = require('sequelize');

let app = express();

var sequelize = new Sequelize('postgres://postgres:Pg3600@localhost:3001/studentcampus');


try{
    sequelize.authenticate().then(console.log("The connection has been established."))
}catch(er){
    console.log("Some error", er);
}


app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.post('/Students', function(request, response){

    console.log(request.body);

    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let school= request.body.school;
    let gpa = request.body.gpa;


    //console.log(request);
    console.log("We are getting information from the front end");



    let Student = sequelize.define('Student',{
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: Sequelize.STRING,
        school: Sequelize.STRING,
        gpa: Sequelize.FLOAT
    });

    Student.sync().then(function(){
        console.log("The table is ready to be used");
    })


    Student.findOne({
        where:{
            email: email 
        }
    }).then(function(student){
        if(!student){
            console.log("false");

            Student.create({
                firstname: firstName,
                lastname: lastName,
                email: email,
                school: school,
                gpa: gpa
            });

        }else{
            console.log("student");
            // Notify the student that this user already exists in the table
        }

    });

    response.send("The form has been received");

});

console.log("Test");

app.listen(3002);
