import { useState } from 'react'
import './styles.scss'
import { useSpring, animated } from 'react-spring'
import Logo from '../../assets/logo-black.png'
import { gsap } from 'gsap'


export const Initial = () => {
    const [showFirstAnimation, setShowFirstAnimation] = useState(true)
    const [showSecondAnimation, setShowSecondAnimation] = useState(false)
    const [showRest, setShowRest] = useState(false)
    const [growBall, setGrowBall] = useState(false)
    const [showText, setShowText] = useState(false)

    const playAllVideos = () => {
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            /*video.play()*/
        })
    }

    const ballProps = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
        delay: 1000,
        tension: 180,
        friction: 20,
        config: { duration: 1000 },
        onRest: () => {
            setShowFirstAnimation(false)
            setShowSecondAnimation(true)
        }
    })

    const logoProps = useSpring({
        filter: 'invert(100%)',
        opacity: 1,
        delay: 1000,
        from: { filter: 'invert(0%)' },
    })

    const moveUp = useSpring({
        translateY: showSecondAnimation ? '0%' : '100%',
        rotate: showSecondAnimation ? '0deg' : '360deg',
        config: { duration: 1000 },
        onRest: () => {
            setGrowBall(true);
        },
    })

    const ballGrow = useSpring({
        transform: growBall ? 'scale(1)' : 'scale(0.025)',
        config: { duration: 1000 },
        onRest: () => {
            setShowRest(true);
        },
    })

    const leftSlide = useSpring({
        translateX: showRest ? '0%' : '50%',
        config: { duration: 200 },
    })

    const rightSlide = useSpring({
        translateX: showRest ? '0%' : '-50%',
        config: { duration: 200 },
        onRest: () => {
            setShowText(true)
            playAllVideos()
            gsap.to('.center-container', {
                y: '135vh',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 0.5,
                },
            })
            gsap.to('.video-right', {
                y: '-50vh',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 0.5,
                },
            })
            gsap.to('.circle', {
                width: '723px',
                height: '723px',
                scrollTrigger: {
                    trigger: '.center',
                    start: "bottom bottom",
                    scrub: 0.5,
                },
                onComplete: () => {
                    gsap.to('.circle', {
                        y: '-50%',
                        scrollTrigger: {
                            trigger: '.center',
                            start: "center center",
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.circle-top', {
                y: '205vh',
                x: '-35%',
                width: '925px',
                height: '925px',
                scrollTrigger: {
                    trigger: '.circle-top',
                    start: "bottom 100vh",
                    end: 'bottom 100vh',
                    scrub: 0.5,
                },
                onComplete: () => {
                    gsap.to('.circle-top', {
                        x: '-36%',
                        y: '169vh',
                        width: '1156px',
                        height: '1156px',
                        scrollTrigger: {
                            trigger: '.circle-top',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.circle-bottom', {
                y: '56vh',
                x: '20%',
                width: '1080px',
                height: '1080px',
                scrollTrigger: {
                    trigger: '.circle-bottom',
                    start: "center center",
                    end: 'center center',
                    scrub: 0.5,
                },
                onComplete: () => {
                    gsap.to('.circle-bottom', {
                        y: '115vh',
                        x: '10%',
                        width: '1702px',
                        height: '1702px',
                        border: '3 solid white',
                        scrollTrigger: {
                            trigger: '.circle-bottom',
                            start: "bottom bottom",
                            end: "bottom bottom",
                            scrub: 0.5,
                        },
                    })
                }
            })
        },
    })

    const fadeDownOne = useSpring({
        opacity: showText ? 1 : 0,
        translateY: showText ? 0 : 50,
        config: { duration: 500 },
    })

    const fadeDownTwo = useSpring({
        opacity: showText ? 1 : 0,
        translateY: showText ? 0 : 100,
        config: { duration: 1000 },
    })

    const fadeDownThird = useSpring({
        opacity: showText ? 1 : 0,
        translateY: showText ? 0 : 50,
        config: { duration: 1200 },
    })

    return (
        <div className='start'>
            {showFirstAnimation &&
                <div className="animation">
                    <animated.img style={logoProps} src={Logo} alt="Logo" className="logo" />
                    <animated.div className='ball' style={ballProps}></animated.div>
                </div>
            }
            {showSecondAnimation &&
                <animated.div style={moveUp} className='center-container'>
                    <animated.div className='center' style={ballGrow}>
                        <div className="circle">
                            <video playsInline muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm' className='video'></video>
                        </div>
                    </animated.div>
                </animated.div>
            }
            {showRest &&
                <>
                    <div className='background'>
                        <animated.div style={leftSlide} className="video-left">
                            <video muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm' className='video'></video>
                        </animated.div>
                        <animated.div style={rightSlide} className="video-right">
                            <video muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm' className='video'></video>
                        </animated.div>
                    </div>
                    <div className='text'>
                        <animated.h2 style={fadeDownOne}>mulheres com</animated.h2>
                        <animated.h1 style={fadeDownTwo}>histórias</animated.h1>
                        <animated.h2 style={fadeDownThird}>para contar</animated.h2>
                    </div>
                    <div className="circle-top"></div>
                    <div className="circle-bottom"></div>
                </>
            }
        </div >
    )
}