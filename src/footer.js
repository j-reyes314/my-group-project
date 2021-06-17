import {Button} from '@material-ui/core'
import AddCampus from './addCampus'
import AddStudent from './addStudent'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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

function Footer(props){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const isStudent =props.isStudent;
    if(isStudent){

        return  (
            <div >
                
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >

                    <div style={modalStyle} className={classes.paper}>
                        <AddStudent/>
                    </div>
                    
                </Modal>
                
                <button type="button" onClick={handleOpen}>
                Add Student
                </button>
            </div>
        )
    }else{

        return  <div>
        <button type="button" onClick={handleOpen}>
          Add Campus
        </button>
        <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
            
            <div style ={modalStyle} className={classes.paper}>
                    <AddCampus/>
             </div>
        </Modal>
      </div>
    }
    
}

export default Footer;