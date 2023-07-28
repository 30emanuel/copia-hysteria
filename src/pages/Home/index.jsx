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
    <div className="home" >
      <Header />
      <Initial />
      <About />
      <Projects />
      <Brandlab showScroll={showScroll}/>
      <Collaborators/>
      <Contact/>
    </div>
  )
}