import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import React, {useState, useEffect} from 'react';
import { Modal } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';
import { spacing } from '@material-ui/system';

// const useStyles = makeStyles({
//     root:{
//         minWidth:275,
//     },
//     pos:{
//         marginBottom: 12,
//     }

    
// })

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     overflow: 'hidden',
//     padding: '2px',
//   },
//   pos:{
//             marginBottom: 12,
//   },
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     borderRadius: '20px',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// const defaultNames=()=>{[id: '',
// firstname: 'hello',
// lastname: "there",
// school: 'world,']}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const defaultnames =({
  id: '',
  firstname:'',
  lastname:'',
  school:'',
})

const DisplayStudents = (props) => {

  const styles = useStyles();
  const[studentInfo, setStudentInfo] = useState(defaultnames)
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  useEffect(()=>{
      setStudentInfo(props.data);
  })

  function onDelete()  {
    alert("Deleting '" + props.data.firstname + " "+ props.data.lastname + "' id #: " + props.data.id);

    fetch('/Students', {
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onEdit()  {
   
    //  alert("Editing '" + props.data.campusname + "' id #: " + props.data.id);
    



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
        
            <div className= {styles.root}>
              <Grid container spacing ={0} zeroMinWidth>
              <Card cardName ={styles.paper}>
      
                  

                    <h1>{studentInfo.firstname} {studentInfo.lastname}</h1>
                    <h2>{studentInfo.school}</h2>
                


                    <Link to='/' style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                  
                    <Button onClick={handleOpen}>Edit</Button>
                    <Button onClick={()=> onDelete()}><DeleteIcon/></Button>

                    <Modal 
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      >

                    <div style={modalStyle} className={styles.paper}>
                    <form onSubmit='' className ='insert' >

                        <TextField
                            variant='filled'
                            color='secondary'
                            type='text'
                            value = {studentInfo.firstname} 
                            onChange=''
                            name= 'firstName'
                            label='firstName'
                            placeholder='First Name'/>
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='text'
                            value = {studentInfo.lastname} 
                            onChange=''
                            name= 'lastName'
                            label='lastName'
                            placeholder='Last Name' />
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='email'
                            value = {studentInfo.email} 
                            onChange=''
                            name= 'email'
                            label='email'
                            placeholder='Email' />
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='text'
                            value = {studentInfo.school} 
                            onChange= ''
                            name= 'school'
                            label='school'
                            placeholder='University' />
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='number'
                            value = {studentInfo.gpa} 
                            onChange=''
                            name= 'gpa'
                            step='0.01'
                            min='0'
                            max='4'
                            label='gpa'
                            placeholder='GPA' />
                            <Button variant='contained' type="submit">Submit</Button>
                            

                        </form>
                        
                    </div>
                    
                </Modal>
          
                </Card>  
              </Grid>
            </div>
     
    )
}

export default DisplayStudents;