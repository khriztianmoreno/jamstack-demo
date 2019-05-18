import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// const query = graphql`
// query JobsExperienceQuery {
//   allJobsJson {
//     edges {
//       node {
//         title
//         company,
//         logo,
//         years
//         responsibilities
//       }
//     }
//   }
// }

/**
 * GrqphQL Contentful
 */
const query = graphql`
query JobsExperienceQuery {
  allContentfulJobs {
    edges {
      node {
        title
        company
        years
        responsibilities
        logo {
          file {
            url
          }
        }
      }
    }
  }
}
`

const JobItem = ({ data }) => data.map(({node}, idx) => ((
  <div className="col-xs-12" key={idx}>
    <div className="item-block">
      <header>
        <img src={node.logo.file.url} alt={`Logo ${node.company}`} />
        <div className="hgroup">
          <h4>{ node.company }</h4>
          <h5>{ node.title }</h5>
        </div>
        <h6 className="time">{ node.years }</h6>
      </header>
      <div className="item-body">
        <p>Responsibilities:</p>
        <ul>
          { node.responsibilities.map((responsibility, key) => (<li key={key}> { responsibility } </li>)) }
        </ul>
      </div>
    </div>
  </div>
)))


const Job = () => (
  <StaticQuery
    query={query}
    render={({ allContentfulJobs }) => {
      const { edges } = allContentfulJobs
      return <JobItem data={edges} />
    }}
  />
)

export default Job
