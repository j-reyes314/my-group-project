import { Button } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import  ButtonBase  from '@material-ui/core/ButtonBase'
import { Card } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import AccountIconBox from '@material-ui/icons/AccountBox'
import SchoolIcon from '@material-ui/icons/School'
import Grid from '@material-ui/core/Grid'
import { CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DisplayInfo from './displayInfo'
import Lehman_College from './Lehman_College.jpg'

import './mainPage.css'

import React from 'react';
import {Link,Route, BrowserRouter as Router } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



function MainPage(){

  function FormRow({name}) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <DisplayInfo name ={name} />
        </Grid>
        <Grid item xs={4}>
          <DisplayInfo name ={name}/>
        </Grid>
        <Grid item xs={4}>
          <DisplayInfo name ={name}/>
        </Grid>
      </React.Fragment>
    );
  }

  const classes = useStyles();
    return(
        
          <div className='interface'>
  
            <Grid container spacing={2}>
              <Grid item xs={4} style= {{height: ""}} direction="row"
        justify="center"
        alignItems="stretch" >
                {/* <ButtonBase className={classes.image}>
                <img className={classes.img} src={Lehman_College} alt="school" />
                
                </ButtonBase>
                <Typography gutterBottom variant="h5" component="h2">
            See All Campuses
            </Typography> */}
                <Card className='see-all' style = {{height: "100%"}}>
                         <Link  to='/Campus' style ={{textDecoration: 'none'}}>
                           <ButtonBase>
                             <img  alt="complex" src={Lehman_College} />
                             <Typography gutterBottom variant="h5" component="h2">
            See All Campuses
          </Typography>
                                {/* <CardContent>See All Campuses </CardContent>  */}
                         </ButtonBase>
                       </Link>
                </Card>
              </Grid>

              <Grid item xs={12} sm container>
                <Grid container item>
                  <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                      <FormRow name = 'Campus' />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <FormRow name = 'Campus' />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
{/* begin code */}
            <Grid container spacing={2}>
              <Grid item xs={4} style= {{height: ""}} direction="row"
        justify="center"
        alignItems="stretch">
                <Card className='see-all'>

                <Link  to='/Students' style ={{textDecoration: 'none'}}>
                  <ButtonBase>

                  <Typography gutterBottom variant="h5" component="h2">See All Students</Typography>
                  </ButtonBase>
                </Link>
                </Card>
              </Grid>
             <Grid item xs={12} sm container>
              <Grid container item>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <FormRow name ='Student' />
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    <FormRow name ='Student' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </div>
        
    )
}

export default MainPage;