import { useParams } from "react-router";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function DynamicDisplay(){
    const { id } = useParams();
    console.log(id);
    const [name,setName] = useState();

useEffect(()=>{
  fetchData()
})

    const fetchData = async() => {
      // console.log("w.e");
      const result = await
  axios.get(`http://localhost:3002/Campus/${id}`).then(response => {
    console.log(response.data);
  // let campusArrayNames = [];
  // for(let i = 0; i < response.data.length ; i++){
  //     campusArrayNames[i] = response.data[i];
  //     console.log(campusArrayNames[i].firstname);
    // }
  // if(this.state.campusArray !== campusArrayNames){
  //     this.setState({
  //         campusArray: campusArrayNames
  //     })
  // }

  })
  .catch(error => {
    console.log(error);
  });
}

    return (
        <div>
            <h1>Work in Progress</h1>
          <h3>ID: {id}</h3>
        </div>
      );
}

export default DynamicDisplay;