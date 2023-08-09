import { useEffect, useState } from 'react'
import './styles.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ModalProject } from '../ModalProject'
import { gsap } from 'gsap'
register()

export const Projects = ({ showScroll, projects }) => {
    const [showContent, setShowContent] = useState(false)
    const [slideHover, setSlideHover] = useState(false)
    const [selectedProject, setSelectedProject] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [slideHoverIndex, setSlideHoverIndex] = useState(0)

    const projectIndex = []
    for (let i = projects.length - 1; i >= 0; i--) {
        projectIndex.push(i)
    }

    const toggleHover = () => {
        setSlideHover(!slideHover)
    }

    const toggleModal = (index) => {
        showScroll(showModal)
        setShowModal(!showModal)
        setSelectedProject(index)
    }

    useEffect(() => {
        gsap.to('.projects-title ', {
            scrollTrigger: {
                trigger: '.projects',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
            },
            onStart: () => {
                setShowContent(true)
            }
        })
    }, [])


    return (
        <div className='projects' id='projects'>
            {showContent &&
                <>
                    <h2 className={slideHover ? 'titles projects-title hover' : 'titles projects-title'}>projetos</h2><div className='slide'
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                    >
                        <Swiper
                            slidesPerView={1}
                            style={{
                                overflow: 'visible',
                            }}
                            className='swiper'
                        >
                            {projects.map((slide, index) => (
                                <SwiperSlide key={index}
                                    onClick={() => toggleModal(index)} className='slide-item' style={{ zIndex: `${slideHoverIndex === index ? '20' : projectIndex[index]}` }}
                                    onMouseEnter={() => setSlideHoverIndex(index)} onMouseLeave={() => setSlideHoverIndex(0)}>
                                    <div className="image">
                                        <img src={slide.imagemPrincipal.url} alt={slide.nome} />
                                    </div>
                                    <div className="info">
                                        <div className="name">
                                            <h3>{slide.nome}</h3>
                                        </div>
                                        <div className="subtitle">
                                            <h4>{slide.tipo}</h4>
                                            <div className='line'></div>
                                            <h4 className='stream'>{slide.stream}</h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="arrow">
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
                </>
            }
            {showModal &&
                <ModalProject index={selectedProject} showModal={toggleModal} projects={projects} />
            }
        </div>
    )
}