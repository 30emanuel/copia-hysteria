import { Header } from '../../components/Header'
import { Initial1366 } from '../../components/Initial/1366'
import { Projects } from '../../components/ListProjects'
import './styles.scss'
import { useState } from 'react'
import { Brandlab } from '../../components/Brandlab'
import { Collaborators } from '../../components/Collaborators'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { useQuery } from "graphql-hooks";
import { HOME_QUERY } from './query'
import Logo from '../../assets/logo-black.png'
import SyncLoader from "react-spinners/SyncLoader"
import Swal from 'sweetalert2'
import { TransitionLogo } from '../../components/TransitionLogo'
import { useWindowSize } from "@uidotdev/usehooks";
import { Initial1920 } from '../../components/Initial/1920'
import { Initial1600 } from '../../components/Initial/1600'
import { Initial1280 } from '../../components/Initial/1280'
import { Initial2560 } from '../../components/Initial/2560'
import { Initial3840 } from '../../components/Initial/3840'
import { Initial1440 } from '../../components/Initial/1440'
import { Initial768 } from '../../components/Initial/768'

export const Home = () => {
  const [showHeader, setShowHeader] = useState(false)

  const [showAnimationStart, setShowAnimationStart] = useState(true)

  //const { loading, error, data } = useQuery(HOME_QUERY)
  const data = {
    "initial": {
      "videoUrl": "https://uxdir.com/files/videos/hysteria-—home.webm",
      "textUp": "mulheres com",
      "textMiddle": "histórias",
      "textLow": "para contar"
    },
    "about": {
      "text": "Hysteria é um selo de criação e produção que reúne mulheres e olhares diversos no centro das narrativas. Nossos filmes, séries e conteúdos são distribuídos na TV, no cinema, no streaming e em plataformas digitais. Temos histórias para emocionar, rir, chorar, indignar, inspirar e propor novas visões de mundo.",
      "titleSecondary": "quem é",
      "title": "hysteria"
    },
    "allBrands": [
      {
        "name": "Del Valle",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1699472087-del-valle-1logos-brandlab.png"
        }
      },
      {
        "name": "TikTok",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1699394848-tiktok-32-1logos-brandlab.png"
        }
      },
      {
        "name": "Next",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1699394824-next-5-1logos-brandlab.png"
        }
      },
      {
        "name": "Natura",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1699394808-natura-logo-1logos-brandlab.png"
        }
      },
      {
        "name": "Neosadina",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1699394790-neosa-1logos-brandlab.png"
        }
      },
      {
        "name": "oBoticario",
        "logo": {
          "url": "https://www.datocms-assets.com/103984/1699394765-oboticario-1logos-brandlab.png"
        }
      }
    ],
    "transitionOne": {
      "img": {
        "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
      },
      "logo": {
        "url": "https://www.datocms-assets.com/103984/1697219885-logo-red.png"
      }
    },
    "transitionTwo": {
      "img": {
        "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
      },
      "logo": {
        "url": "https://www.datocms-assets.com/103984/1697219885-logo-red.png"
      }
    },
    "allProjects": [
      {
        "name": "Zodíaca",
        "typeProject": "Série documental",
        "stream": "Youtube Originals",
        "width": "1220",
        "height": "480",
        "gridPosition": "7",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1699040411-screenshot_1.jpg"
        },
        "text": "Mais de 1000 colaboradoras espalhadas pelo Brasil e pelo mundo, entre artistas, roteiristas, pesquisadoras, filmmakers, diretoras e produtoras, que trazem suas ideias e talentos na cocriação dos projetos",
        "createdby": "Lorem",
        "realization": "Lorem",
        "support": "Lorem",
        "direction": "Lorem",
        "videourl": "https://www.youtube.com/watch?v=ANaXPCXNO-c\"",
        "videoThumb": {
          "url": "https://www.datocms-assets.com/103984/1691604232-abre-alas-01.jpg"
        },
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691610069-abre-alas-01.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604201-teste.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        }
      },
      {
        "name": "De Você Fiz Meu Samba",
        "typeProject": "Série documental",
        "stream": "Youtube Originals",
        "width": "906",
        "height": "996",
        "gridPosition": "3",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691604230-dvfms-02.jpg"
        },
        "text": "O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical brasileira.",
        "createdby": "Lorem ipsum",
        "realization": "Lorem ipsum",
        "support": "Lorem ipsum",
        "direction": "Lorem ipsum",
        "videourl": "https://www.youtube.com/watch?v=ANaXPCXNO-c",
        "videoThumb": {
          "url": "https://www.datocms-assets.com/103984/1691604048-teste.jpg"
        },
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604021-teste.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691604040-abre-alas-01.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691604048-teste.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691604058-dvfms-02.jpg"
        }
      },
      {
        "name": "Mulheres Na Luta",
        "typeProject": "Série documental",
        "stream": "Youtube Originals",
        "width": "900",
        "height": "480",
        "gridPosition": "5",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        },
        "text": "O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical.",
        "createdby": "Lorem",
        "realization": "Lorem",
        "support": "Lorem",
        "direction": "Lorem",
        "videourl": "https://www.youtube.com/watch?v=KvzXanmVeqo\"",
        "videoThumb": {
          "url": "https://www.datocms-assets.com/103984/1691604108-dvfms-02.jpg"
        },
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691604056-dvfms-02.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691604160-teste.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        }
      },
      {
        "name": "Tapa Na Cara",
        "typeProject": "Série documental",
        "stream": "Youtube Originals",
        "width": "900",
        "height": "480",
        "gridPosition": "4",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1698866694-screenshot_1.jpg"
        },
        "text": "O documentário revela a intimidade das viúvas de cinco grandes nomes do samba carioca, que em um trabalho até então invisível, se tornaram guardiãs de canções eternizadas na história musical brasileira.",
        "createdby": "Lorem",
        "realization": "Lorem",
        "support": "Loren",
        "direction": "Lorem",
        "videourl": "https://www.youtube.com/watch?v=ANaXPCXNO-c",
        "videoThumb": {
          "url": "https://www.datocms-assets.com/103984/1691604232-abre-alas-01.jpg"
        },
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691610080-teste.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691610077-dvfms-02.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691610069-abre-alas-01.jpg"
        }
      },
      {
        "name": "Desnude",
        "typeProject": "Serie Documental",
        "stream": "Youtube Originals",
        "width": "1220",
        "height": "480",
        "gridPosition": "2",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium temporibus alias unde quibusdam exercitationem eius? Assumenda impedit, necessitatibus exercitationem mollitia quisquam magni soluta ratione iusto molestias rem, itaque quidem.",
        "createdby": "Lorem ipsum",
        "realization": "Lorem ipsum",
        "support": "Lorem ipsum",
        "direction": "Lorem ipsum",
        "videourl": "https://www.youtube.com/watch?v=KvzXanmVeqo",
        "videoThumb": {
          "url": "https://www.datocms-assets.com/103984/1691610069-abre-alas-01.jpg"
        },
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604157-dvfms-02.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1691604160-teste.jpg"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1691604164-dvfms-02.jpg"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604167-abre-alas-01.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691604170-abre-alas-01.jpg"
        }
      },
      {
        "name": "Abre Alas",
        "typeProject": "Série documental",
        "stream": "Youtube Originals",
        "width": "592",
        "height": "480",
        "gridPosition": "1",
        "prevVideo": "https://uxdir.com/files/videos/hysteria-—home.webm",
        "imageMain": {
          "url": "https://www.datocms-assets.com/103984/1691610069-abre-alas-01.jpg"
        },
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium temporibus alias unde quibusdam exercitationem eius? Assumenda impedit, necessitatibus exercitationem mollitia quisquam magni soluta ratione iusto molestias rem, itaque quidem.",
        "createdby": "Lorem ipsum",
        "realization": "Lorem ipsum",
        "support": "Lorem ipsum",
        "direction": "Lorem ipsum",
        "videourl": "https://www.youtube.com/watch?v=KvzXanmVeqo",
        "videoThumb": {
          "url": "https://www.datocms-assets.com/103984/1691609829-teste.jpg"
        },
        "image1": {
          "url": "https://www.datocms-assets.com/103984/1691604224-abre-alas-01.jpg"
        },
        "image2": {
          "url": "https://www.datocms-assets.com/103984/1696444927-whatsapp-image-2023-09-04-at-19-44-1.png"
        },
        "imageMiddle": {
          "url": "https://www.datocms-assets.com/103984/1696444944-backgroundteste.png"
        },
        "image3": {
          "url": "https://www.datocms-assets.com/103984/1691604232-abre-alas-01.jpg"
        },
        "image4": {
          "url": "https://www.datocms-assets.com/103984/1691604234-teste.jpg"
        }
      }
    ],
    "brandlab": {
      "text": "Queremos que a sua marca conte histórias originais e corajosas com a Hysteria. A estratégia de parceria é sempre customizada: já prestamos consultoria, fizemos pesquisas, criamos roteiros e produzimos conteúdo para os mais diversos formatos e escalas.",
      "textSecondary": "Gostamos mesmo é de provocar impacto na narrativa e aumentar a conexão das conversas com seu público.",
      "videoUrl": "https://uxdir.com/files/videos/hysteria-—home.webm"
    },
    "collaborator": {
      "text": "Mais de 1000 colaboradoras espalhadas pelo Brasil e pelo mundo, entre artistas, roteiristas, pesquisadoras, filmmakers, diretoras e produtoras, que trazem suas ideias e talentos na cocriação dos projetos.",
      "imageTop": {
        "url": "https://www.datocms-assets.com/103984/1699302534-ellipse-10colaboradoras.png"
      },
      "imageLeft": {
        "url": "https://www.datocms-assets.com/103984/1699302540-ellipse-11colaboradoras.png"
      },
      "imageRight": {
        "url": "https://www.datocms-assets.com/103984/1699302546-ellipse-9colaboradoras.png"
      },
      "imageLow": {
        "url": "https://www.datocms-assets.com/103984/1699302545-ellipse-9colaboradoras.png"
      }
    },
    "contact": {
      "email": "contato@hysteria.com.br",
      "youtubeLink": "https://www.youtube.com/@HysteriaPlay",
      "instagramLink": "https://www.instagram.com/hysteriaetc/"
    }
  }
  const error = false
  const loading = false
  //console.log(data)

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Não foi possível buscar as informações. Tente novamente mais tarde.',
      showConfirmButton: false,
      allowOutsideClick: false,
      customClass: 'modal'
    })
  }

  const showScroll = (value) => {
    if (value === false) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'visible'
    }
  }

  const accptedWidths = [1280, 1366, 1440, 1600, 1920, 2560, 3840]
  
  const { width } = useWindowSize()

  const isMobile = width <= 768

  const newWidth = isMobile ? 'mobile' : accptedWidths.reduce((prev, curr) => {
    return (curr > width && curr < prev || curr === width ) ? curr : prev
  }, 1920)


  const SIZES_RES = {
    'mobile': <Initial768 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1280: <Initial1280 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1366: <Initial1366 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1440: <Initial1440 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1600: <Initial1600 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    1920: <Initial1920 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    2560: <Initial2560 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
    3840: <Initial3840 showAnimationStart={showAnimationStart} setShowAnimationStart={setShowAnimationStart}  showScroll={showScroll} data={data?.initial} setShowHeader={setShowHeader} />,
  }

  console.log(newWidth)
  

  return (
    <div className="home">
      {loading &&
        <div className='loading'>
          <img src={Logo} alt="Logo" />
          <SyncLoader className='spinner' color={'var(--color-loading)'} />
        </div>
      }
      {!loading && !error &&
        <>
          {showHeader &&
            <Header />
          }
          {SIZES_RES[newWidth]}
          <About text={data.about} />
          <TransitionLogo id={1} data={data.transitionOne} />
          <Projects showScroll={showScroll} projects={data.allProjects} />
          <Brandlab showScroll={showScroll} text={data.brandlab} brands={data.allBrands} />
          <TransitionLogo id={2} data={data.transitionTwo} />
          <Collaborators showScroll={showScroll} text={data.collaborator} />
          <Contact contact={data.contact} />
        </>
      }
    </div>
  )
}