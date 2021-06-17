import Toolbar from '@material-ui/core/Toolbar'
import IconButton from'@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import  ButtonBase  from '@material-ui/core/ButtonBase'
import { Card } from '@material-ui/core'
import AccountIconBox from '@material-ui/icons/AccountBox'
import SchoolIcon from '@material-ui/icons/School'
import Grid from '@material-ui/core/Grid'
import { shadows } from '@material-ui/system';

import './mainPage.css'

import React from 'react';
import Campus from './Campus'
import {Link,Route, BrowserRouter as Router } from 'react-router-dom'


function MainPage(){

    return(
        
          <div className='interface'>
            <Grid container className ='campuses'>
             
            
               <Grid>

                    <Card boxShadow ={10} className='see-all'>
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