import React, {Fragment} from 'react';
import NavBar from "./components/NavBar";
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Fragment>
            <NavBar/>
            <Main/>
            <Footer/>
        </Fragment>
    );
};

export default App;
