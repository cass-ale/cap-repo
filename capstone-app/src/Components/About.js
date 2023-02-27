import React from "react";
import mario1 from "./Images/Mario and Adrian A.jpg";
import mario2 from "./Images/Mario and Adrian B.jpg";

function About() {
    return (
        <section className='about'>
                <div className='abouttext'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Founded in 2013, Little Lemon's cuisine aims to capture the simplicity and joy of Mediterranean dining. Executive Chefs Mario Lennox and Adrian Moore were both born and raised in Chicago, and their stellar attention to detail ensures that every visit feels as magical as the first. Here at Little Lemon, you'll be welcomed in as family. We know you'll enjoy your meal at your soon-to-be favorite restaurant!</p>
                </div>
                <div className='abtimg'>
                <img src={mario1} alt="Head Chefs Mario and Adrian" id="abtimg" />
                <img src={mario2} alt="Head Chefs Mario and Adrian" id='abtimg'/>
                </div>
            </section>
    )
}

export default About;