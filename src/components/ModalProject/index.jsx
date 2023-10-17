import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSpring, animated } from 'react-spring'
import gsap from 'gsap'

export const ModalProject = ({ index = 0, setSelectedProject, showModal, toggleModal, showScroll, projects }) => {
    const [indexCurrent, setIndexCurrent] = useState(index)
    const modalRef = useRef(null)
    const videoId = projects[index].videourl.split('v=')[1]
    const [showContent, setShowContent] = useState(false)

    const changeProject = (index) => {
        setSelectedProject(index)
        if (modalRef.current) {
            modalRef.current.scrollTop = 0
        }
    }

    const closeModal = () => {
        toggleModal(false)
        showScroll(true)
        setShowContent(showModal)
    }

    const moveUp = useSpring({
        translateY: !showModal ? '100vh' : '0vh',
        config: { duration: 1150, easing: t => (0.5 - Math.cos(t * Math.PI) / 2) },
        onRest: () => {
            setTimeout(() => {
                setShowContent(showModal)
            }, 500)
        },
    })


    useEffect(() => {
        setIndexCurrent(index)
        /*gsap.to('.outherproject-img', {
            y: 40, 
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: '.project-modal',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
            },
        })
        gsap.to('.outherproject-video', {
            y: 40, 
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: '.project-modal',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
            },
        })

        gsap.to('.text-project', {
            y: 20, 
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: '.project-modal',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
            },
        })*/
    }, [index])

    return (
        <animated.div style={moveUp} className={`modalproject ${showModal ? 'background' : ''}`} ref={modalRef}>
            <div className='modal-header'>
                <div>
                    <img src={LogoWhite} alt="logo" />
                </div>
                <div>
                    <svg onClick={() => closeModal()} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <path d="M2 2L20 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path d="M2 19L20 2" stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            {showContent &&
                <>
                    <div className='project-modal'>
                        <div className="title">
                            <h2>{projects[indexCurrent].name}</h2>
                        </div>
                        <div className="project-about">
                            <div className="text">
                                <div className='stream'>
                                    <h3 className='type'>{projects[indexCurrent].typeProject}</h3>
                                    <div className='line'></div>
                                    <h3 className='streamname'>{projects[indexCurrent].stream}</h3>
                                </div>
                                <div className="paragraph">
                                    <p>{projects[indexCurrent].text}</p>
                                </div>
                                <div className="credits">
                                    <div className="credit createdBy">
                                        <p>Criado por</p>
                                        <p className='name'>{projects[indexCurrent].createdby}</p>
                                    </div>
                                    <div className="credit direction">
                                        <p>Direção</p>
                                        <p className='name'>{projects[indexCurrent].direction}</p>
                                    </div>
                                    <div className="credit support">
                                        <p>Apoio</p>
                                        <p className='name'>{projects[indexCurrent].support}</p>
                                    </div>
                                    <div className="credit realization">
                                        <p>Realização</p>
                                        <p className='name'>{projects[indexCurrent].realization}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img src={projects[indexCurrent].imageMain.url} alt={projects[indexCurrent].name} />
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="video">
                            <iframe
                                className='video-gallery'
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="images">
                            <img src={projects[indexCurrent].image1.url} alt={`${projects[indexCurrent].name}`} />
                            <img src={projects[indexCurrent].image2.url} alt={`${projects[indexCurrent].name}`} />
                        </div>
                        <div className="middle">
                            <img src={projects[indexCurrent].imageMiddle.url} alt={`${projects[indexCurrent].name}`} />
                        </div>
                        <div className="images">
                            <img src={projects[indexCurrent].image3.url} alt={`${projects[indexCurrent].name}`} />
                            <img src={projects[indexCurrent].image4.url} alt={`${projects[indexCurrent].name}`} />
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='title'>
                            <div className='arrow-container arrow-left'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='left-primary'>
                                    <g clip-path="url(#clip0_493_446)" transform="rotate(180 82 34)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='left-secondy'>
                                    <g clip-path="url(#clip0_493_446)" transform="rotate(180 82 34)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3>projetos</h3>
                            <div className='arrow-container right-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='right-primary'>
                                    <g clip-path="url(#clip0_493_446)">
                                        <path d="M131.061 35.0607C131.646 34.4749 131.646 33.5251 131.061 32.9393L121.515 23.3934C120.929 22.8076 119.979 22.8076 119.393 23.3934C118.808 23.9792 118.808 24.9289 119.393 25.5147L127.879 34L119.393 42.4853C118.808 43.0711 118.808 44.0208 119.393 44.6066C119.979 45.1924 120.929 45.1924 121.515 44.6066L131.061 35.0607ZM0 35.5H130V32.5H0V35.5Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_493_446">
                                            <rect width="164" height="68" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none" className='right-secondy'>
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
                        <Swiper
                            slidesPerView={2}
                            className="outher-projects"
                        >
                            {projects.map((project, indexProject) => {
                                if (indexProject !== indexCurrent) {
                                    return (
                                        <SwiperSlide className='outher-project' key={indexProject} onClick={() => changeProject(indexProject)}>
                                            <div className='project-img'>
                                                {project.prevVideo &&
                                                    <video className='outherproject-video' muted loop src={project?.prevVideo}
                                                        onMouseEnter={(e) => {
                                                            setTimeout(() => {
                                                                e.target.play()
                                                            }, 500)
                                                        }}
                                                        onMouseLeave={(e) => e.target.pause()}></video>
                                                }
                                                <img className='outherproject-img' src={project.imageMain.url} alt={`${project.name} img`} />
                                            </div>
                                            <div className="info">
                                                <h3>{project.name}</h3>
                                                <div className='text-project'>
                                                    <p>{project.typeProject}</p>
                                                    <p className='line'></p>
                                                    <p className='stream'>{project.stream}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                                return null
                            })}
                        </Swiper>
                    </div>
                </>
            }
        </animated.div>
    )
}