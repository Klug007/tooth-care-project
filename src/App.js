import "./App.css";
import Card from "./components/card/Card";
import Doctor from "./components/doctor/Doctor";
import Foooter from "./components/footer/Foooter";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Main />
            <Doctor />
            <Card />
            <Foooter />
        </div>
    );
}

export default App;
