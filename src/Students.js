import Footer from'./footer';
import DisplayInfo from './displayInfo';
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
        <h1>Students</h1>
        
        <Grid container spacing={2}>
        <Grid item xs={12} sm container>
                <Grid container item>
                  <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                      <FormRow name = 'Students' />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <FormRow name = 'Students' />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>

        <footer><Footer isStudent ={true}/></footer>
        </div>
    )
}

export default Campus;