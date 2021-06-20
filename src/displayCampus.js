import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';
import AddCampus from './addCampus'
import Modal from '@material-ui/core/Modal';


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


const DisplayCampus = (props) => {
  const styles = useStyles();
  const[campusInfo, setCampusInfo] = useState(defaultnames)

  useEffect(()=>{
      setCampusInfo(props.data);
  })

  function onDelete()  {
    alert("Deleting '" + props.data.campusname + "' id #: " + props.data.id);

    fetch('/Campus', {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: props.data.id
    })
})

  }

  function onEdit()  {
    alert("Editing '" + props.data.campusname + "' id #: " + props.data.id);



//     fetch('/Campus', {
//     method: 'DELETE',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         id: props.data.id
//     })
// })

  }

 

    return(
        
            <div className= {styles.pos}>
              <Grid container spacing ={0}>
                <Card>
                  {/* <Grid item> */}
                  

                    <h1>{campusInfo.campusname}</h1>
              
                


                    <Link to='/' style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                    {/* </Grid>   */}
                   
                    {/* <Grid item> */}
                    <Button onClick={() => onEdit()}>Edit</Button>
                    <Button onClick={()=> onDelete()}><DeleteIcon/></Button>
                {/* </Grid>   */}
                </Card>
                    <Grid item>

                    <button onClick={() => onEdit()}>Edit</button>
              
                </Grid>  
                </Grid>
            </div>
     
    )
}

export default DisplayCampus;