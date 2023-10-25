import { useState } from 'react'
import './styles.scss'
import { useSpring, animated } from 'react-spring'

export const ModalVideo = ({ showVideo, videoUrl }) => {
    const videoId = videoUrl.split('v=')[1]
    const [showIFrame, setShowIFrame] = useState(false)

    const moveUp = useSpring({
        translateY: !showVideo ? '100vh' : '0vh',
        config: { duration: 1150, easing: t => (0.5 - Math.cos(t * Math.PI) / 2) },
    })

    const fade = useSpring({
        opacity: !showVideo ? '0' : '1',
        config: { duration: 1150, easing: t => (0.5 - Math.cos(t * Math.PI) / 2) },
        onRest: () =>{

        }
    })

    return (
        <animated.div style={moveUp} className='modal-video'>
            <animated.div style={fade} className="video-frame">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allowFullScreen
                ></iframe>
            </animated.div>
        </animated.div>
    )
}