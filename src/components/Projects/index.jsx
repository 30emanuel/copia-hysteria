import './styles.scss'
import { useState } from 'react'
import { ModalProject } from '../ModalProject'
import { gsap } from 'gsap'

export const Projects = ({ showScroll, projects }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(0)

    const toggleModal = (index) => {
        showScroll(showModal)
        setShowModal(!showModal)
        setSelectedProject(index)
    }

    gsap.to('.projects', {
        opacity: '1',
        ease: 'power1.easeInOut',
        scrollTrigger: {
            trigger: '.projects',
            start: "top top",
            end: 'top 200px',
            scrub: 0.5,
            once: true
        }
    })

    return (
        <>
            <div className='projects' id='projects'>
                <div className='title'>
                    <h1 className='titles'>projetos</h1>
                </div>
                <div className='list-project' >
                    {projects.map((project, index) =>
                        <div onClick={() => toggleModal(index)} key={index} className='project' 
                        style={{ 
                            backgroundImage: `url(${project.imageMain.url})`,
                            width: project.width,
                            height: project.height,
                        }}>
                            <div className='text'>
                                <h3>{project.name}</h3>
                                <div className='stream'>
                                    <p>{project.typeProject}</p>
                                    <div className='line'></div>
                                    <p className='bold'>{project.stream}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {
                showModal &&
                <ModalProject index={selectedProject} showModal={toggleModal} projects={projects} />
            }
        </>
    )
}