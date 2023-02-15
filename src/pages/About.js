//Step 1: Import React
import * as React from 'react'
import Layout from '../component/Layout'
//Step 2: Define your component
const AboutPage =() =>{
    return (
        <Layout pageTitle= "About Me" >
         <p>This my second Layout component.</p>
        </Layout>
    )
}
//Step 3: Export your component
export const Head = ()=><title>About Me</title>
export default AboutPage
