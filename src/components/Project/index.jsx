import './styles.scss'

export const Project = ({project, toggleModal}) => {

    return (
        <div onClick={() => toggleModal(project.id)} key={project.id} className='project'
            style={{
                backgroundImage: `url(${project.imageMain.url})`,
                width: `${project.width}px`,
                height: `${project.height}px`,
            }}
        >
            <div className='project-img'>
                <img src={project.imageMain.url} alt={`${project.name} imagem`} />
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