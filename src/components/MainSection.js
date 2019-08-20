import React from 'React';

export default function MainSection(){
    return (
        <section className="main">
            <div className="overlay-whitener">
                <div className="main__intro-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="intro-container__svg svg--first" width="100%" height="100%" viewBox="0 0 500 500">
                        <circle className="intro-container__circle" cx="250" cy="250" r="189"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="intro-container__svg svg--second" width="100%" height="100%" viewBox="0 0 500 500">
                        <circle className="intro-container__circle" cx="250" cy="250" r="245"/>
                    </svg>

                    <h3 className="intro-container__h3">Hello There</h3>
                    <div className="intro-container__arrow-container">
                        <span className="arrow-container__span-first"></span>
                        <span className="arrow-container__span-second"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}