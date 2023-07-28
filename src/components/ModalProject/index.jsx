import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import { useState } from 'react'

export const ModalProject = ({ index, showModal, projects }) => {
    const [indexCurrent, setIndexCurrent] = useState(index)

    return (
        <div className='modalproject'>
            <div className='modal-header'>
                <div>
                    <img src={LogoWhite} alt="logo" />
                </div>
                <div>
                    <svg onClick={() => showModal(false)} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
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
                    <video src={projects[indexCurrent].video}></video>
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
                    <div></div>
                    <h3>Projetos</h3>
                    <div></div>
                </div>
                <div className="outher-projects">
                    {projects.map((project, indexProject) => {
                        if (indexProject !== indexCurrent) {
                            return (
                                <div className='outher-project' key={indexProject} onClick={() => setIndexCurrent(indexProject)}>
                                    <img src={project.image} alt={project.name} />
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
            </div>
        </div>
    )
}