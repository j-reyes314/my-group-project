import  ButtonBase  from '@material-ui/core/ButtonBase'
import { Card, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

import Lehman_College from './Lehman_College.jpg'
import student_photo from './student_photo.jpg'
import DisplayStudents from './displayStudents'
import DisplayCampus from './displayCampus'
import Footer from './footer'

import './mainPage.css'

import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'


function MainPage(){
  const [students,setStudents] = useState();
  const [campus, setCampus] = useState([]);
  const [toggle, setToggle] =useState(false);

  useEffect(()=>{
    fetchStudents()
    fetchCampuses()
  },[]);

  const toggled=()=>{
    fetchStudents();
    fetchCampuses();
    setToggle(!toggle);
  }

  const fetchStudents = async() => {
        const result = await
    axios.get("http://localhost:3002/Students").then(response => {
        console.log(response.data[0]);
        let studentArr = [];
        let panels;
    if(response.data[0] === undefined){
      setStudents(  <Footer close={()=> toggled()} isStudent ={true}/> )
    }else{
      {response.data.length < 3 ? panels = response.data.length : panels  =3}
      for(let i = 0; i < panels ; i++){
      studentArr[i] = <DisplayStudents key={response.data.id} close={()=>toggled()} 
                                    data ={response.data[i]}/>;  
      }
    setStudents(studentArr);
    }
    })
    .catch(error => {
      console.log(error);
    });
  }

const fetchCampuses = async() => {
      const result = await
    axios.get("http://localhost:3002/Campus").then(response => {
    let campusArr = [];
    let panels;
    if(response.data[0] === undefined){
      setCampus( <Footer close={()=> toggled()} isStudent ={false}/> )
    }else{
      {response.data.length < 3 ? panels = response.data.length : panels  =3}
      for(let i = 0; i < panels ; i++){
        
        campusArr[i] = <DisplayCampus key={response.data.id} close={()=> toggled()} 
                                        data ={response.data[i]}/>;
        if(i == panels -1 && panels<3){ campusArr[i+1] = <Footer close={()=> toggled()} isStudent ={false}/>}
      }

      setCampus(campusArr);
    }
      
    })
    .catch(error => {
    console.log(error);
    });
  }




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
                    <Grid container item xs={12} spacing={1}>
                      {campus}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4} style= {{height: ""}} >
                <Card className='see-all' style={{height: "100%"}}>

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
                  <Grid container item xs={12} spacing={0}>
                    {students}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </div>
        
    )
}

export default MainPage;