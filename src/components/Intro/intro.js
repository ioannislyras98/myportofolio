import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContect">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ioannis</span><br/>Software Engineer</span>
                <p className="introPara">I am an Undergraduate Student of Informatics, primarily interested in <br/>Software Engineering and Internet Applications. Highly focused on the result, <br/>thrive in a team environment, good listener and knowledge enthusiast.
                <br/>Currently pursuing to gain work experience, further develop my abilities and <br/>expand my knowledge. These days, i work as Microsoft Power Platform <br/>Software Engineer. Also, in my free time i like creating web and mobile apps.</p> 
                <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;