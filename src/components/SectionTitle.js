import React from 'react';


export default function Sectiontitle({title, white, children}){
    if(children){
        return (
            <div className={white ? "section-title section-title--white" : "section-title"}>
                <h4 className="section-title__title">{title}</h4>
                <div className="section-title__circle"></div>
                <div className="section-title__text">
                    <p>{children}</p>
                </div>
            </div>
        )   
    } else {
        return ( 
        <div className={white ? "section-title section-title--white" : "section-title"}>
            <h4 className="section-title__title">{title}</h4>
            <div className="section-title__circle"></div>
            <hr className="section-title__white-bar" />
        </div>
        )
    }
}