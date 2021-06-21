let express = require('express');
let {Sequelize} = require('sequelize');
let app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


let server = app.listen(0, () => {
    console.log('Listening', server.address().port)
  })

var sequelize = new Sequelize('postgres://postgres:Pg3600@localhost:3001/studentcampus');


let Campus = sequelize.define('Campus',{
    id: {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    campusname: {
        type:Sequelize.STRING,
        allowNull:false,
    },
    imageurl: {
        type:Sequelize.STRING,
        defaultValue:'https://lehman.edu/media/Lehman-College-Website/Site-Assets/Images/News/2019/Lehman_College_Music_Building.jpg'
    },
    address: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type:Sequelize.STRING
    }
});


let Student = sequelize.define('Student',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    campusId: {
        type: Sequelize.INTEGER,
        references: {
            model: Campus,
            key: 'id'
        }
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email : {
        type: Sequelize.STRING,
        allowNull:false,
    },
    school: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    gpa: {
        type: Sequelize.FLOAT,
    }
});

Campus.hasMany(Student, { foreignKey: 'campusId' });
Student.belongsTo(Campus, { foreignKey: 'campusId' });

app.get('/Students', async function(request, response) {
  
    let test =  await Student.findAll();

    console.log(test);
    
    response.json(test);
})

app.get('/Campus', async function(request, response) {

    let test2 =  await Campus.findAll();

    console.log(test2);
    
    response.json(test2);
})

app.post('/Students', function(request, response){

    console.log(request.body);

    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let school= request.body.school;
    let imageURL = request.body.imageURL;
    let gpa = request.body.gpa;

    console.log("We are getting information from the front end");


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
                imageurl: imageURL,
                gpa: gpa
            });

        }else{
            console.log("student");
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

    console.log("We are getting information from the front end");

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
        imageurl: request.body.imageurl,
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

console.log("Test");

app.listen(3002);