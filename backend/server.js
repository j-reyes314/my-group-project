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
    id: {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    school: Sequelize.STRING,
    gpa: Sequelize.FLOAT
});

let Campus = sequelize.define('Campus',{
    id: {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    campusname: {type: Sequelize.STRING},
    imageurl: Sequelize.STRING,
    address: Sequelize.STRING,
    description: Sequelize.STRING
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

app.get('/Campus', async function(request, response) {
    // dStuent.findAll().then(students => res.json(students))

 
    let test2 =  await Campus.findAll();

    console.log(test2);
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
    
    response.json(test2);
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
        console.log("The student table is ready to be used");
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

app.post('/Campus', function(request, response){

    console.log(request.body);

    let campusName = request.body.campusName;
    let imageURL = request.body.imageURL;
    let address = request.body.address;
    let description= request.body.description;


    //console.log(request);
    console.log("We are getting information from the front end");

    // let Student = sequelize.define('Student',{
    //     firstname: Sequelize.STRING,
    //     lastname: Sequelize.STRING,
    //     email: Sequelize.STRING,
    //     school: Sequelize.STRING,
    //     gpa: Sequelize.FLOAT
    // });

    Campus.sync().then(function(){
        console.log("The campus table is ready to be used");
    })


    Campus.findOne({
        where:{
            address: address 
        }
    }).then(function(campus){
        if(!campus){
            console.log("false");

            Campus.create({
                campusname: campusName,
                imageurl: imageURL,
                address: address,
                description: description,
            });

        }else{
            console.log("campus");
            // Notify the student that this user already exists in the table
        }

    });

    response.send("The campus form has been received");
    

});

app.delete('/Campus', async function(request, response){

    let test2 =  Campus.destroy({
        where: {
            id: request.body.id
        }
    });

    console.log(test2);

    response.json(test2);

});

app.delete('/Students', async function(request, response){

    let test2 =  Student.destroy({
        where: {
            id: request.body.id
        }
    });

    console.log(test2);

    response.json(test2);

});

app.put('/Students', async function(request, response){

    let test3 =  Student.update({
        firstname: request.body.firstname,
        lastname: request.body.lastName,
        email: request.body.email,
        school: request.body.school,
        gpa: request.body.gpa
    },
        {where: {
            id: request.body.id
        }
    });

    console.log(test3);

    response.json(test3);

});



app.put('/Campus', async function(request, response){

    let test4 =  Campus.update({
        campusname: request.body.campusname,
        imageurl: request.body.imageurl,
        address: request.body.address,
        description: request.body.description
    },
        {where: {
            id: request.body.id
        }
    });

    console.log(test4);

    response.json(test4);

});



// find students who go to a campus
// find campus that current student goes to

console.log("Test");

app.listen(3002);