import Footer from'./footer';
import Lehman_College from './Lehman_College.jpg'

function Campus (){
    return(

        <div className='interface'>
        <h1>Students</h1>
        <img src={Lehman_College} alt="school" />
      
        <footer><Footer isStudent ={true}/></footer>
        </div>
    )
}

export default Campus;