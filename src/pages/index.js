//step 1 import react
import * as React from 'react'
import Layout from '../component/Layout'

//Step 2 define your component
const IndexPage = () => {
  return (
  <Layout pageTitle="Home Page">
  <p>This is my first reusable layout component</p>
  </Layout>
  )
}

//you will learn about this in the next task, just copy it for now
export const Head =() => <title>Home Page</title>

//Step 3: Export your component

export default IndexPage