import Footer from'./footer';
import DisplayInfo from './displayInfo';
import { Grid } from '@material-ui/core';
import React from 'react';
import axios from 'axios';

function FormRow({name}) {
    return (
        <React.Fragment>
        <Grid item xs={4}>
        <DisplayInfo name ={name} />
        </Grid>
        <Grid item xs={4}>
            <DisplayInfo name ={name}/>
        </Grid>
        <Grid item xs={4}>
            <DisplayInfo name ={name}/>
        </Grid>
        </React.Fragment>
    );
}

class Campus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
        }


    }

    componentDidMount(){
        // query get student info here and setState
        console.log("setting state");
        // this.setState({
        //     name: "hello"
        // })
        const fetchData = async() => {
            console.log("w.e");
            const result = await
        axios.get("http://localhost:3002/Students").then(response => {
        console.log(response.data);
        //   this.setState({name: response.data})
        })
        .catch(error => {
          console.log(error);
        });
        console.log(fetchData);
        console.log("after await")
     }
     fetchData();
    }
    
    render(){ 
        return( 
            
            
            <div className='interface'>
            <h1>Students</h1>
            
            <Grid container spacing={2}>
            <Grid item xs={12} sm container>
                    <Grid container item>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                        <FormRow name = {this.state.name} />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                        <FormRow name = {this.state.name} />
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <footer><Footer isStudent ={true}/></footer>
            </div>
        )
    }

}

export default Campus;