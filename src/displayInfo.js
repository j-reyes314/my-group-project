import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import { CardContent } from '@material-ui/core';
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
                


                    <Link style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                    </Grid>  
                   
                    <Grid item>
                <Button><DeleteIcon/></Button>
                </Grid>  
                </Grid>
            </div>
     
    )
}

export default DisplayInfo;