export const HOME_QUERY = `
{
  initial{
    videoUrl,
    textUp,
    textMiddle,
    textLow
  },
  about {
    text,
    titleSecondary,
    title
  },
  allProjects {
    name,
    typeProject,
    stream,
    imageMain {
      url
    },
    text,
    createdby,
    realization,
    support,
    direction,
    videourl,
    image1 {
      url
    },
    image2 {
      url
    },
    imageMiddle {
      url
    },
    image3 {
      url
    },
    image4 {
      url
    }
  },
  brandlab{
    text,
    textSecondary,
    videoUrl
  }
  allCollaborators{
    name,
    function
  }
  collaboratorsText{
    text
  }
  contact{
  	email,
    youtubeLink,
    instagramLink
  }
}`