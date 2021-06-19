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

class Students extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            studentArray: []

        }


    }

    fetchData = async() => {
        // console.log("w.e");
        const result = await
    axios.get("http://localhost:3002/Students").then(response => {
    let studentArrayNames = [];
    for(let i = 0; i < response.data.length ; i++){
        studentArrayNames[i] = response.data[i];
        console.log(studentArrayNames[i].firstname);
    }
  
    this.setState({
        studentArray: studentArrayNames
    })

    })
    .catch(error => {
      console.log(error);
    });
 
 }

    componentDidMount(){

        
     this.fetchData();
    }
    
    render(){ 

        let arr =[];
        {this.state.studentArray != '' ? arr = this.state.studentArray.map(element => <DisplayInfo key={element.id} data={element}/>):
        arr = <h1 styles ={{fontSize: '20pt'}}>There are no Students registered in database</h1>};

        return( 
            <div className='interface'>
            <div>
            <h1>Students</h1>
            <Footer close={()=>this.fetchData()} isStudent ={true}/>
            </div>
      
            
            {/* <Grid container spacing={2}>
            <Grid item xs={12} sm container>
                    <Grid container item>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                        <FormRow name = {this.state.studentArray[0]} />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                        <FormRow name = {this.state.name} />
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
            {arr}

            </div>
        )
    }

}

export default Students;