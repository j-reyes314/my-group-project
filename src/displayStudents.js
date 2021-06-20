import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';

// const useStyles = makeStyles({
//     root:{
//         minWidth:275,
//     },
//     pos:{
//         marginBottom: 12,
//     }

    
// })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: '2px',
  },
  pos:{
            marginBottom: 12,
        },
  paper: {
    maxWidth: 400,
    margin: '10px auto',
    padding: 2,
  },
}));

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



const DisplayStudents = (props) => {
  const styles = useStyles();
  const[studentInfo, setStudentInfo] = useState(defaultnames)

  useEffect(()=>{
      setStudentInfo(props.data);
  })

 

    return(
        
            <div className= {styles.root}>
              <Grid container spacing ={0} zeroMinWidth>
              <Card cardName ={styles.paper}>
                {/* <Grid item> */}
                  

                    <h1>{studentInfo.firstname} {studentInfo.lastname}</h1>
                    <h2>{studentInfo.school}</h2>
                


                    <Link to='/' style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                  
                {/* </Grid>   */}
                
                {/* <Grid item> */}
                  <Button><DeleteIcon/></Button>
                {/* </Grid> */}
                </Card>  
              </Grid>
            </div>
     
    )
}

export default DisplayStudents;