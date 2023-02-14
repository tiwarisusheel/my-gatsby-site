//step 1 import react
import * as React from 'react'
import { Link } from 'gatsby'

//Step 2 define your component
const IndexPage = () => {
  return (
<main>
  <h1>Welcome to my gatsby site susheel</h1>
  <Link to="/About">About</Link>
  <p>I am making this by following the gatsby tutorial.</p>
</main>
  )
}

//you will learn about this in the next task, just copy it for now
export const Head =() => <title>Home Page</title>

//Step 3: Export your component

export default IndexPage