import React from "react"
// import HelloSection from "./HelloSection/HelloSection"
// import AboutSection from "./AboutSection/AboutSection"
// import WorksSection from "./WorksSection/WorksSection"
// import TeamSection from "./TeamSection/TeamSection"
// import DataSection from "./DataSection/DataSection"

import gql from "graphql-tag"
import { graphql } from "react-apollo"

const MainPage: React.FunctionComponent = () => {
  const repoQuery = gql`
    query($name: String!) {
      search(query: $name, last: 10, type: REPOSITORY) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
            }
          }
        }
      }
    }
  `
  return (
    <div className={"main-page"}>
      {/* <HelloSection />
      <AboutSection />
      <WorksSection />
      <TeamSection />
      <DataSection /> */}
      <div>{repoQuery}</div>
    </div>
  )
}

export default MainPage
