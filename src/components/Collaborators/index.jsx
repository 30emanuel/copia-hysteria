import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Collaborators = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    const collaborators = [
        {name: 'Lorem', function: 'Diretor'},
        {name: 'Lorem', function: 'Diretor'},
        {name: 'Lorem', function: 'Diretor'},
        {name: 'Lorem', function: 'Diretor'},
        {name: 'Lorem', function: 'Diretor'},
        {name: 'Lorem', function: 'Diretor'},
    ]

    useEffect(() => {
        gsap.to('.background', {
            y: '0%',
            display: 'block',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
        })
        gsap.to('.collaborators-circle', {
            y: '96%',
            x: '51%',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
        })
        gsap.to('.background', {
            y: '110%',
            x: '-51%',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "bottom 200px",
                end: "bottom 200px",
                scrub: 0.5,
            },
        })
        gsap.to('.collaborators-circle-center', {
            x: '-45%',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "bottom 200px",
                end: "bottom 200px",
                scrub: 0.5,
            },
        })
    }, [])

    return (
        <div className='collaborators'>
            <div className="text">
                <h2>colaboradoras</h2>
                <p>Mais de 1000 colaboradoras espalhadas pelo Brasil e pelo mundo, entre artistas, roteiristas, pesquisadoras, filmmakers, diretoras e produtoras, que trazem suas ideias e talentos na cocriação dos projetos.</p>
                <div className='button' onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none">
                        <g clip-path="url(#clip0_493_446)">
                            <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_493_446">
                                <rect width="164" height="68" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className='background'>
                <div className="collaborators-circle">
                    <div className="collaborators-circle-center"></div>
                </div>
            </div>
            <div className={`modal-collaborators ${modalOpen ? 'active' : ''}`}>
                <svg onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="black" />
                </svg>
                <div className='names'>
                {collaborators.map((collaborator) => (
                    <div className='collaborator'>
                        <p>{collaborator.name}</p>
                        <p>{collaborator.function}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}