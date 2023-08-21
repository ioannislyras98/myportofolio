import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc"></span>
            <div className="skillBars">
                <div className="skillbar">
                    <img src="Scripting" alt="" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src="" alt="" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src="" alt="" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>    
    )
}