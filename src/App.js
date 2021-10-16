
import './App.css';
// import axios from 'axios'; 
import Lunch from './Lunch';
import Dinner from './Dinner';
import Clock from './Clock';
import Springs from './Springs';


function App() {
    let hours = new Date().getHours()
    console.log(hours)
    return (

        <div className='back' id="back">


            <div className="main">

                <header className="head border">
                    <h1>Monk's Café</h1>
                    <p>2880 Broadway
                    Morningside Heights, Manhattan |
                    Hours: 7 Days a Week 11:00am. until 10:00 pm.
                        </p>
                    <h3> Lunch served until 2:00pm.</h3>
                    <h3>Home Of The BIG Salad!*</h3>
                    <p>*Currently Unavailable</p>


                    <Clock />
                    <Springs /> 
                    <br />
                    <Springs /> 
                    <br />
                    <Springs /> 




                </header>

                {hours >= 9 ?
                    <div className="dinnerItems card border shadow-lg p-3 mb-5 bg-body rounded" id='card'>

                        <a href='https://order.online/store/TomsRestaurant-177261/en-US/?hideModal=true&pickup=true&utm_source=dd-partner-link'>
                            Click Here To Order Online!
                            </a>
                        <h1>Menu:</h1>

                        <h3>Drinks:</h3>
                        <h4>
                            <br />Coffee - $2
                            <br />Tea - $2
                            <br />Milk - $2
                        </h4>
                        <hr />

                        <Dinner />
                    </div> :

                    <div className="lunchItems card border shadow-lg p-3 mb-5 bg-body rounded" id='card'>
                        <a href='https://order.online/store/TomsRestaurant-177261/en-US/?hideModal=true&pickup=true&utm_source=dd-partner-link'>
                            Click Here To Order Online!
                            </a>
                        <h1>Menu:</h1>
                        <h3>Drinks:</h3>
                        <h4>
                            <br /> Coffee - $2
                            <br />Tea - $2
                            <br />Milk - $2
                        </h4>
                        <hr />
                        <Lunch />
                    </div>
                }
            </div>
        </div>
    );
}

export default App;

