import { useEffect } from 'react'
import './styles.scss'


export const ProjectsList = ({ projects, showModal, showScroll }) => {
    useEffect(() =>{
        showScroll(false)
    },)

    const closeModal =() =>{
        showModal(false)
        showScroll(true)
    }
    return (
        <div className='projects-list'>
            <div className='back' onClick={() => closeModal()}>
                <svg width="20" height="20" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,15 0,0 0,30" fill="white" />
                </svg>
            </div>
            {projects.map((project) => (
                <div className="project" style={{ backgroundImage: `url(${project.image})`, backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="info">
                        <h3>{project.name}</h3>
                        <div className='text'>
                            <p>{project.type}</p>
                            <p className='line'></p>
                            <p className='stream'>{project.stream}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}