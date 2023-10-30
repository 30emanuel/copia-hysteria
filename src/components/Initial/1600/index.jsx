import { useState, useEffect } from 'react'
import './styles.scss'
import { useSpring, animated, config } from 'react-spring'
import Logo from '../../../assets/logo-black.png'
import { gsap } from 'gsap'


export const Initial1600 = ({ showAnimationStart, setShowAnimationStart, showScroll, data, setShowHeader }) => {
    const [showFirstAnimation, setShowFirstAnimation] = useState(showAnimationStart)
    const [showSecondAnimation, setShowSecondAnimation] = useState(!showAnimationStart)
    const [showRest, setShowRest] = useState(!showAnimationStart)
    const [showText, setShowText] = useState(!showAnimationStart)
    const [borderRadius, setBorderRadius] = useState('100%')

    const [showSecondText, setShowSecondText] = useState(!showAnimationStart)
    const [showThreeText, setShowThreeText] = useState(!showAnimationStart)

    const [showCircles, setShowCircles] = useState(!showAnimationStart)


    const playAllVideos = () => {
        const videos = document.querySelectorAll('.video-initial')
        videos.forEach((video) => {
            video.play()
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
            handleAnimation()
        },
    })

    const [scale, setScale] = useState(0.025)
    const handleAnimation = () => {
        if (scale === 0.025) {
            setScale(0.1)
            setTimeout(() => {
                setScale(0.025)
                setTimeout(() => {
                    setScale(1)
                    setShowRest(true)
                }, 300)
            }, 300)
        }
    }

    const background = useSpring({
        width: showRest ? '3000px' : '0px',
        height: showRest ? '3000px' : '0px',
        config: { duration: 1000, easing: config.easeOut },
        onRest: () => {
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
            showScroll(true)
            setShowText(true)
            playAllVideos()
            setShowHeader(true)
        },
    })

    useEffect(() =>{
        gsap.to('.start', {
            zIndex: '40',
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: '#transition-img-1',
                start: "center center",
                end: "center center",
                scrub: 1,
            },
        })
    })

    useEffect(() => {
        if (showCircles) {
            playAllVideos()
            gsap.to('.video-right', {
                y: '-50vh',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
            })

            gsap.to('.center-container', {
                position: 'fixed',
                y: '3vh',
                x: '-38vw',
                ease: 'power1.easeInOut',
                transition: 'none',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
            })
            gsap.to('.center-container', {
                opacity: '0',
                scrollTrigger: {
                    trigger: '#transition-logo-1',
                    start: "top top",
                    end: "top top",
                    scrub: 1,
                },
            })
            gsap.to('.circle', {
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
            gsap.to('.circle-top', {
                y: '80vh',
                x: '-96vw',
                position: 'fixed',
                width: '825px',
                height: '825px',
                transition: 'transform 0.5s ease-out',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-top', {
                        x: '18vw',
                        y: '50vh',
                        width: '1063px',
                        height: '1063px',
                        transition: 'none',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "center center",
                            end: "center center",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            gsap.to('.circle-top', {
                                width: '680px',
                                height: '680px',
                                y: '50vh',
                                x: '-36.2vw',
                                scrollTrigger: {
                                    trigger: '.list-projects',
                                    start: "center center",
                                    endTrigger: '#brandlab',
                                    end: 'top top',
                                    scrub: 0.5,
                                },
                                onComplete: () => {
                                    gsap.to('.circle-top', {
                                        border: '0.761px solid var(--bg-color-four)',
                                        transition: 'transform 0.5s ease-out',
                                        scrollTrigger: {
                                            trigger: '#brandlab',
                                            start: "top top",
                                            end: 'top top',
                                            scrub: 0.5,
                                        },
                                        onComplete: () => {
                                            gsap.to('.circle-top', {
                                                y: '100vh',
                                                x: '-107.2vw',
                                                visibility: 'hidden',
                                                scrollTrigger: {
                                                    trigger: '#transition-logo-2',
                                                    start: "top top",
                                                    end: 'top top',
                                                    scrub: 0.5,
                                                },
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
            gsap.to('.circle-bottom', {
                y: '-30vh',
                x: '9vw',
                position: 'fixed',
                width: '950px',
                height: '950px',
                transition: 'transform 0.5s ease-out',
                ease: 'power1.easeInOut',
                scrollTrigger: {
                    trigger: '.center-container',
                    start: "bottom bottom",
                    scrub: 1,
                },
                onComplete: () => {
                    gsap.to('.circle-bottom', {
                        y: '-60vh',
                        x: '47.5vw',
                        height: '1723px',
                        width: '1723px',
                        transition: 'none',
                        scrollTrigger: {
                            trigger: '#transition-logo-1',
                            start: "center center",
                            end: "center center",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            gsap.to('.circle-bottom', {
                                width: '1000px',
                                height: '1000px',
                                y: '-72vh',
                                x: '94vw',
                                transition: 'transform 0.5s ease-out',
                                scrollTrigger: {
                                    trigger: '.list-projects',
                                    start: "center center",
                                    endTrigger: '#brandlab',
                                    end: 'top top',
                                    scrub: 0.5,
                                },
                                onComplete: () => {
                                    gsap.to('.circle-bottom', {
                                        border: '1px solid var(--bg-color-four)',
                                        transition: 'transform 0.5s ease-out',
                                        scrollTrigger: {
                                            trigger: '#brandlab',
                                            start: "top top",
                                            end: 'top top',
                                            scrub: 0.5,
                                        },
                                        onComplete: () => {
                                            gsap.to('.circle-bottom', {
                                                y: '-77vh',
                                                x: '13.69vw',
                                                visibility: 'hidden',
                                                scrollTrigger: {
                                                    trigger: '#transition-logo-2',
                                                    start: "top top",
                                                    end: 'top top',
                                                    scrub: 0.5,
                                                },
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    }, [showCircles])

    const textAnimationOne = useSpring({
        translateY: showText ? '0' : '300px',
        config: { duration: 900 },
        onStart: () => {
            setTimeout(function () {
                setShowSecondText(true)
            }, 600)
            setShowCircles(true)
            setShowAnimationStart(false)
        }
    })

    const textAnimationTwo = useSpring({
        translateY: showSecondText ? '0' : '400px',
        config: { duration: 700 },
        onStart: () => {
            setTimeout(function () {
                setShowThreeText(true)
            }, 300)
        }
    })

    const textAnimationThree = useSpring({
        translateY: showThreeText ? '0' : '300px',
        config: { duration: 600 },
    })

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
                    <div className='center' style={{
                        transform: showAnimationStart ? `scale(${scale})` : 'scale(1)',
                    }}>
                        <div className="circle" >
                            <video playsInline muted loop src={data.videoUrl} className='video video-initial'></video>
                        </div>
                    </div>
                </animated.div>
            }
            {showRest &&
                <>
                    <div className="background">
                    <animated.div className="background-ball" style={{ ...background, borderRadius: showAnimationStart ? borderRadius : '0%', }}>
                            <animated.div className='videos-container' >
                                <animated.div className="video-left" style={leftSlide}>
                                    <video muted loop src={data.videoUrl} className='video video-initial'></video>
                                </animated.div>
                                <animated.div className="video-right" style={rightSlide}>
                                    <video muted loop src={data.videoUrl} className='video video-initial'></video>
                                </animated.div>
                            </animated.div>
                        </animated.div>
                    </div>
                    <div className='text'>
                        <div className="text-container">
                            {showText &&
                                <animated.h2 className='text-one' style={textAnimationOne}>{data.textUp}</animated.h2>
                            }
                        </div>
                        <div className="text-container-center">
                            {showSecondText &&
                                <animated.h1 style={textAnimationTwo}>{data.textMiddle}</animated.h1>
                            }
                        </div>
                        <div className="text-container">
                            {showThreeText &&
                                <animated.h2 className='text-three' style={textAnimationThree}>{data.textLow}</animated.h2>
                            }
                        </div>
                    </div>
                </>
            }
            {showCircles &&
                <>
                    <div className='circle-top'></div>
                    <div className='circle-bottom'></div>
                </>
            }
        </div >
    )
}