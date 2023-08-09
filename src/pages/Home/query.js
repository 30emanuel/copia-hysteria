export const HOME_QUERY = `
{
  inicio{
    videoUrl,
    textoCima,
    textoCentro,
    textoBaixo
  },
  sobre {
    texto,
    tituloSecundario,
    titulo
  },
  allProjetos {
    nome,
    tipo,
    stream,
    imagemPrincipal {
      url
    },
    texto,
    criadoPor,
    realizacao,
    apoio,
    direcao,
    videourl,
    imagem1 {
      url
    },
    imagem2 {
      url
    },
    imagemMeio {
      url
    },
    imagem3 {
      url
    },
    imagem4 {
      url
    }
  },
  brandlab{
    texto,
    textoSecundario,
    videoUrl
  }
  allColaboradores{
    nome,
    funcao
  }
  colaboradoresTexto{
    texto
  }
  contato{
  	email,
    youtubeLink,
    instagramLink
  }
}`;