import { useParams } from "react-router";
import axios from 'axios';

function DynamicDisplay(){
    const { id } = useParams();
    console.log(id);  


    const fetchStudent = () => {
      let studentInfo;
      const fetchData = async() => {
        axios.get("http://localhost:3002/Students").then(response => {
          for(let i = 0; i < response.data.length ; i++){
            if(response.data[i].id == id){
              studentInfo = response.data;
            console.log(studentInfo);
            } 
          } 
        })
        .catch(error => {
          console.log(error);
        });
        }
        fetchData(); 
      }

      const fetchCampus = () => {
      let campusInfo;
      const fetchData = async() => {
        axios.get("http://localhost:3002/Campus").then(response => {
          for(let i = 0; i < response.data.length ; i++){
            if(response.data[i].id == id){
            campusInfo = response.data[i];
            console.log(campusInfo);
            } 
          } 
        })
        .catch(error => {
          console.log(error);
        });
        }
        fetchData(); 
      }

  

    return (
        <div>
          <h3>ID: {fetchStudent()}</h3>
        </div>
      );
}

export default DynamicDisplay;