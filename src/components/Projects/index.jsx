import { useState } from 'react'
import './styles.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ModalProject } from '../ModalProject'


register()


export const Projects = () => {
    const [slideHover, setSlideHover] = useState(false)
    const [selectedProject, setSelectedProject] = useState(0)
    const [showModal, setShowModal] = useState(false)

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

    const toggleHover = () => {
        setSlideHover(!slideHover)
    }

    const toggleModal = (index) => {
        setShowModal(!showModal)
        setSelectedProject(index)
    }


    return (
        <div className='projects'>
            <h2 className={slideHover ? 'hover' : ''}>projetos</h2>
            <div className='slide'
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <Swiper
                    slidesPerView={1}
                    style={{
                        overflow: 'visible'
                    }}
                >
                    {projects.map((slide, index) => (
                        <SwiperSlide key={index} className='slide-item'
                            onClick={() => toggleModal(index)}>
                            <div className="image">
                                <img src={slide.image} alt={slide.name} />
                            </div>
                            <div className="info">
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
            {showModal &&
                <ModalProject index={selectedProject} showModal={setShowModal} projects={projects} />
            }
        </div>
    )
}