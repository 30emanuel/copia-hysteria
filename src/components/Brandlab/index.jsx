import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Brandlab = ({ text }) => {
    useEffect(() => {
        gsap.to('.video-circle', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            },
        })
        gsap.to('.video-circle-top', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
            }
        })

        gsap.to('.ball', {
            display: 'flex',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: 'top center',
                scrub: 0.5,
                markers: true
            }
        })
        gsap.to('.ball', {
            width: '3000px',
            height: '3000px',
            y: '+=50vh',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "center center",
                scrub: 0.5,
                markers: true,
            }
        })
        gsap.to('.brandlab', {
            position: 'relative',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "center center",
                end: "center center",
                scrub: 0.5,
                markers: true,
            }
        })
        gsap.to('.ball-content', {
            y: '-50vh',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top center",
                end: "center center",
                scrub: 0.5,
                markers: true,
            }
        })

        gsap.to('.ball', {
            backgroundColor: 'var(--bg-color-primary)',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "top top",
                end: 'top top',
                scrub: 0.5,
                markers: true,
            }
        })

        gsap.to('.brand', {
            transform: 'translateY(-50px)',
            scrollTrigger: {
                trigger: '.brandlab',
                start: "center center",
                end: "center center",
                scrub: 0.5,
                markers: true,
            }
        })

    }, [])

    const brand = [
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'teste' },
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'tiktok' },
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'oboticario' },
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'teste' },
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'teste' },
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'tiktok' },
        { img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', name: 'oboticario' },
    ]


    return (
        <div className='brandlab'>
            <div className="ball">
                <div className="ball-content">
                    <div className="front">
                        <div className="texts">
                            <h2 className='titles'>brandlab</h2>
                            <p className='paragraphs'>{text.text}</p>
                            <h3>{text.textSecondary}</h3>
                            <div className='brands'>
                                {brand.map((brand, index) => (
                                    <div className="brand" key={index} >
                                        <img src={brand.img} alt={`${brand.name} logo`} />
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
                    <div className="brandlab-circle">
                    </div>
                </div>
            </div>
            <div id='brandlab' ></div>
        </div>
    )
}