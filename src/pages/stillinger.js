import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jobs from '../components/jobs'

const JobsPage = () => (
  <Layout>
    <SEO title="Ledige stillinger" />
    <h1>Ledige stillinger</h1>
    
    <Jobs />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JobsPage