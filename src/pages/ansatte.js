import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Employee from '../components/employee'

const EmployeesPage = () => (
  <Layout>
    <SEO title="Utviklere og designere" />
    <h1>Utviklere og designere</h1>
    <p>Litt om våre ansatte</p>
    <Employee />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EmployeesPage
