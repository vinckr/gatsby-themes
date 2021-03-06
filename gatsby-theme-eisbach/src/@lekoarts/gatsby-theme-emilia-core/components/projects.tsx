import * as React from "react"
import Projects from "../../../components/projects"

type Props = {
  data: {
    allProject: any
    [key: string]: string
  }
  [key: string]: any
}

export default function EisbachCoreProjects({ ...props }: Props) {
  const {
    data: { allProject },
  } = props

  return <Projects projects={allProject.nodes} {...props} />
}
