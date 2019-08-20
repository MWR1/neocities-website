import React from 'react';
import SectionTitle from './SectionTitle.js';
import manageObserver from '../observer.js';

export default class AboutSection extends React.Component {
    constructor(){
        super();
        this.links = {
            square: "https://mwr1.neocities.org/minigame/minigame.html",
            personal: "https://mwr1.neocities.org/personal/personal.html",
            failedChat: "http://mwrs-failed-chat.herokuapp.com",
            diepioClone: "https://mwr-dot-io.glitch.me"
        }
        
        this.projImg = {
            square: require("../images/square-project.png"),
            personal: require("../images/personal-website.png"),
            failedChat: require("../images/chat-project.png"),
            diepioClone: require("../images/clone-project.png"),
        
        }
    }

    render(){
        const {links, projImg} = this;
        return (
            <section id="about" className="about">
                <svg className="about__decorative-svg decorative-svg--first" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="300" viewBox="0 0 1920 400">
                    <path d="M2036-25s45.152,322.89,249.187,302.487,359.1-281.568,530.49-224.438,330.536,204.035,469.28,114.259,208.115-102.017,367.262-44.888S3899.762,315.155,3960.972,241.7s0-154.878,0-154.878v-118.7Z" transform="translate(-2036 18.872)"/>
                </svg>

                <div className="about__panels-section">
                    <SectionTitle title={"What is this?"} white={false} >
                        This is the lobby to all of the projects and pages that I've made
                        and published. Of course, not every project shown here is 
                        necessarily complete.
                    </SectionTitle>

                    <ProjectPanel picPath={projImg.square} title={"The S.Q.U.A.R.E project"} link={links.square} isDiscontinued={true}>
                        This project was actually the first project 
                        published to this Neocities site. It's a page 
                        that takes user input and makes a square react.
                        I thought I was some sort of super genius when I thought
                        of this idea at first... lol
                    </ProjectPanel>
                    <ProjectPanel picPath={projImg.personal} title={"My personal website"} link={links.personal} isDiscontinued={false}>
                        Pretty self explanatory to be honest.
                        It contains some things about me and what I do.
                    </ProjectPanel>
                    <ProjectPanel picPath={projImg.failedChat} title={"My failed chat"} link={links.failedChat} isDiscontinued={true}>
                        By making this project I've experimented working with server stuff using Node 
                        and WebSockets, 2 amazing technologies, that enable you to build a chat very,
                        very easily.
                    </ProjectPanel>
                    <ProjectPanel picPath={projImg.diepioClone} title={"The diep.io clone"} link={links.diepioClone} isDiscontinued={false}>
                        This might be one of the biggest projects I've attempted so far, to recreate 
                        the game "diep.io". I really enjoyed playing this game and in the near future
                        I want to build a game similar to it, this being my first attempt.
                    </ProjectPanel>
                </div>

                <svg className="about__decorative-svg decorative-svg--second" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1922.897" height="548.856" viewBox="0 0 1922.897 548.856">
                    <path  d="M2033.1,2134.573s643.159,48.719,835.624,273.035,71.888-189.774,276.74-273.035,365.685-371.079,542.668-60.008S3956,2255.247,3956,2255.247V2462.9L2033.1,2482.22Z" transform="translate(-2033.103 -1833.364)"/></svg>
            </section>
        );
    }
}

class ProjectPanel extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }


   
    componentDidMount(){
        manageObserver({create: true, reference: this.ref, threshold: 0.5, classToAdd: "panel--active"});
    }

    componentWillUnmount(){
        manageObserver({destroy: true, reference: this.ref})
    } 
    
    render(){
        const {picPath, title, link, isDiscontinued, children} = this.props;
        if(isDiscontinued){
            return (
                <div className="about__panel" ref={this.ref}>
                    <div className="about__band"></div>
                    <div className="about__image" style={{background: `url(${picPath}) bottom no-repeat`}}/>
                    <div className="about__project-details">
                        <a href={link} className="about__title">{title}</a>
                        <SvgBar />
                        <p className="about__project-description">{children}</p>
                        <h3 className="about__discontinued">[ DISCONTINUED ]</h3>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="about__panel" ref={this.ref}>
                    <div className="about__band"></div>
                    <div className="about__image" style={{background: `url(${picPath}) bottom no-repeat`}}/>
                    <div className="about__project-details">
                        <a href={link} className="about__title">{title}</a>
                        <SvgBar />
                        <p className="about__project-description">{children}</p>
                    </div>
                </div>
            );
        }
    }
}


function SvgBar(){
    return (
        <svg className="about__svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="66" viewBox="0 0 1134 66">
            <g transform="translate(-448.5 -2167)">
                <line x2="111" transform="translate(448.5 2169.5)"/>
                <line x2="111" transform="translate(1471.5 2169.5)"/>
                <line x2="132" y2="61" transform="translate(559.5 2169.5)"/>
                <line x2="650" transform="translate(691.5 2230.5)"/>
                <line x1="132" y2="61" transform="translate(1340.5 2169.5)"/>
            </g>
        </svg>
    )
}