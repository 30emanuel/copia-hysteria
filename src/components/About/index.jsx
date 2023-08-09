import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const About = ({text}) => {
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        gsap.to('.blur', {
            scrollTrigger: {
                trigger: '.about',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            },
            onStart: ()=>{
                setShowText(true)
            },
            onComplete: () => {
                gsap.to('.blur', {
                    y: '100vh',
                    scrollTrigger: {
                        trigger: '.about',
                        start: "bottom 100px",
                        end: 'bottom 100px',
                        scrub: 0.5,
                    }
                })
            }
        })
    }, [])

    return (
        <div className='about' id='about'>
            {showText &&
                <>
                    <div className="blur"></div>
                    <div className="about-text">
                        <div className="about-title">
                            <h3>{text.tituloSecundario}</h3>
                            <h2 className='titles'>{text.titulo}</h2>
                        </div>
                        <div className="paragraph">
                            <p className='paragraphs'>{text.texto}</p>
                        </div>
                    </div>
                    <div className="footer">
                        <p>Hysteria: powered by </p>
                        <a href="https://conspiracao.com.br" target='_blank'>Conspiração.</a>
                    </div>
                </>
            }
        </div>
    )
}