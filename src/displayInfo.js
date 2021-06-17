import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

function DisplayInfo(props){

    return(
        
            <div>
                    
                <Link>
                    <h1>Name</h1>

                    <h2>Email</h2>
                    <h3>GPA</h3>

                </Link>

                <Button><DeleteIcon/></Button>

            </div>
     
    )
}

export default DisplayInfo;