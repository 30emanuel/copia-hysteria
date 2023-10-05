import './styles.scss'
import { useState } from 'react'
import { ModalProject } from '../ModalProject'
import { gsap } from 'gsap'

export const Projects = ({ showScroll, projects }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)


  function organizeProjects(projects) {
    const rows = [];
    let currentRow = [];
    let currentRowHeight = 0;
    let maxHeight = 0

    projects.forEach((project) => {
      const projectHeight = parseInt(project.height);

      if (currentRow.length === 0) {
        currentRow.push(project);
        currentRowHeight = 0
        maxHeight = projectHeight
      } else {
        if (projectHeight + currentRowHeight < maxHeight || (projectHeight + currentRowHeight <= maxHeight && currentRow.length === 1)) {
          currentRow.push(project)
          currentRowHeight += projectHeight
        } else {
          if (projectHeight > maxHeight || projectHeight + currentRowHeight > maxHeight) {
            rows.push(currentRow)
            currentRow = [project]
            currentRowHeight = 0
            maxHeight = projectHeight
          }
        }
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow)
    }

    return rows
  }

  let organizedRows = organizeProjects(projects)

  //console.log(organizedRows)

  const newArray = organizedRows.map((subarray) => subarray.slice(1, subarray.length))

  console.log(newArray)

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
          {organizedRows.map((array, arrayIndex) => (
            <div key={arrayIndex} className='array'>
              {array.map((project, index) => (
                index === 0 ? (
                  <div
                    onClick={() => toggleModal(index)}
                    key={index}
                    className='project'
                    style={{
                      backgroundImage: `url(${project.imageMain.url})`,
                      width: `${project.width}px`,
                      height: `${project.height}px`,
                    }}
                  >
                    <div className='text'>
                      <h3>{project.name}</h3>
                      <div className='stream'>
                        <p>{project.typeProject}</p>
                        <div className='line'></div>
                        <p className='bold'>{project.stream}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="group-projects">
                    {newArray.map((project, index) => (
                      project ? (
                        <div
                          onClick={() => toggleModal(index)}
                          key={index}
                          className='project'
                          style={{
                            backgroundImage: 'url("https://www.datocms-assets.com/103984/1691604201-teste.jpg")',
                            backgroundColor: 'blue',
                            width: `${project.width}px`,
                            height: `${project.height}px`,
                          }}
                        >
                          <div className='text'>
                            <h3>{project.name}</h3>
                            <div className='stream'>
                              <p>{project.typeProject}</p>
                              <div className='line'></div>
                              <p className='bold'>{project.stream}</p>
                            </div>
                          </div>
                        </div>
                      ) : <div></div>
                    ))}
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
      {
        showModal &&
        <ModalProject index={selectedProject} showModal={toggleModal} projects={projects} />
      }
    </>
  )
}