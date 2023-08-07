import { useEffect, useState, useRef } from 'react'
import './styles.scss'
import { gsap } from 'gsap'
import { useSpring, animated } from 'react-spring'

export const Brandlab = ({ showScroll }) => {
    const [showText, setShowText] = useState(false)
    const [showBackground, setShowBackground] = useState(false)
    const elementRef = useRef(null)

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

    const scrollToBackground = () =>{
        showScroll(false)
        elementRef.current.scrollIntoView({ behavior: 'smooth'})
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
            <div id='brandlab' ref={elementRef}></div>
            {showText &&
                <div className="front">
                    <div className="texts">
                        <animated.h2 style={title} className='titles'>brandlab</animated.h2>
                        <animated.p style={texts} className='paragraphs'>Queremos que a sua marca conte histórias originais e corajosas com a Hysteria. A estratégia de parceria é sempre customizada: já prestamos consultoria, fizemos pesquisas, criamos roteiros e produzimos conteúdo para os mais diversos formatos e escalas. </animated.p>
                        <animated.h3 style={texts}>Gostamos mesmo é de provocar impacto na narrativa e aumentar a conexão das conversas com seu público.</animated.h3>
                    </div>
                    <animated.div style={moveup} className="brandlab-video">
                        <div className="video-circle"></div>
                        <video muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm'></video>
                    </animated.div>
                </div>
            }
            {showBackground &&
                <div className='brandlab-background' >
                    <div className="brandlab-circle">
                        <div className="brandlab-circle-center"></div>
                    </div>
                </div>
            }
        </div>
    )
}