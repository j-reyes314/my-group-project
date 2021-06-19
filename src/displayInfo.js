import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';

const useStyles = makeStyles({
    root:{
        minWidth:275,
    },
    pos:{
        marginBottom: 12,
    }
})

// const defaultNames=()=>{[id: '',
// firstname: 'hello',
// lastname: "there",
// school: 'world,']}
const defaultnames =({
  id: '',
  firstname:'',
  lastname:'',
  school:'',
})



const DisplayInfo = (props) => {
  const styles = useStyles();
  const[studentInfo, setStudentInfo] = useState(defaultnames)

  useEffect(()=>{
      
  })

    return(
        
            <div className= {styles.pos}>
              <Grid container spacing ={0}>
             
                  <Grid item>
                  

                    <h1>{studentInfo.firstname} {studentInfo.lastname}</h1>
                    <h2>{studentInfo.school}</h2>
                


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