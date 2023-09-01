import { useEffect, useState, useRef } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Collaborators = ({ showScroll, text, collaborators }) => {
    console.log(text)
    useEffect(() => {
        gsap.to('.background', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
                once: true
            },
        })
        gsap.to('.bigger-circle', {
            y: '130vh',
            x: '-30vw',
            scrollTrigger: {
                trigger: '.contact',
                start: "top 30vh",
                end: 'top 30vh',
                scrub: 0.5,
            },
        })
        gsap.to('.smaller-circle', {
            y: '130vh',
            x: '9vw',
            y: '-60vh',
            backgroundColor: 'var(--bg-color-four)',
            scrollTrigger: {
                trigger: '.contact',
                start: "top 30vh",
                end: 'top 30vh',
                scrub: 0.5,
            },
        })
    }, [])

    return (
        <div className='collaborators' id='collaborators'>
            <h2 className='titles'>colaboradoras</h2>
            <div className="text">
                <div className="sub-title">
                    <div className='circles-images'>
                        <div className="up" style={{ backgroundImage: `url(${text.imageTop.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        <div className="left" style={{ backgroundImage: `url(${text.imageLeft.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                        <div className="low" style={{ backgroundImage: `url(${text.imageLow.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                    </div>
                    <div className="paragraph">
                        <p>{text.text}</p>
                    </div>
                </div>
            </div>
            <div className="background">
                <div className='bigger-circle'>
                    <div className="smaller-circle"></div>
                </div>
            </div>
        </div>
    )
}