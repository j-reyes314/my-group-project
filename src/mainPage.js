
import  ButtonBase  from '@material-ui/core/ButtonBase'
import { Card } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
// import { makeStyles } from '@material-ui/core'
// import DisplayInfo from './displayInfo'
import Lehman_College from './Lehman_College.jpg'
import student_photo from './student_photo.jpg'
import DisplayStudents from './displayStudents'
import FormRow from './formRow'

import './mainPage.css'

import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'


// const useStyles = makeStyles((theme) => ({
//   media: {
//     height: 140,
//     paddingTop: '56.25%', // 16:9
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));



function MainPage(){
  const [students,setStudents] = useState();
  const [campus, setCampus] = useState([]);


  useEffect(()=>{
    fetchData();

  },[]);

  const fetchData = async() => {
    // console.log("w.e");
    const result = await
axios.get("http://localhost:3002/Students").then(response => {
    console.log(response.data[0]);
    let studentArr = [];
for(let i = 0; i < 3 ; i++){
  studentArr[i] =response.data[i];
  
}
setStudents(studentArr);
console.log(studentArr);
})
.catch(error => {
  console.log(error);
});

}

const createGrid= (arr) =>{
  for (let i =0; i <students.length/3; i++){
      arr[i] = students.slice(i*3,(i*3)+3);
      arr[i] = arr[i].map(element => <DisplayStudents key={element.id} data ={element}/>)
      
      if(i+1 == students.length/3 && this.state.studentArray.length%3 > 0 ){
          arr[i+1] = students.slice((i+1)*3,this.studentArray.length);
          arr[i+1] =arr[i].map(element => <DisplayStudents key={element.id} data ={element}/>);
      }
     
  }
  for(let j =0; j < arr.length;j++){
      arr[j] = <FormRow arr ={arr[j]}/>
      

  }

  return arr;
};

      

 // const classes = useStyles();
    return(
        
          <div className='interface'>
  
            <Grid container spacing={2}>

              {/* Grid item containing button to all campus page */}

              <Grid item xs={4} style= {{height: ""}}  >
                <Card className='see-all' style = {{height: "100%"}}>
                         <Link  to='/Campuses' style ={{textDecoration: 'none'}}>
                            <ButtonBase>
                              <img  alt="complex" src={Lehman_College} />
                              <Typography gutterBottom variant="h5" component="h2">See All Campuses</Typography>
                            </ButtonBase>
                       </Link>
                </Card>
              </Grid>

              <Grid item xs={12} sm container>
                <Grid container item>
                  <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                      {/* <FormRow arr ={students}/> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4} style= {{height: ""}} >
                <Card className='see-all'>

                <Link  to='/Students' style ={{textDecoration: 'none'}}>
                  <ButtonBase>
                  <img  alt="complex" src={student_photo} />
                  <Typography gutterBottom variant="h5" component="h2">See All Students</Typography>
                  </ButtonBase>
                </Link>
                </Card>
              </Grid>
             <Grid item xs={12} sm container>
              <Grid container item>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    {/* <FormRow name ='Student' /> */}
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    {/* <FormRow name ='Student' /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </div>
        
    )
}

export default MainPage;