import './styles.scss'
import LogoWhite from '../../assets/logo-white.png'
import LogoBlack from '../../assets/logo-black.png'
import { useState } from 'react'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const togleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div className={`menu ${showMenu ? 'active' : ''}`}>
                <div className="menu-header">
                    <div>
                        <img src={LogoBlack} alt="logo" />
                    </div>
                    <div>
                        <svg onClick={togleMenu} xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M2 2L20 19" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round" />
                            <path d="M2 19L20 2" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div className="menu-items">
                    <h2>home</h2>
                    <h2>quem é hysteria</h2>
                    <h2>projetos</h2>
                    <h2>brand lab</h2>
                    <h2>contato</h2>
                </div>
                <div className="menu-footer">
                    <p>política de privacidade</p>
                    <p>powered by Conspiração</p>
                </div>
            </div>
            <div className='header'>
                <div>
                    <img src={LogoWhite} alt="logo" />
                </div>
                <div>
                    <svg onClick={togleMenu} xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
                        <path d="M1.5 1.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path d="M1.5 9.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path d="M1.5 17.5H24" stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </>
    )
}