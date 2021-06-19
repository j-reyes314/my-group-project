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




function Navigation(){
    return(
    <Router>
      <AppBar color='secondary'>
        <Toolbar >

          <IconButton >
            <Link to='/'><HomeIcon/></Link>
          </IconButton>

          <Link to='/Campus' style ={{textDecoration: 'none'}}><Button>Campuses</Button></Link>
          <Link to='/Students' style ={{textDecoration: 'none'}}><Button>Students</Button></Link>

          
        </Toolbar>

  

  
      </AppBar>

      <Toolbar/>

        <Route exact path="/" component={MainPage} />
        <Route path="/Campus" component={Campus} />
        <Route path="/Students" component={Students} />
      <div className='padding'></div>
</Router>

  )


}

export default Navigation;