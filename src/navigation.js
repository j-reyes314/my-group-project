import Toolbar from '@material-ui/core/Toolbar'
import IconButton from'@material-ui/core/IconButton'
import { AppBar, Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

import React from 'react';
import MainPage from'./mainPage'
import Campus from './Campus'
import Students from './Students'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import DynamicDisplay from './dynamicDisplay';




function Navigation(){
    return(
    <Router>
      <AppBar color='secondary'>
        <Toolbar >

          <IconButton >
            <Link to='/'><HomeIcon fontSize= 'large' color ='action'/></Link>
          </IconButton>

          <Link to='/Campuses' style ={{textDecoration: 'none'}}><Button variant='outlined'>Campuses</Button></Link>
          <Link to='/Students' style ={{textDecoration: 'none'}}><Button variant='outlined'>Students</Button></Link>

          
        </Toolbar>

  

  
      </AppBar>

      <Toolbar/>

        <Route exact path="/" component={MainPage} />
        <Route exact path="/Campuses" component={Campus} />
        <Route exact path="/Students" component={Students} />
        <Route exact path='/Students/:id' component={DynamicDisplay} />
        <Route exact path='/Campus/:id' component={DynamicDisplay} />
      <div className='padding'></div>
</Router>

  )


}

export default Navigation;