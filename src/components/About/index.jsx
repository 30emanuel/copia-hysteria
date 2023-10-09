import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const About = ({text}) => {
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        gsap.to('.about', {
            scrollTrigger: {
                trigger: '.about',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            },
            onStart: ()=>{
                setShowText(true)
            },
        })
    }, [])

    return (
        <div className='about' id='about'>
            {showText &&
                <>
                    <div className="about-text">
                        <div className="about-title">
                            <h3>{text.titleSecondary}</h3>
                            <h2 className='titles'>{text.title}</h2>
                        </div>
                        <div className="paragraph">
                            <p className='paragraphs'>{text.text}</p>
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