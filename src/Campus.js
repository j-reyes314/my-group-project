import Footer from './footer'
import DisplayInfo from'./displayInfo';
import React from 'react';


class Campus extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                name: "",
                studentArray: []
    
            }
    
    
        }

    render(){
    let arr =[];
    {this.state.studentArray != '' ? arr = this.state.studentArray.map(element => <DisplayInfo key={element.id} data={element}/>):
    arr = <h1 styles ={{fontSize: '20pt'}}>There are no Campuses registered in database</h1>};

    return(
        <div className='interface'>

        <h1>Campus</h1>

        {/* <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/> */}

        {arr}

        <footer><Footer isStudent = {false}/></footer>
        </div>
    )}
}

export default Campus;