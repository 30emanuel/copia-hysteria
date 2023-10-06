import { useState, useRef, useEffect } from 'react'
import './styles.scss'
import { useSpring, animated, config } from 'react-spring'
import Logo from '../../assets/logo-black.png'
import { gsap } from 'gsap'


export const Initial = ({ showScroll, data, setShowSecondPart, setShowHeader }) => {
    const [showFirstAnimation, setShowFirstAnimation] = useState(true)
    const [showSecondAnimation, setShowSecondAnimation] = useState(false)
    const [showRest, setShowRest] = useState(false)
    const [growBall, setGrowBall] = useState(false)
    const [showText, setShowText] = useState(false)
    const circleCenter = useRef(null)
    const circleTop = useRef(null)
    const circleBottom = useRef(null)
    const [borderRadius, setBorderRadius] = useState('100%')

    const playAllVideos = () => {
        const videos = document.querySelectorAll('video')
        videos.forEach((video) => {
            //video.play()
        })
    }

    const ballProps = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
        delay: 1000,
        tension: 180,
        friction: 20,
        config: {
            duration: 1000,
            easing: config.easeOut,
        },
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
        config: { duration: 1000, easing: config.easeOut },
        onRest: () => {
            setGrowBall(true)
        },
    })

    const ballGrow = useSpring({
        transform: growBall ? 'scale(1)' : 'scale(0.025)',
        config: { duration: 1000, easing: config.easeOut },
        onRest: () => {
            setShowRest(true)
        },
    })

    const background = useSpring({
        width: showRest ? '3000px' : '0px',
        height: showRest ? '3000px' : '0px',
        config: { duration: 1000, easing: config.easeOut },
        onRest: () =>{
            setBorderRadius('0%')
        }
    })


    const leftSlide = useSpring({
        translateX: showRest ? '0%' : '50%',
        config: { duration: 500, easing: config.easeOut },
    })

    const rightSlide = useSpring({
        translateX: showRest ? '0%' : '-50%',
        config: { duration: 500, easing: config.easeOut },
        onRest: () => {
            setShowSecondPart(true)
            showScroll(true)
            setShowText(true)
            playAllVideos()
            setShowHeader(true)
            gsap.to('.center-container', {
                y: '103vh',
                x: '-38vw',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.center-container', {
                        y: '93vh',
                        ease: 'power1.easeInOut',
                        scrollTrigger: {
                            trigger: '.projects',
                            start: "top top",
                            end: 'top top',
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.circle', {
                width: `calc(${circleCenter.current.offsetWidth}px + 27px)`,
                height: `calc(${circleCenter.current.offsetWidth}px + 27px)`,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle', {
                        y: '-50vh',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                    })
                }
            })
            gsap.to('.video-right', {
                y: '-50vh',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
            })
            gsap.to('.circle-top', {
                y: '180vh',
                x: '-93vw',
                width: `calc(${circleTop.current.offsetWidth}px - 235px)`,
                height: `calc(${circleTop.current.offsetWidth}px - 235px)`,
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-top', {
                        y: '-50vh',
                        ease: 'power1.easeInOut',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            gsap.to('.circle-top', {
                                x: '25vw',
                                y: '402vh',
                                ease: 'power1.easeInOut',
                                width: `calc(${circleTop.current.offsetWidth}px + 835px)`,
                                height: `calc(${circleTop.current.offsetWidth}px + 835px)`,
                                scrollTrigger: {
                                    trigger: '.projects',
                                    start: "top top",
                                    end: 'top 200px',
                                    scrub: 0.5,
                                },
                                onComplete: () => {
                                    gsap.to('.circle-top', {
                                        ease: 'power1.easeInOut',
                                        y: '+=80vh',
                                        scrollTrigger: {
                                            trigger: '.projects',
                                            start: "top top",
                                            end: '+=150%',
                                            scrub: 0.5,
                                        },
                                    })
                                }
                            })
                        }
                    })
                }
            })
            gsap.to('.circle-bottom', {
                y: '65vh',
                x: '11.8vw',
                ease: 'power1.easeInOut',
                width: `calc(${circleBottom.current.offsetWidth}px - 80px)`,
                height: `calc(${circleBottom.current.offsetWidth}px - 80px)`,
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-bottom', {
                        y: '-50vh',
                        ease: 'power1.easeInOut',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "top top",
                            end: "top top",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            gsap.to('.circle-bottom', {
                                y: '240vh',
                                x: '39.5vw',
                                ease: 'power1.easeInOut',
                                width: `calc(${circleBottom.current.offsetWidth}px + 1341px)`,
                                height: `calc(${circleBottom.current.offsetWidth}px + 1341px)`,
                                border: '3 solid white',
                                scrollTrigger: {
                                    trigger: '.projects',
                                    start: "top top",
                                    end: 'top 200px',
                                    scrub: 0.5,
                                },
                                onComplete: () => {
                                    gsap.to('.circle-bottom', {
                                        y: '+=80vh',
                                        ease: 'power1.easeInOut',
                                        scrollTrigger: {
                                            trigger: '.projects',
                                            start: "top top",
                                            end: '+=150%',
                                            scrub: 0.5,
                                        },
                                    })
                                }
                            })
                        }
                    })
                }
            })
        },
    })

    const textAnimationOne = useSpring({
        translateY: showText ? '0' : '70%',
        config: { duration: 900, easing: config.easeOut },
    })

    const textAnimationTwo = useSpring({
        translateY: showText ? '0' : '100%',
        config: { duration: 1000, easing: config.easeOut },
    })

    useEffect(() => {
        showScroll(false)
    }, [])

    return (
        <div className='start' id='home'>
            {showFirstAnimation &&
                <div className="animation">
                    <animated.img style={logoProps} src={Logo} alt="Logo" className="logo" />
                    <animated.div className='ball' style={ballProps}></animated.div>
                </div>
            }
            {showSecondAnimation &&
                <animated.div style={moveUp} className='center-container'>
                    <animated.div className='center' style={ballGrow}>
                        <div className="circle" ref={circleCenter}>
                            <video playsInline muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm' className='video'></video>
                        </div>
                    </animated.div>
                </animated.div>
            }
            {showRest &&
                <>
                    <div className="background">
                        <animated.div className="background-ball" style={{...background, borderRadius: borderRadius,}}>
                            <animated.div className='videos-container' >
                                <animated.div  className="video-left" style={leftSlide}>
                                    <video muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm' className='video'></video>
                                </animated.div>
                                <animated.div  className="video-right" style={rightSlide}>
                                    <video muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm' className='video'></video>
                                </animated.div>
                            </animated.div>
                        </animated.div>
                    </div>
                    <div className='text'>
                        <div className="text-container">
                            <animated.h2 style={textAnimationTwo}>{data.textUp}</animated.h2>
                        </div>
                        <div className="text-container-center">
                            <animated.h1 style={textAnimationOne}>{data.textMiddle}</animated.h1>
                        </div>
                        <div className="text-container">
                            <animated.h2 style={textAnimationTwo}>{data.textLow}</animated.h2>
                        </div>
                    </div>
                    <div className="circle-top" ref={circleTop}></div>
                    <div className="circle-bottom" ref={circleBottom}></div>
                </>
            }
        </div >
    )
}