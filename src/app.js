import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Link, Route} from 'react-router-dom';
/*TO BE CONTINUED ^*/
const app = document.getElementById("app");
const loader = app.nextElementSibling;

//components
import Header from './components/Header.js';
import MainSection from './components/MainSection.js';
import AboutSection from './components/AboutSection.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.setState({loading: false});
        this.props.hideLoader();
        if(window.location.hash !== ""){
            const { hash } = window.location;
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if(element) element.scrollIntoView({behavior: "smooth"});
        }
    }

    render(){
        if(!this.state.loading){
            return (
                <>
                <Header />
                <MainSection />
                <AboutSection />
                <ContactSection />
                <Footer />
                </>
            );
        }
        return null;
    }
}

ReactDOM.render(<App hideLoader={hideLoader} />, app);




function hideLoader(){
    loader.classList.add("loader--loaded");
   // const loaderChildren = Array.from(loader.children);
    setTimeout(() => loader.style.display = "none", 1600)
}