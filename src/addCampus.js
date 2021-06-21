import React from 'react';
import {Button, TextField} from '@material-ui/core'


class AddCampus extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            campusName: "",
            imageURL: "",
            address: "",
            description: "",
        }
    this.handleFormChanges = this.handleFormChanges.bind(this);
    }

    handleFormChanges(event) {
        let nam = event.target.name;
    
        let val = event.target.value;
    
        this.setState({ [nam]:val });
      }

    formSubmitHandler = (event) => {
        event.preventDefault();
    
        console.log("Testing the state");
        console.log(this.state);
        
    
        let values = this.state;
        alert("We submitted a form with this data " + values.campusName);

        (async () => {
            const rawResponse = await fetch('/Campus', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            const content = await rawResponse.json();
            console.log("This is the content");
            console.log(content);
            this.props.close();
          })();

          
    }

    render(){
        return(
            <form onSubmit={this.formSubmitHandler} className ='insert' >

                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.campusName}
                    onChange= {this.handleFormChanges}
                    name ='campusName'
                    label='campusname'
                    placeholder='Campus' />
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.imageURL}
                    defaultValue =''
                    onChange= {this.handleFormChanges}
                    name ='imageURL'
                    label='imageURL'
                    placeholder='Insert Image URL' />
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.address}
                    onChange= {this.handleFormChanges}
                    name ='address'
                    label='address'
                    placeholder='Address' />
                <TextField
                    required
                    variant='filled'
                    color='secondary'
                    type='text'
                    value= {this.state.description}
                    onChange= {this.handleFormChanges}
                    name ='description'
                    label='description'
                    placeholder='Description' />
                <Button variant='contained' type="submit">Submit</Button>

             </form>
        )
    }

}
export default AddCampus;