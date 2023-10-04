import { useEffect, useState, useRef } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Collaborators = ({ text }) => {
    useEffect(() => {
        gsap.to('.background', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            },
            onComplete: () => {
                gsap.to('.collaborators-container', {
                    y: '+=100vh',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        marker: true,
                        scrub: 0.5,
                    },
                })
                gsap.to('.collaborators-text', {
                    x: '+=160vw',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        marker: true,
                        scrub: 0.5,
                    },
                })
                gsap.to('.collaborators-title', {
                    x: '+=160vw',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        marker: true,
                        scrub: 0.5,
                    },
                })
                gsap.to('.bigger-circle', {
                    y: '30vh',
                    x: '-30vw',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        scrub: 0.5,
                    },
                })
                gsap.to('.smaller-circle', {
                    x: '9vw',
                    y: '-60vh',
                    ease: 'power1.easeInOut',
                    backgroundColor: 'var(--bg-color-four)',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        scrub: 0.5,
                    },
                })
            }
        })
    }, [])

    return (
        <div className='collaborators' id='collaborators'>
            <div className="collaborators-container">
                <h2 className='titles collaborators-title'>colaboradoras</h2>
                <div className="collaborators-text">
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
        </div>
    )
}