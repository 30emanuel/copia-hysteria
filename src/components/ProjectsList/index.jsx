import './styles.scss'


export const ProjectsList = ({ projects, showModal }) => {
    return (
        <div className='projects-list'>
            <div className='back' onClick={() => showModal(false)}>
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