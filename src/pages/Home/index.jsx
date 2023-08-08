import { Header } from '../../components/Header'
import { Initial } from '../../components/Initial'
import { Projects } from '../../components/Projects'
import './styles.scss'
import { useEffect, useRef, useState } from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { ProjectsList } from '../../components/ProjectsList'

export const Home = () => {
  const [showListProjects, setShowListProjects] = useState(false)

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

  const showScroll = (value) => {
    if (value === false) {
      document.documentElement.style.overflow = 'hidden'
      document.body.scroll = "no"
    } else {
      document.documentElement.style.overflowY = 'visible'
      document.body.scroll = "yes"
    }
  }

  useEffect(() => {
  }, [])

  return (
    <div className="home">
      <Header  setShowListProjects={setShowListProjects}/>
      <Initial />
      <About />
      <Projects showScroll={showScroll} projects={projects} setShowListProjects={setShowListProjects}/>
      {showListProjects &&
        <ProjectsList projects={projects} showModal={setShowListProjects} />
      }
      <Brandlab showScroll={showScroll} />
      <Collaborators showScroll={showScroll} />
      <Contact />
    </div>
  )
}