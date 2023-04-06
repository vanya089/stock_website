import React from 'react';
import Header from "./components/header/Header";
import './App.css'
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
    return (
        <div className="content">
            <div className="wrapper">
                <Header/>
                <Home/>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
