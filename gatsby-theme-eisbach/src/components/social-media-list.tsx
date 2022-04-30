/** @jsx jsx */
import * as React from "react"
import { jsx, Themed } from "theme-ui"
import useEisbachConfig from "../hooks/use-eisbach-config"

const SocialMediaList = () => {
  const { socialMedia } = useEisbachConfig()

  return (
    <React.Fragment>
      {socialMedia.map((entry) => (
        <Themed.a key={entry.title} href={entry.href}>
          {entry.title}
        </Themed.a>
      ))}
    </React.Fragment>
  )
}

export default SocialMediaList
