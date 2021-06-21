import Footer from'./footer';
import DisplayStudents from './displayStudents';
import { Grid } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import FormRow from './formRow';


class Students extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            studentArray: [],
            toggle : false,
        }

    }

    fetchData = async() => {
        // console.log("w.e");
        const result = await
    axios.get("http://localhost:3002/Students").then(response => {
    let studentArrayNames = [];
    for(let i = 0; i < response.data.length ; i++){
        studentArrayNames[i] = response.data[i];
        // console.log(studentArrayNames[i].firstname);
    }
    if(this.state.studentArray != studentArrayNames){
    this.setState({
        studentArray: studentArrayNames
    })}

    })
    .catch(error => {
      console.log(error);
    });
    // this.toggled()
 }

    componentDidMount(){

     this.fetchData();
    }


    toggled(){
        this.fetchData();
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    createGrid(arr){
        for (let i =0; i <this.state.studentArray.length/3; i++){
            arr[i] = this.state.studentArray.slice(i*3,(i*3)+3);
            arr[i] = arr[i].map(element => <DisplayStudents key={element.id}  close={()=> this.toggled()} data ={element}/>)
            
            if(i+1 == this.state.studentArray.length/3 && this.state.studentArray.length%3 > 0 ){
                arr[i+1] = this.state.studentArray.slice((i+1)*3,this.studentArray.length);
                arr[i+1] =arr[i].map(element => <DisplayStudents key={element.id}  close={()=> this.toggled()} data ={element}/>);
            }
           
        }
        for(let j =0; j < arr.length;j++){
            arr[j] = <FormRow arr ={arr[j]}/>
            

        }

        return arr;
    }
    
    render(){ 

        let arr =[];
        {this.state.studentArray != '' ? arr = this.createGrid(arr):
        arr = <h1 styles ={{fontSize: '20pt'}}>There are no Students registered in database</h1>};
        
       
        return( 
            <div className='interface'>
            <div>
            <h1 syle ={{fontSize: '40pt'}}>Students</h1>
            <Footer close={()=> this.toggled()} isStudent ={true}/>
            </div>
      
            
            <Grid container spacing={0} >
                <Grid item xs={0} sm container>
                    <Grid container item>
                        <Grid container spacing={0} style ={{flexGrow: '1'}}>
                            <Grid container item xs={8} spacing={4}  style={{padding: '2em'}}>
                                {arr}
                            </Grid>
                           
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            

            </div>
        )
    }

}

export default Students;