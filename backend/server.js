let express = require('express');
let {Sequelize} = require('sequelize');
const cors = require('cors');


let app = express();


app.use(cors());

// app.use(express.urlencoded({extended:true}));

app.use(express.json()); 


let server = app.listen(0, () => {
    console.log('Listening', server.address().port)
  })

var sequelize = new Sequelize('postgres://postgres:Pg3600@localhost:3001/studentcampus');

let Student = sequelize.define('Student',{
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    school: Sequelize.STRING,
    gpa: Sequelize.FLOAT
});


// try{
//     sequelize.authenticate().then(console.log("The connection has been established."))
// }catch(er){
//     console.log("Some error", er);
// }


app.get('/Students', async function(request, response) {
    // dStuent.findAll().then(students => res.json(students))

 
    let test =  await Student.findAll();

    console.log(test);
    //Student.findAll().then(function(rows) {

     //   console.log(row);


       // for(var i = 0; i < rows.length; i++) {
       // var columnData = rows[i].dataValues;
        //var name = columnData.firstname + " " + columnData.lastname;
    //console.log(columnData );
    //someData.append(columnData);
        //}
        //console.log(someData);  
    //});
    
    response.json(test);
})

app.post('/Students', function(request, response){

    console.log(request.body);

    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let school= request.body.school;
    let gpa = request.body.gpa;


    //console.log(request);
    console.log("We are getting information from the front end");

    // let Student = sequelize.define('Student',{
    //     firstname: Sequelize.STRING,
    //     lastname: Sequelize.STRING,
    //     email: Sequelize.STRING,
    //     school: Sequelize.STRING,
    //     gpa: Sequelize.FLOAT
    // });

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
