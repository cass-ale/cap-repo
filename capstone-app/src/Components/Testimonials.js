import React from "react";
import person1 from "./Images/Person 1.jpg";
import person2 from "./Images/Person 2.jpg";
import person3 from "./Images/Person 3.jpg";
import person4 from "./Images/Person 4.jpg";
import star from "./Images/Star Icon.jpg";



function Testimonials() {
    return (
        <section className='testimonials'>
                <h1 style={{color:"#333333"}}>Testimonials</h1>
                <div className='testimcontainer'>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
                <div className='reviewer'><img src={person1} alt='Reviewer' /><p id='reviewer'>Francis B.</p></div>
                <p>"Always room for desert!"</p>
                    </div>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
                <div className='reviewer'><img src={person2} alt='Reviewer' /><p id='reviewer'>Terri F.</p></div>
                    <p>"Amazing!"</p>
                    </div>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
                <div className='reviewer'><img src={person3} alt='Reviewer' /><p id='reviewer'>Amber H.</p></div>
                <p>“Mario and Adrian know how to make diners feel welcomed!”</p>
                    </div>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
               <div className='reviewer'><img src={person4} alt='Reviewer' /><p id='reviewer'>Leon Q.</p></div>
               <p>"Loved the Greek Salad!"</p>
                    </div>
                </div>
            </section>
            )
}

export default Testimonials;