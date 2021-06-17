import { Button } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import  ButtonBase  from '@material-ui/core/ButtonBase'
import { Card } from '@material-ui/core'
import AccountIconBox from '@material-ui/icons/AccountBox'
import SchoolIcon from '@material-ui/icons/School'
import Grid from '@material-ui/core/Grid'
import { CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import './mainPage.css'

import React from 'react';
import {Link,Route, BrowserRouter as Router } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));



function MainPage(){

  const classes = useStyles();
    return(
        
          <div className='interface'>
            <Grid container className ='campuses'>
             
            
               <Grid>

                    <Card boxShadow ={10} className='see-all'>
                  
                       <CardMedia
                          className={classes.media}
                          img="Lehman_College.jpg"
                          title="Paella dish"
                        />
                      <Link  to='/Campus'>
                        <ButtonBase>
                       
                                <CardContent>See All Campuses </CardContent>
                            
                        </ButtonBase>
                        </Link>
                    </Card>
                </Grid>

                <Grid>
                <ButtonGroup  size ='medium'>
                    <Button startIcon= {<SchoolIcon/>}>PlaceHolder Campus</Button>
                    <Button startIcon= {<SchoolIcon/>}>PlaceHolder Campus</Button>
                    <Button startIcon= {<SchoolIcon/>}>PlaceHolder Campus</Button>
                    <Button startIcon= {<SchoolIcon/>}>PlaceHolder Campus</Button>
                    <Button startIcon= {<SchoolIcon/>}>PlaceHolder Campus</Button>
                    <Button startIcon= {<SchoolIcon/>}>PlaceHolder Campus</Button>
                </ButtonGroup>
                </Grid>

            </Grid>

            <Grid container className ='students'>
              <Grid>
                <Card className='see-all'>
                  <ButtonBase>

                    <CardContent>See All Student</CardContent>
               
                  </ButtonBase>
                </Card>
              </Grid>

              <Grid>
                <ButtonGroup  size ='medium'>
                    <Button startIcon= {<AccountIconBox/>}>PlaceHolder Student</Button>
                    <Button startIcon= {<AccountIconBox/>}>PlaceHolder Student</Button>
                    <Button startIcon= {<AccountIconBox/>}>PlaceHolder Student</Button>
                    <Button startIcon= {<AccountIconBox/>}>PlaceHolder Student</Button>
                    <Button startIcon= {<AccountIconBox/>}>PlaceHolder Student</Button>
                    <Button startIcon= {<AccountIconBox/>}>PlaceHolder Student</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </div>
        
    )
}

export default MainPage;