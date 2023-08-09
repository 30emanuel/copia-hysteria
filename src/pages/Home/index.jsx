import { Header } from '../../components/Header'
import { Initial } from '../../components/Initial'
import { Projects } from '../../components/Projects'
import './styles.scss'
import { useEffect,} from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'

export const Home = () => {

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
    window.addEventListener("resize", () => {
      window.location.reload(true)
    })
  }, [])

  return (
    <div className="home">
      <Header />
      <Initial showScroll={showScroll}/>
      <About />
      <Projects showScroll={showScroll}/>
      <Brandlab showScroll={showScroll} />
      <Collaborators showScroll={showScroll} />
      <Contact />
    </div>
  )
}