import { useEffect } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const About = () => {

    useEffect(()=>{
        gsap.to('.blur', {
            y: '200vh',
            x: '90vw',
            scrollTrigger: {
                trigger: '.about',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            },
            onComplete: ()=>{
                gsap.to('.blur', {
                    y: '270vh',
                    scrollTrigger: {
                        trigger: '.about',
                        start: "bottom 100px",
                        end: 'bottom 100px',
                        scrub: 0.5,
                    }
                })
            }
        })
        gsap.to('.about-text', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.about',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
            },
        })
        gsap.to('.footer', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.about',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
            },
        })
    },[])

    return (
        <div className='about' id='about'>
            <div className="blur"></div>
            <div className="about-text">
                <div className="about-title">
                    <h3>quem é</h3>
                    <h2>hysteria</h2>
                </div>
                <div className="paragraph">
                    <p>Hysteria é um selo de criação e produção que reúne mulheres e olhares diversos no centro das narrativas. Nossos filmes, séries e conteúdos são distribuídos na TV, no cinema, no streaming e em plataformas digitais. Temos histórias para emocionar, rir, chorar, indignar, inspirar e propor novas visões de mundo.</p>
                </div>
            </div>
            <div className="footer">
                <p>Hysteria: powered by </p>
                <a href="https://conspiracao.com.br" target='_blank'>Conspiração.</a>
            </div>
        </div>
    )
}