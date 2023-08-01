import { Header } from '../../components/Header'
import { Initial } from '../../components/Initial'
import { Projects } from '../../components/Projects'
import './styles.scss'
import { useEffect, useRef, useState } from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import {Contact} from '../../components/Contact'


export const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('var(--bg-color-primary)')

  const showScroll = (value) =>{
    if(value === false){
      document.documentElement.style.overflow = 'hidden'
      document.body.scroll = "no"
    }else{
      document.documentElement.style.overflowY = 'visible'
      document.body.scroll = "yes"
    }
  }

  useEffect(()=>{
  }, [])

  return (
    <div className="home"  style={{backgroundColor: backgroundColor}}>
      <Header />
      <Initial />
      <About />
      <Projects showScroll={showScroll}/>
      <Brandlab showScroll={showScroll}/>
      <Collaborators showScroll={showScroll} setBackgroundColor={setBackgroundColor}/>
      <Contact />
    </div>
  )
}