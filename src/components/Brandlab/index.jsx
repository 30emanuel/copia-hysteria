import { useEffect } from 'react'
import './styles.scss'
import { gsap } from 'gsap'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const Brandlab = ({ showScroll }) => {
    const [showText, setShowText] = useState(false)

    const moveup = useSpring({
        translateY: showText ? '0%' : '20%',
        config: { duration: 600 },
    })

    const title = useSpring({
        translateY: showText ? '0' : '50%',
        opacity: showText ? '1' : '0',
        color: showText ? 'var(--bg-color-primary)' : 'white',
        config: {duration: 700},
    })

    const texts = useSpring({
        translateY: showText ? '0' : '100%',
        opacity: showText ? '1' : '0',
        config: {duration: 700},
    })

    useEffect(() => {
        gsap.to('.brandlab', {
            onStart: () => {
                showScroll(false)
                setShowText(false)
            },
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
        })
        gsap.to('.brandlab-background', {
            width: '2933px',
            height: '2933px',
            transition: 1,
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
            onReverseComplete: () =>{
                setShowText(false)
            }
        })
        gsap.to('.front', {
            display: 'block',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "top center",
            },
        })
        gsap.to('.brandlab-circle', {
            width: '1849px',
            height: '1849px',
            transition: 1,
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
        })
        gsap.to('.brandlab-circle-center', {
            width: '1106px',
            height: '1106px',
            transition: 1,
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
            onComplete: () => {
                const delay = 2000
                showScroll(false)
                const timeoutId = setTimeout(() => {
                    gsap.to('.brandlab-circle', {
                        backgroundColor: 'var(--bg-color-third)',
                        scrollTrigger: {
                            trigger: '.brandlab',
                            start: "top center",
                            end: "top center",
                            scrub: 0.5,
                        },
                        onComplete: () => {
                            setShowText(true)
                            gsap.to('.brandlab-circle', {
                                width: '0px',
                                height: '0px',
                                transition: 1,
                                scrollTrigger: {
                                    trigger: '.brandlab',
                                    start: "bottom bottom",
                                    end: "bottom bottom",
                                    scrub: 0.5,
                                },
                                onComplete: ()=>{
                                    setShowText(false)
                                },
                                onReverseComplete: ()=>{
                                    setShowText(true)
                                }
                            })
                            gsap.to('.brandlab-circle-center', {
                                width: '0px',
                                height: '0px',
                                transition: 1,
                                scrollTrigger: {
                                    trigger: '.brandlab',
                                    start: "bottom bottom",
                                    end: "bottom bottom",
                                    scrub: 0.5,
                                },
                            })
                            gsap.to('.brandlab-background', {
                                width: '0px',
                                height: '0px',
                                transition: 1,
                                scrollTrigger: {
                                    trigger: '.brandlab',
                                    start: "bottom bottom",
                                    end: "bottom bottom",
                                    scrub: 0.5,
                                },
                            })
                        }
                    })
                    gsap.to('.brandlab-circle-center', {
                        border: '1px solid red',
                        scrollTrigger: {
                            trigger: '.brandlab',
                            start: "top center",
                            end: "top center",
                            scrub: 0.5,
                        },
                    })
                    clearTimeout(timeoutId)
                }, delay)
                const timeScroll = setTimeout(() => {
                    showScroll(true)
                    clearTimeout(timeScroll)
                }, 3000)
            }
        })
    }, [])

    return (
        <div className='brandlab'>
            <div id='brandlab'></div>
            {showText &&
                <div className="front">
                    <div className="texts">
                        <animated.h2 style={title}>brandlab</animated.h2>
                        <animated.p style={texts}>Queremos que a sua marca conte histórias originais e corajosas com a Hysteria. A estratégia de parceria é sempre customizada: já prestamos consultoria, fizemos pesquisas, criamos roteiros e produzimos conteúdo para os mais diversos formatos e escalas. </animated.p>
                        <animated.h3 style={texts}>Gostamos mesmo é de provocar impacto na narrativa e aumentar a conexão das conversas com seu público.</animated.h3>
                    </div>
                    <animated.div style={moveup} className="brandlab-video">
                        <div className="video-circle"></div>
                        <video muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm'></video>
                    </animated.div>
                </div>
            }
            <div className='brandlab-background'>
                <div className="brandlab-circle">
                    <div className="brandlab-circle-center"></div>
                </div>
            </div>
        </div>
    )
}