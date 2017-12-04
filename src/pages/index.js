import React from 'react'
import Link from 'gatsby-link'

import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import CardSection from "../zilker/CardSection"

import cityGoals from "../zilker/data/cityGoals"

export default ({ data }) => {
  const projects = data.allAirtable.edges;
  const projectCount = projects.length;

  return (
    <div>
      <SiteIntro />
      <SectionBreakBar />
      <CardSection cards={cityGoals} projects={projects} />
    </div>
  )
}

export const query = graphql`
  query AllAirtableQuery {
    allAirtable(filter: { publish: { eq: true }}) {
      edges {
        node {
          id
          projectName
          projectSummary
          publish
          cityStrategicOutcomes
          fields {
            slug
          }
        }
      }
    }
  }
`
