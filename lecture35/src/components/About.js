import React from 'react'
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();

    const goToContact = ()=>{
        navigate('/home/contact');
    }
    return (
        <div>
            Welcome to About
            <button onClick={goToContact}>Go to Contact</button>
        </div>
    )
}

export default About
