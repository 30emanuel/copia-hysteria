import './styles.scss'
import { useRef, useEffect } from 'react'
import gsap from 'gsap';

export const Project = ({ project, toggleModal }) => {
    const imgDivRef = useRef(null)

    useEffect(() => {
        const imgDiv = imgDivRef.current
        
        gsap.to(imgDiv, {
            y: 20, 
            ease: 'power1.easeInOut',
            scrollTrigger: {
                trigger: imgDiv,
                start: 'top center',
                end: 'bottom +=20vh',
                scrub: 2,
            },
        })
    }, [])

    return (
        <div onClick={() => toggleModal(project.id)} key={project.id} className='project'
            style={{
                width: `${project.width}px`,
                height: `${project.height}px`,
            }}
        >
            <div className='project-img'>
                <img src={project.imageMain.url} alt={`${project.name} imagem`} ref={imgDivRef} />
            </div>
            <div className='text'>
                <h3>{project.name}</h3>
                <div className='stream'>
                    <p>{project.typeProject}</p>
                    <div className='line'></div>
                    <p className='bold'>{project.stream}</p>
                </div>
            </div>
        </div>
    )
}