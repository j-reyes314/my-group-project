import {Button} from '@material-ui/core'

const singleStudent=()=>{

}

function Footer(props){

    const isStudent =props.isStudent;
    if(isStudent){
        return <Button>Add Student</Button>
    }else{
        return <Button>Add Campus</Button>
    }
    
}

export default Footer;