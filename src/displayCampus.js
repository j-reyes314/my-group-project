import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';
import AddCampus from './addCampus'
import Modal from '@material-ui/core/Modal';
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
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '20px',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
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


const DisplayCampus = (props) => {
  const styles = useStyles();
  const[campusInfo, setCampusInfo] = useState(defaultnames)
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);


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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
             
                  

                    <h1>{campusInfo.campusname}</h1>
              
                


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
                    value= {campusInfo.campusname}
                    onChange= ''
                    name ='campusName'
                    label='campusname'
                    placeholder='Campus' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {campusInfo.imageURL}
                    onChange= ''
                    name ='imageURL'
                    label='imageURL'
                    placeholder='Insert Image URL' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {campusInfo.address}
                    onChange= ''
                    name ='address'
                    label='address'
                    placeholder='Address' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {campusInfo.description}
                    onChange= ''
                    name ='description'
                    label='description'
                    placeholder='Description' />
                <Button variant='contained' type="submit">Submit</Button>

             </form>
                        
                    </div>
                    
                </Modal>
          
                </Card>
                    
                </Grid>
            </div>
     
    )
}

export default DisplayCampus;