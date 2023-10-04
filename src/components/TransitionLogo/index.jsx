import './styles.scss'
import { gsap } from 'gsap'
import Logo from '../../assets/logo-red.png'
import Background from '../../assets/backgroundteste.png'
import { useEffect, useState } from 'react'

export const TransitionLogo = ({ id }) => {
    useEffect(() => {
        gsap.to(`#logo-${id}`, {
            y: '-180vh',
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: `#transition-logo-${id}`,
                start: "top top+=3",
                end: "top top+=3",
                scrub: 1,
            },
        })

        gsap.to(`#transition-img-${id}`, {
            transform: 'scale(1.2)',
            ease: 'power1.easeInOut',
            mixBrendMode: 'darken',
            scrollTrigger: {
                trigger: `#transition-logo-${id}`,
                start: "top top+=3",
                end: "top top+=3",
                scrub: 0,
            },
        })

    }, [id])

    return (
        <div className={`transition-logo`} id={`transition-logo-${id}`}>
            <div className="transition-background">
                <img className='transition-img' id={`transition-img-${id}`} src={Background} alt="Background" />
            </div>
            <div className='logo' id={`logo-${id}`}>
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}