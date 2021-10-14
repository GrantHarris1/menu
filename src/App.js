
import './App.css';
// import axios from 'axios'; 
import Lunch from './Lunch';
import Dinner from './Dinner';
function App() {
    return (
        <div>
            <div className="main">
                <header className="">
                    <h1>Monk's Café</h1>
                    <h2>Menu</h2>
                </header>
                <div className="lunchItems">
                    <Lunch />
                </div>
                <div className="dinnerItems">
                    <Dinner />
                </div>
            </div>
        </div>
    );
}

export default App;

