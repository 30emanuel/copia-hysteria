import { useEffect } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Brandlab = ({ text }) => {

    useEffect(() => {
        gsap.to('.video-circle', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            }
        })
        gsap.to('.video-circle-top', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            }
        })
    }, [])


    return (
        <div className='brandlab'>
            <div id='brandlab' ></div>
            <div className="front">
                <div className="texts">
                    <h2 className='titles'>brandlab</h2>
                    <p className='paragraphs'>{text.text}</p>
                    <h3 >{text.textSecondary}</h3>
                </div>
                <div className="brandlab-video">
                    <div className="video-circle-top"></div>
                    <div className="video-circle"></div>
                    <video className='video-brandlab' muted loop src={text.videoUrl}></video>
                </div>
            </div>
            <div className="brandlab-circle">
            </div>
        </div>
    )
}