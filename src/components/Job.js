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
  contentfulJobList {
    moduleName
    jobs {
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
`

const JobItem = ({ data }) => data.map((job, idx) => ((
  <div className="col-xs-12" key={idx}>
    <div className="item-block">
      <header>
        <img src={job.logo.file.url} alt={`Logo ${job.company}`} />
        <div className="hgroup">
          <h4>{ job.company }</h4>
          <h5>{ job.title }</h5>
        </div>
        <h6 className="time">{ job.years }</h6>
      </header>
      <div className="item-body">
        <p>Responsibilities:</p>
        <ul>
          { job.responsibilities.map((responsibility, key) => (<li key={key}> { responsibility } </li>)) }
        </ul>
      </div>
    </div>
  </div>
)))


const Job = () => (
  <StaticQuery
    query={query}
    render={({ contentfulJobList }) => {
      const { jobs } = contentfulJobList
      return <JobItem data={jobs} />
    }}
  />
)

export default Job
