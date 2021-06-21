import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid,Card, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// const defaultNames=()=>{[id: '',
// firstname: 'hello',
// lastname: "there",
// school: 'world,']}
const defaultnames =({
  id: '',
  campusName: "",
  imageURL: "",
  address: "",
  description: "",
})


const DisplayCampus = (props) => {
  const styles = useStyles();
  const[campusInfo, setCampusInfo] = useState(defaultnames)
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [url,setURL] = useState('data:image/jpeg;base64,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')

  useEffect(()=>{
      setCampusInfo(props.data);
      console.log(props.data);
  })

  const[campus, setCampus] = useState({
    id: "",
    campusName: "",
    imageURL: "",
    address: "",
    description: "",
    })
  
  function onDelete()  {
    // alert("Deleting '" + props.data.campusname + "' id #: " + props.data.id);

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

props.close();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSaveEdit =(e) =>  {
    // alert("Editing '" + props.data.campusname + "' id #: " + props.data.id);

    e.preventDefault();

    let values = [{id: campusInfo.id, ...campus}];
    console.log(values);
        fetch('/Campus', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    });
    props.close()
  }

<<<<<<< HEAD

    const studentsInCampus = () => {

    console.log("ok")
  
    const fetchData = async() => {
      console.log(campusInfo);
      axios.get("http://localhost:3002/Campus").then(response => {
      let studentsPerCampus = [];
      // for(let i = 0; i < response.data.length ; i++){
      //   studentsPerCampus[i] = response.data[i];
      //     if(response.data[i].id === campusInfo.id){
      //     alert("Matches found");
      //     console.log(studentsPerCampus[i].defaultnames);
      //   }
      // }
      })
      .catch(error => {
        console.log(error);
      });
  
      }
      fetchData();
    
  }
 
=======
  
>>>>>>> 870f1896c8460032c701f6444196a17b24540048

    return(
        
            <div className= {styles.pos}>
              <Grid container spacing ={0}>
                <Card>
             
                    <img src={url} />

                    <h1>{campusInfo.campusname}</h1>
              



                    <Link to='/' style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>
                    <Button onClick={() => studentsInCampus()}size ='small'>studentsInCampus</Button>
            
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
                    defaultValue= {campusInfo.campusname}
                    value = {campus.campusName}
                    onChange= {e => setCampus({...campus, campusName: e.target.value})}
                    name ='campusName'
                    label='campusname'
                    placeholder='Campus' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    defaultValue= {campusInfo.imageURL}
                    value = {campus.imageURL}
                    onChange=  {e => setCampus({...campus, imageURL: e.target.value})}
                    name ='imageURL'
                    label='imageURL'
                    placeholder='Insert Image URL' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    defaultValue= {campusInfo.address}
                    value = {campus.address}
                    onChange=  {e => setCampus({...campus, address: e.target.value})}
                    name ='address'
                    label='address'
                    placeholder='Address' />
                <TextField
                    variant='filled'
                    color='secondary'
                    type='text'
                    defaultValue= {campusInfo.description}
                    value={campus.description}
                    onChange=  {e => setCampus({...campus, description: e.target.value})}
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