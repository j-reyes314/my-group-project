import { useParams } from "react-router";

function DynamicDisplay(){
    const { id } = useParams();
    console.log(id);

    return (
        <div>
          <h3>ID: {id}</h3>
        </div>
      );
}

export default DynamicDisplay;