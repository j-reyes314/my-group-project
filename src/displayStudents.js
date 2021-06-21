import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import React, {useState, useEffect} from 'react';
import { Modal } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';
import { spacing } from '@material-ui/system';


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
  email: '',
  imageURL: '',
  school:'',
  gpa: '',
})

const DisplayStudents = (props) => {

  const styles = useStyles();
  const[studentInfo, setStudentInfo] = useState(defaultnames)
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [url,setURL] = useState('data:image/jpeg;base64,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')

  const[students, setStudents] = useState({
    id: props.data.id,
    firstname: props.data.firstname,
    lastName: props.data.lastname,
    email: props.data.email,
    imageURL: props.data.imageURL,
    school: props.data.school,
    gpa: props.data.gpa,
    })


  useEffect(()=>{
      setStudentInfo(props.data);
  })

  function onDelete()  {
    // alert("Deleting '" + props.data.firstname + " "+ props.data.lastname + "' id #: " + props.data.id);

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

props.close();
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

props.close()
  }

 

    return(
        
            <div className= {styles.root}>
              <Grid container spacing ={0} zeroMinWidth>
              <Card cardName ={styles.paper}>
      
                  <img src={url} />

                    <h1>{studentInfo.firstname} {studentInfo.lastname}</h1>
                    <h2>{studentInfo.school}</h2>
                


                    <Link to={`Students/${studentInfo.id}`} style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                  
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
                            value = {students.imageURL} 
                            onChange={e => setStudents({...students, imageURL: e.target.value})}
                            name= 'imageURL'
                            label='imageURl'
                            placeholder='imageURL' />
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