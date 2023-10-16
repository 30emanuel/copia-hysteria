import { useEffect } from 'react'
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
                once: true
            },
            onComplete: () => {
                gsap.to('.bigger-circle', {
                    y: '130vh',
                    x: '-30vw',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        scrub: 1,
                    },
                })
                gsap.to('.smaller-circle', {
                    x: '8vw',
                    y: '-60vh',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        scrub: 1,
                    },
                })
                gsap.to('.background-blur', {
                    display: 'flex',
                    ease: 'power1.easeInOut',
                    scrollTrigger: {
                        trigger: '.contact',
                        start: "top 30vh",
                        end: 'top 30vh',
                        scrub: 0,
                    },
                })
            }
        })

        gsap.to('.collaborators-container', {
            display: 'flex',
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top top",
                end: 'top top',
                scrub: 1,
                once: true
            },
        })
    }, [])

    return (
        <div className='collaborators' id='collaborators'>
            <div className="collaborators-container">
                <div className="title-container">
                    <h2 className='titles collaborators-title'>colaboradoras</h2>
                </div>
                <div className="collaborators-text">
                    <div className="sub-title">
                        <div className='circles-images'>
                            <div className="up" style={{ backgroundImage: `url(${text.imageTop.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            </div>
                            <div className="left" style={{ backgroundImage: `url(${text.imageLeft.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                            <div className="low" style={{ backgroundImage: `url(${text.imageLow.url})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        </div>
                        <div className="paragraph">
                            <p>{text.text}</p>
                        </div>
                    </div>
                </div>

                <div className="background">
                    <div className='bigger-circle'>
                        <div className="smaller-circle">
                            <div className='background-blur'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}