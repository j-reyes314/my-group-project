import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import React, {useState, useEffect} from 'react';
import { Modal } from '@material-ui/core';
import { useForm } from "react-hook-form"
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

  const[students, setStudents] = useState({
    id: props.data.id,
    firstname: props.data.firstname,
    lastName: props.data.lastname,
    email: props.data.email,
    school: props.data.school,
    gpa: props.data.gpa,
    })


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
  

 const onSaveEdit = (e) => {
  e.preventDefault();

let values = students;
console.log(values);
    fetch('/Students', {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
});

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
                    <form onSubmit={onSaveEdit} className ='insert' >

                        <TextField
                            variant='filled'
                            color='secondary'
                            type='text'
                            value = {students.firstname} 
                            defaultValue = {studentInfo.firstname}
                            required
                            onChange={e => setStudents({...students,firstname: e.target.value})}
                            name= 'firstname'
                            label='firstName'
                            placeholder='First Name'/>
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='text'
                            value = {students.lastName} 
                            onChange={e => setStudents({...students,lastName: e.target.value})}
                            name= 'lastname'
                            label='lastName'
                            placeholder='Last Name' />
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='email'
                            value = {students.email} 
                            onChange={e => setStudents({...students, email: e.target.value})}
                            name= 'email'
                            label='email'
                            placeholder='Email' />
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='text'
                            value = {students.school} 
                            onChange= {e => setStudents({...students, school: e.target.value})}
                            name= 'school'
                            label='school'
                            placeholder='University' />
                        <TextField
                            variant='filled'
                            color='secondary'
                            type='number'
                            value = {students.gpa} 
                            onChange={e => setStudents({...students, gpa: e.target.value})}
                            name= 'gpa'
                            step='0.01'
                            min='0'
                            max='4'
                            label='gpa'
                            placeholder='GPA' />
                            <Button variant='contained' type="submit">Save Changes</Button>
                            

                        </form>
                        
                    </div>
                    
                </Modal>
          
                </Card>  
              </Grid>

            </div>     
     
    )
    
}

export default DisplayStudents;