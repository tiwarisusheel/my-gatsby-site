//Step 1: Import React
import * as React from 'React'
import {Link} from 'gatsby'
//Step 2: Define your component
const AboutPage =() =>{
    return (
        <main>
            <h1>About Me</h1>
            <Link to="/">Back to home</Link>
            <p>Hi there! I am susheel and creating this site with gatsbyjs and reactjs</p>
        </main>
    )
}
//Step 3: Export your component
export const Head = ()=><title>About Me</title>
export default AboutPage
