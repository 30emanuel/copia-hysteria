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

export const Projects = ({ showScroll }) => {
    const [slideHover, setSlideHover] = useState(false)
    const [selectedProject, setSelectedProject] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [slideHoverIndex, setSlideHoverIndex] = useState(0)

    const projects = [
        {
            image: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg', name: 'De Voce Fiz Meu Samba', type: 'Serie Documental', stream: 'Youtube Originals', about: 'O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical brasileira.', createdBy: 'Lorem ipsum', direction: 'Lorem ipsum', support: 'Lorem ipsum', realization: 'Lorem ipsum', video: 'https://uxdir.com/files/videos/hysteria-—home.webm',
            gallery: {
                imagesTop: {
                    left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
                    right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg'
                },
                ImageMiddle: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
                imagesLow: {
                    left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DVFMS-02.jpg',
                    right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg',
                }

            }
        },

        {
            image: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DVFMS-02.jpg', name: 'Abre Alas', type: 'Serie', stream: 'TV', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium temporibus alias unde quibusdam exercitationem eius? Assumenda impedit, necessitatibus exercitationem mollitia quisquam magni soluta ratione iusto molestias rem, itaque quidem.', createdBy: 'Lorem ipsum', direction: 'Lorem ipsum', support: 'Lorem ipsum', realization: 'Lorem ipsum', video: 'https://uxdir.com/files/videos/hysteria-—home.webm',
            gallery: {
                imagesTop: {
                    left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
                    right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg'
                },
                ImageMiddle: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg',
                imagesLow: {
                    left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
                    right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DVFMS-02.jpg',
                }

            }
        },

        {
            image: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg', name: 'Desnude', type: 'Documentario', stream: 'Netflix', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium temporibus alias unde quibusdam exercitationem eius? Assumenda impedit, necessitatibus exercitationem mollitia quisquam magni soluta ratione iusto molestias rem, itaque quidem.', createdBy: 'Lorem ipsum', direction: 'Lorem ipsum', support: 'Lorem ipsum', realization: 'Lorem ipsum', video: 'https://uxdir.com/files/videos/hysteria-—home.webm',
            gallery: {
                imagesTop: {
                    left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
                    right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg'
                },
                ImageMiddle: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg',
                imagesLow: {
                    left: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg',
                    right: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DVFMS-02.jpg',
                }

            }
        },
    ]

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
            display: 'flex',
            scrollTrigger: {
                trigger: '.projects',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
            },
        })
        gsap.to('.swiper', {
            display: 'block',
            scrollTrigger: {
                trigger: '.projects',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
            },
        })
    }, [])


    return (
        <div className='projects' id='projects'>
            <h2 className={slideHover ? 'projects-title hover' : 'projects-title'}>projetos</h2>
            <div className='slide'
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
                                <img src={slide.image} alt={slide.name} />
                            </div>
                            <div className="info" >
                                <div className="name">
                                    <h3>{slide.name}</h3>
                                </div>
                                <div className="subtitle">
                                    <h4>{slide.type}</h4>
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
            {showModal &&
                <ModalProject index={selectedProject} showModal={toggleModal} projects={projects} />
            }
        </div>
    )
}