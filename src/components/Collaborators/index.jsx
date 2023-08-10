import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Collaborators = ({ showScroll, text, collaborators }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        showScroll(modalOpen)
        setModalOpen(!modalOpen)
    }

    const circlesImages = {
        top: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
        left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg',
        right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DVFMS-02.jpg',
        low: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg'
    }

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
        gsap.to('.collaborators', {
            scrollTrigger: {
                trigger: '.collaborators',
                start: "center 100px",
                end: "center 100px",
                scrub: 0.5,
            },
        })
        gsap.to('.collaborators', {
            scrollTrigger: {
                trigger: '.collaborators',
                start: "bottom 200px",
                end: "bottom 200px",
                scrub: 0.5,
            },
        })
        gsap.to('.collaborators-circle', {
            y: '65vh',
            x: '39vw',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top center",
                end: "top center",
                scrub: 0.5,
            },
        })
        gsap.to('.background', {
            y: '110vh',
            x: '-52vw',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "bottom 20vh",
                end: "bottom 20vh",
                scrub: 0.5,
            },
        })
        gsap.to('.collaborators-circle-center', {
            x: '-21vw',
            y: '-3vh',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "bottom 20vh",
                end: "bottom 20vh",
                scrub: 0.5,
            },
        })
        gsap.to('.circle-collaborators', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.collaborators',
                start: "top 200px",
                end: "top 200px",
            },
        })
        gsap.to('.blur-collaborators', {
            y: '70vh',
            x: '-50vw',
            opacity: 0.8,
            scrollTrigger: {
                trigger: '.collaborators',
                start: "bottom 20vh",
                end: "bottom 20vh",
                scrub: 0.5,
            },
        })
    }, [])

    return (
        <div className='collaborators' id='collaborators'>
            <div className="blur-collaborators"></div>
            <div className="text">
                <h2 className='titles'>colaboradoras</h2>
                <p className='paragraphs'>{text.text}</p>
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
            <div className="circle-collaborators">
                <div className="collaborator-top"
                    style={{ backgroundImage: `url(${circlesImages.top})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                ></div>
                <div className="collaboator-left" 
                    style={{ backgroundImage: `url(${circlesImages.left})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                ></div>
                <div className="collaboator-right"
                    style={{ backgroundImage: `url(${circlesImages.right})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                ></div>
                <div className="collaboator-low"
                    style={{ backgroundImage: `url(${circlesImages.low})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                ></div>
            </div>
            <div className={`modal-collaborators ${modalOpen ? 'active' : ''}`}>
                <div className='button' onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M29.2168 1.39075L1.39083 29.2167" stroke="white" stroke-width="2.2069" />
                        <path d="M29.2168 29.2168L1.39083 1.39083" stroke="white" stroke-width="2.2069" />
                    </svg>
                </div>
                <div className='names'>
                    {collaborators.map((collaborator) => (
                        <div className='collaborator'>
                            <p className='function'>{collaborator.function}</p>
                            <p className='name'>{collaborator.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}