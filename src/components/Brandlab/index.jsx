import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Brandlab = ({ text, brands }) => {
    const [showFront, setShowFront] = useState(false)

    useEffect(() => {
        gsap.to('.brandlab-circle', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
                once: true,
            },
        })

        gsap.to('.brandlab-circle', {
            y: '+=100vh',
            scale: 1,
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: '+=60%',
                scrub: 0.5,
                once: true,
            },
            onComplete: () =>{
                setShowFront(true)
            }
        })

        /*gsap.to('.brandlab-circle', {
            scale: 1,
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: 'center center',
                scrub: 0.5,
                once: true,
            },
        })*/
    }, [])


    return (
        <div className='brandlab'>
            {showFront &&
                <div className="front">
                    <div className="texts">
                        <h2 className='titles'>brandlab</h2>
                        <p className='paragraphs'>{text.text}</p>
                        <h3>{text.textSecondary}</h3>
                        <div className='brands'>
                            {brands.map((brand, index) => (
                                <div className="brand" key={index} >
                                    <img src={brand.logo.url} alt={`${brand.name} logo`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="brandlab-video">
                        <div className="video-circle-top"></div>
                        <div className="video-circle"></div>
                        <video className='video-brandlab' muted loop src={text.videoUrl}></video>
                    </div>
                </div>
            }
            <div className="brandlab-circle"></div>
            <div id='brandlab' ></div>
        </div>
    )
}