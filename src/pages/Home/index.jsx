import { Header } from '../../components/Header'
import { Initial } from '../../components/Initial'
import { Projects } from '../../components/Projects'
import './styles.scss'
import { useEffect, useState, } from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { useQuery } from "graphql-hooks";
import { HOME_QUERY } from './query'
import Logo from '../../assets/logo-black.png'
import SyncLoader from "react-spinners/SyncLoader"
import Swal from 'sweetalert2'

export const Home = () => {
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const [showSecondPart, setShowSecondPart] = useState(false)

  const { loading, error, data } = useQuery(HOME_QUERY)

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Não foi possível buscar as informações. Tente novamente mais tarde.',
      showConfirmButton: false,
      allowOutsideClick: false,
      customClass: 'modal'
    })
  }

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
    window.scrollTo(0, 0)
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      if (newWidth !== windowSize.width || newHeight !== windowSize.height) {
        window.location.reload()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="home" >
      {loading &&
        <div className='loading'>
          <img src={Logo} alt="Logo" />
          <SyncLoader className='spinner' color={'var(--color-loading)'} />
        </div>
      }
      {!loading && !error &&
        <>
          <Header />
          <Initial showScroll={showScroll} data={data.initial} setShowSecondPart={setShowSecondPart}/>
          <About text={data.about} />
          <Projects showScroll={showScroll} projects={data.allProjects} />
          {showSecondPart &&
            <>
              <Brandlab showScroll={showScroll} text={data.brandlab} />
              <Collaborators showScroll={showScroll} text={data.collaboratorsText} collaborators={data.allCollaborators} />
              <Contact contact={data.contact} />
            </>
          }
        </>
      }
    </div>
  )
}