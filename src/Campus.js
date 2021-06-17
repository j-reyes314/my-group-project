import Footer from './footer'
import Add from './addCampus'
import DisplayInfo from'./displayInfo';

function Campus (){
    return(
        <div className='interface'>

        <h1>Campus</h1>

        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>
        <DisplayInfo/>

        <footer><Footer isStudent = {false}/></footer>
        </div>
    )
}

export default Campus;