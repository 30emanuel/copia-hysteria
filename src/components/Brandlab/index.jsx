import { useEffect, useState, useRef } from 'react'
import './styles.scss'
import { gsap } from 'gsap'
import { useSpring, animated } from 'react-spring'

export const Brandlab = ({ showScroll, text }) => {
    const [showText, setShowText] = useState(false)
    const [showBackground, setShowBackground] = useState(false)
    const elementRef = useRef(null)
    const circleRef = useRef(null)

    const moveup = useSpring({
        translateY: showText ? '0%' : '20%',
        config: { duration: 600 },
    })

    const title = useSpring({
        translateY: showText ? '0' : '50%',
        opacity: showText ? '1' : '0',
        color: showText ? 'var(--bg-color-primary)' : 'white',
        config: { duration: 700 },
    })

    const texts = useSpring({
        translateY: showText ? '0' : '100%',
        opacity: showText ? '1' : '0',
        config: { duration: 700 },
    })

    const scrollToBackground = () => {
        showScroll(false)
        elementRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const playVideo = () => {
        const videos = document.querySelectorAll('.video-brandlab')
        videos.forEach((video) => {
            video.play()
        })
    }

    useEffect(() => {
        gsap.to('.brandlab', {
            onStart: () => {
                setShowBackground(true)
                scrollToBackground()
                const timeoutId = setTimeout(() => {
                    clearTimeout(timeoutId)
                }, 500)
            },
            scrollTrigger: {
                trigger: '.projects',
                start: "bottom top",
                end: "bottom top",
            },
        })
        gsap.to('.brandlab-circle-center', {
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "top center",
                once: true,
                scrub: 0.5,
            },
            onComplete: () => {
                const delay = 2000
                const timeoutId = setTimeout(() => {
                    gsap.to('.brandlab-circle', {
                        backgroundColor: 'var(--bg-color-third)',
                        onComplete: () => {
                            setShowText(true)
                        }
                    })
                    if(circleRef.current){
                        gsap.to('.brandlab-circle-center', {
                            border: '1px solid red',
                            marginTop: '-100vh',
                            marginLeft: '70vw',
                            width: `calc(${circleRef.current.offsetWidth}px + 192px)`,
                            height: `calc(${circleRef.current.offsetHeight}px + 192px)`,
                            scrollTrigger: {
                                trigger: '.brandlab',
                                start: "top center",
                                end: "top center",
                                once: true
                            },
                        })
                    }
                    clearTimeout(timeoutId)
                }, delay)
                const timeScroll = setTimeout(() => {
                    playVideo()
                    showScroll(true)
                    clearTimeout(timeScroll)
                }, 3000)
            }
        })
    }, [])

    return (
        <div className='brandlab'>
            <div id='brandlab' ref={elementRef}></div>
            {showText &&
                <div className="front">
                    <div className="texts">
                        <animated.h2 style={title} className='titles'>brandlab</animated.h2>
                        <animated.p style={texts} className='paragraphs'>{text.text}</animated.p>
                        <animated.h3 style={texts}>{text.textSecondary}</animated.h3>
                    </div>
                    <animated.div style={moveup} className="brandlab-video">
                        <div className="video-circle"></div>
                        <video className='video-brandlab' muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm'></video>
                    </animated.div>
                </div>
            }
            {showBackground &&
                <><div className='brandlab-background'>
                    <div className="brandlab-circle">
                    </div>
                </div>
                    <div className="brandlab-circle-center" ref={circleRef}></div></>
            }
        </div>
    )
}