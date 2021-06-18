import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        minWidth:275,
    },
    pos:{
        marginBottom: 12,
    }
})

function DisplayInfo(props){
 const styles = useStyles();

    return(
        
            <div className= {styles.pos}>
                <Card className ={styles.root}>
                    
                  <CardContent>

                    <h1>{props.name}</h1>

                  </CardContent>


                    <Link style ={{textDecoration: 'none'}}><Button size ='small'>See More</Button></Link>

                    <CardActions>

                      <Button><DeleteIcon/></Button>

                    </CardActions>
                </Card> 
            </div>
     
    )
}

export default DisplayInfo;