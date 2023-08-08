import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import LogoBlack from '../../assets/logo-black.png'
import { useState } from 'react'


export const Header = ({setShowListProjects}) => {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu((prev) => prev = true)
    }
    const closeMenu = () =>{
        setShowMenu((prev) => prev = false)
        setShowListProjects((prev) =>{
            if(prev === true){
                prev = false
            }
        })
    }

    return (
        <>
            <div className={`menu ${showMenu ? 'active' : ''}`}>
                <div className="menu-header">
                    <div>
                        <img href='#home' onClick={closeMenu} src={LogoWhite} alt="logo" />
                    </div>
                    <div>
                        <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M2 2L20 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M2 19L20 2" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div className="menu-items">
                    <a href='#home' onClick={closeMenu}>home</a>
                    <a href='#about' onClick={closeMenu}>quem é hysteria</a>
                    <a href='#projects' onClick={closeMenu}>projetos</a>
                    <a href='#brandlab' onClick={closeMenu}>brand lab</a>
                    <a href='#contact' onClick={closeMenu}>contato</a>
                </div>
                <div className="menu-footer">
                    <p>política de privacidade</p>
                    <p>powered by Conspiração</p>
                </div>
            </div>
            <div className='header'>
                <div>
                    <img href='#home' onClick={closeMenu} src={LogoWhite} alt="logo" />
                </div>
                <div>
                    <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
                        <path d="M1.5 1.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path d="M1.5 9.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path d="M1.5 17.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </>
    )
}