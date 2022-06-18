import React from 'react'
import '../Testimonials1.css'

function Testimonials() {
    return (
        <div>

<main>

<div class="tslider">

    <div class="tbuttons">
        <div class="tprevious"></div>
        <div class="tnext"></div>
    </div>

    <div class="tslide">
        <div class="ttestimonial">
            <blockquote>“ I’ve been interested in coding for a while but never
                taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my
                dreams and so excited about the future. ”</blockquote>
            <p class="tauthor">Tanya Sinclair
                <span>UX Engineer</span>
            </p>
        </div>

        <div class="tslider-img">
            <img src="https://alcs-slider.netlify.app/images/image-tanya.jpg" alt="Author Image" />
        </div>

    </div>

    <div class="tslide">
        <div class="ttestimonial">
            <blockquote>“ If you want to lay the best foundation possible I’d
                recommend taking this course.
                The depth the instructors go into is incredible. I now feel so
                confident about
                starting up as a professional developer. ”</blockquote>
            <p class="tauthor">John Tarkpor
                <span>Junior Front-end Developer</span>
            </p>
        </div>

        <div class="tslider-img">
            <img src="https://alcs-slider.netlify.app/images/image-john.jpg" alt="Author Image" />
        </div>

    </div>

</div>

</main>
            
        </div>
    )
}

export default Testimonials
