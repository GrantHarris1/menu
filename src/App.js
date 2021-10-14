
import './App.css';
// import axios from 'axios'; 
import Lunch from './Lunch';
import Dinner from './Dinner';
function App() {
    let hours = new Date().getHours()
    console.log(hours)
    return (

        <div className='back' id="back">

            
            <div className="main">
                <header className="">
                    <h1>Monk's Café</h1>
                    <h2>Menu</h2>
                    <h5 className= 'border'>** Big Salad Currently Unavailable**</h5>
                </header>
                {hours >= 13 ?
                    <div className="dinnerItems">
                        <h3>Drinks:</h3>
                        <ul>
                            <li>Coffee - $2</li>
                            <li>Tea - $2</li>
                            <li>Milk - $2</li>
                        </ul>
                        <hr />
                        <Dinner />
                    </div> :

                    <div className="lunchItems">
                        <h3>Drinks:</h3>
                        <ul>
                            <li>Coffee - $2</li>
                            <li>Tea - $2</li>
                            <li>Milk - $2</li>
                        </ul>
                        <hr />
                        <Lunch />
                    </div>
                }
            </div>
        </div>
    );
}

export default App;

