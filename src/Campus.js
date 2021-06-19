import Footer from'./footer';
import DisplayInfo from './displayInfo';
import { Grid } from '@material-ui/core';
import React from 'react';
import axios from 'axios';


class Campus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            campusArray: []
        }


    }

    componentDidMount(){
        // query get student info here and setState
        // console.log("setting state");
        // this.setState({
        //     name: "hello"
        // })
        const fetchData = async() => {
            // console.log("w.e");
            const result = await
        axios.get("http://localhost:3002/Campus").then(response => {
        let campusArrayNames = [];
        for(let i = 0; i < response.data.length ; i++){
            campusArrayNames[i] = (response.data[i].campusname + " " + response.data[i].address);
        }
        this.setState({
            campusArray: campusArrayNames
        })
        // this.setState({studentArray: response.data.data})
        
        console.log(campusArrayNames);
        console.log(response.data);
        console.log(response.data[0]);
        console.log(response.data[0].campusname);
        })
        .catch(error => {
          console.log(error);
        });
        // console.log(fetchData);
        // console.log("after await")
     }
     fetchData();
    }
    
    render(){ 

        let arr =[];
        {this.state.studentArray != '' ? arr = this.state.studentArray.map(element => <DisplayInfo key={element.id} data={element}/>):
        arr = <h1 styles ={{fontSize: '20pt'}}>There are no Campuses registered in database</h1>};
    
        return( 
            <div className='interface'>
            <h1>Campuses</h1>
            
            <Grid container spacing={2}>
            <Grid item xs={12} sm container>
                    <Grid container item>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                        <FormRow name = {this.state.campusArray[0]} />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                        <FormRow name = {this.state.name} />
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <footer><Footer isStudent ={false}/></footer>
            </div>
        )
    }

}

export default Campus;