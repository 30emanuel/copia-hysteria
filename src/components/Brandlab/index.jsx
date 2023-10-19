import { useEffect, useState } from 'react'
import './styles.scss'
import { gsap } from 'gsap'

export const Brandlab = ({ text, brands }) => {
  const [showTitle, setShowTitle] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [showParagraph, setShowParagraph] = useState(false)
  const [showTextSecondary, setShowTextSecondary] = useState(false)
  const [showBrands, setShowBrands] = useState(false)
  const [indexCurrent, setIndexCurrent] = useState(0)

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
      onComplete: () => {
        setShowTitle(true)
        setShowVideo(true)
        setTimeout(function () {
          setShowParagraph(true)
        }, 700)

        setTimeout(function () {
          setShowTextSecondary(true)
        }, 1000)

        setTimeout(function () {
          setShowBrands(true)
          brands.map((_brand, index) =>{
            setTimeout(function () {
              setIndexCurrent(index)
            }, 200 * index)
          })
        }, 1500)
      }
    })
  }, [brands])

  return (
    <div className='brandlab'>
      <div className="front">
        <div className="texts">
          {showTitle &&
            <h2 className='titles'>brandlab</h2>
          }
          {showParagraph &&
            <p className='paragraphs'>{text.text}</p>
          }
          {showTextSecondary &&
            <h3>{text.textSecondary}</h3>
          }
          {showBrands &&
            <div className='brands'>
              {brands.map((brand, index) => (
                <div className={`brand ${indexCurrent >= index ? 'show' : ''}`} key={index}>
                  <img src={brand.logo.url} alt={`${brand.name} logo`} />
                </div>
              ))}
            </div>
          }
        </div>

        {showVideo &&
          <div className="brandlab-video">
            <div className="video-circle-top"></div>
            <div className="video-circle"></div>
            <video className='video-brandlab' muted loop src={text.videoUrl}></video>
          </div>
        }
      </div>
      <div className="brandlab-circle"></div>
      <div id='brandlab' ></div>
    </div>
  )
}