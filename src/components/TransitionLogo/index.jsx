import './styles.scss'
import { gsap } from 'gsap'
import Logo from '../../assets/logo-red.png'
import { useEffect, useState } from 'react'

export const TransitionLogo = ({ id, imgUrl, effect }) => {
    const [filter, setFilter] = useState(false)

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
            transform: 'scale(1.1)',
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: `#transition-logo-${id}`,
                start: "top top+=3",
                end: "top top+=3",
                scrub: 0,
            },
            onStart: () =>{
                setFilter(true)
            },
            onReverseComplete: () =>{
                setFilter(false)
            }
        })

    }, [id])

    return (
        <div className={`transition-logo`} id={`transition-logo-${id}`}>
            <div className="transition-background">
                <img className={`transition-img ${filter ? `${effect}` : ''}`} id={`transition-img-${id}`} src={imgUrl} alt="Fundo" />
            </div>
            <div className='logo' id={`logo-${id}`}>
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}