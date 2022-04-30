import { graphql, useStaticQuery } from "gatsby"

type UseEisbachConfigProps = {
  EisbachConfig: {
    name: string
    location: string
    socialMedia: {
      href: string
      title: string
    }[]
    showThemeAuthor: boolean
    assetsPath: string
  }
}

const useEisbachConfig = () => {
  const data = useStaticQuery<UseEisbachConfigProps>(graphql`
    query {
      EisbachConfig {
        name
        location
        socialMedia {
          href
          title
        }
        showThemeAuthor
        assetsPath
      }
    }
  `)

  return data.EisbachConfig
}

export default useEisbachConfig
