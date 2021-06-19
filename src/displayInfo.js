import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/styles';

import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';

const useStyles = makeStyles({
    root:{
        minWidth:275,
    },
    pos:{
        marginBottom: 12,
    }
})



const DisplayInfo = (props) => {
  const styles = useStyles();
  const [name, setName] = useState("");

  
  useEffect(() => {
    setName(props.name);
    //     axios.get("http://localhost:3002/Students").then(response => {
    //       console.log(response.data);
    //     //   this.setState({name: response.data})
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
  });


    return(
        
            <div className= {styles.pos}>
              <Grid container spacing ={0}>
             
                  <Grid item>
                  

                    <h1>{name}</h1>
                    <ul>
                      <li></li>
                      <li></li>

                    </ul>
                


                    <Link to='/' style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                    </Grid>  
                   
                    <Grid item>
                <Button><DeleteIcon/></Button>
                </Grid>  
                </Grid>
            </div>
     
    )
}

export default DisplayInfo;