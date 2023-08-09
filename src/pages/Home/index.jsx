import { Header } from '../../components/Header'
import { Initial } from '../../components/Initial'
import { Projects } from '../../components/Projects'
import './styles.scss'
import { useEffect, } from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { useQuery } from "graphql-hooks";
import { HOME_QUERY } from './query'


export const Home = () => {
  const { loading, error, data } = useQuery(HOME_QUERY)

  console.log(loading)
  console.log(data)

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
      {loading === false &&
        <>
        <Header />
        <Initial showScroll={showScroll} data={data.inicio} />
        <About text={data.sobre} />
        <Projects showScroll={showScroll} projects={data.allProjetos} />
        <Brandlab showScroll={showScroll} text={data.brandlab} />
        <Collaborators showScroll={showScroll} text={data.colaboradoresTexto} collaborators={data.allColaboradores} />
        <Contact contact={data.contato} />
        </>
      }
    </div>
  )
}