import Footer from './footer'
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