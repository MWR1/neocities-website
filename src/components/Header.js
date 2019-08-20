import React from 'React';

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            toggled: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }


    toggleDropdown(){
        this.setState({toggled: !this.state.toggled});
    }

    render(){
        return (
            <header>
                <div className="header__lobby">
                    <h2>Lobby</h2>
                </div>

                <HeaderHamburger toggled={this.state.toggled} onClick={this.toggleDropdown}/>
                <HeaderDropdown  toggled={this.state.toggled} />
            </header>
        );
    }
    

}

const HeaderHamburger = ({toggled, onClick}) => {
    return (
        <div className="header__hamburger-container" onClick={onClick}>
                <div className={ !toggled ? "hamburger-container__hamburger" :
                    "hamburger-container__hamburger hamburger--active"
                    }>
                    <span className="hamburger__span span--first"></span>
                    <span className="hamburger__span span--second"></span>
                    <span className="hamburger__span span--third"></span>
                </div>
            </div>
    );
}

class HeaderDropdown extends React.Component {
    constructor(props){
        super(props);
        this.scrollToHash = this.scrollToHash.bind(this);
    }

    scrollToHash(){
        const { hash } = window.location;
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth"});
    }

    render(){
        const {toggled, scrollToHash} = this.props;
        return (
            <div className={!toggled ? "header__dropdown" : "header__dropdown dropdown--active"}>
                <a href="#about" onClick={scrollToHash} className="header__a">About</a>
                <a href="#contact" onClick={scrollToHash} className="header__a">Contact</a>
                <a href="#footer" onClick={scrollToHash} className="header__a">Credits</a>
            </div>  
        ); 
    }
}
