import Footer from './footer'
import Add from './addCampus'
import DisplayInfo from'./displayInfo';
import { Grid } from '@material-ui/core';
import React from 'react';

function Campus (){
    
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


    return(
        <div className='interface'>

        <h1>Campus</h1>

        <Grid container spacing={2}>
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

        {/* <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/> */}

        <footer><Footer isStudent = {false}/></footer>
        </div>
    )
}

export default Campus;