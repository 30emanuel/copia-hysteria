import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProjectsList } from '../ProjectsList'

export const ModalProject = ({ index, showModal, projects }) => {
    const [indexCurrent, setIndexCurrent] = useState(index)
    const modalRef = useRef(null)
    const [videoIsPlay, setVideoIsPlay] = useState(false)
    const [showListProjects, setShowListProjects] = useState(false)

    const changeProject = (index) => {
        setIndexCurrent(index)
        const video = document.querySelector('.video-project')
        video.pause()
        setVideoIsPlay(false)
        if (modalRef.current) {
            modalRef.current.scrollTop = 0
        }
    }

    const toggleVideo = () => {
        const video = document.querySelector('.video-project')
        setVideoIsPlay((prev) => !prev)
        if (videoIsPlay) {
            video.pause()
        } else {
            video.play()
        }
    }

    return (
        <>
            {!showListProjects &&
                <div className='modalproject' ref={modalRef}>
                    <div className='modal-header'>
                        <div>
                            <img src={LogoWhite} alt="logo" />
                        </div>
                        <div>
                            <svg onClick={() => setShowListProjects(true)} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                <path d="M2 2L20 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                                <path d="M2 19L20 2" stroke="white" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='project'>
                        <div className="title">
                            <h2>{projects[indexCurrent].name}</h2>
                        </div>
                        <div className="project-about">
                            <div className="text">
                                <div className='stream'>
                                    <h3 className='type'>{projects[indexCurrent].type}</h3>
                                    <div className='line'></div>
                                    <h3 className='streamname'>{projects[indexCurrent].stream}</h3>
                                </div>
                                <div className="paragraph">
                                    <p>{projects[indexCurrent].about}</p>
                                </div>
                                <div className="credits">
                                    <div className="credit">
                                        <p>Criado por</p>
                                        <p className='name'>{projects[indexCurrent].createdBy}</p>
                                    </div>
                                    <div className="credit">
                                        <p>Direção</p>
                                        <p className='name'>{projects[indexCurrent].direction}</p>
                                    </div>
                                    <div className="credit">
                                        <p>Apoio</p>
                                        <p className='name'>{projects[indexCurrent].support}</p>
                                    </div>
                                    <div className="credit">
                                        <p>Realização</p>
                                        <p className='name'>{projects[indexCurrent].realization}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img src={projects[indexCurrent].image} alt={projects[indexCurrent].name} />
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="video">
                            <video onClick={toggleVideo} src={projects[indexCurrent].video} className='video-project'>
                            </video>
                            {!videoIsPlay &&
                                <div className='button-video' onClick={toggleVideo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <path d="M20 15V35L35 25L20 15Z" fill="white" />
                                    </svg>
                                </div>
                            }
                        </div>
                        <div className="images">
                            <img src={projects[indexCurrent].gallery.imagesTop.left} alt="" />
                            <img src={projects[indexCurrent].gallery.imagesTop.right} alt="" />
                        </div>
                        <div className="middle">
                            <img src={projects[indexCurrent].gallery.ImageMiddle} alt="" />
                        </div>
                        <div className="images">
                            <img src={projects[indexCurrent].gallery.imagesLow.left} alt="" />
                            <img src={projects[indexCurrent].gallery.imagesLow.right} alt="" />
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='title'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="68" viewBox="0 0 164 68" fill="none">
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
                            <div>
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
                        <Swiper
                            slidesPerView={2}
                            className="outher-projects"
                        >
                            {projects.map((project, indexProject) => {
                                if (indexProject !== indexCurrent) {
                                    return (
                                        <SwiperSlide className='outher-project' key={indexProject} onClick={() => changeProject(indexProject)}>
                                            <img src={project.image} alt={project.name} />
                                            <div className="info">
                                                <h3>{project.name}</h3>
                                                <div className='text'>
                                                    <p>{project.type}</p>
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
                </div>
            }
            {showListProjects &&
                <ProjectsList projects={projects} showModal={showModal}/>
            }</>
    )
}