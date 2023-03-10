import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
         <Section
          title="Model S"
          description="Leasing starting at $399/mo"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Demo Drive"        
        />
        <Section
          title="Model Y"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Demo Drive" 
        />
        <Section
          title="Model 3"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Demo Drive"
        />
        <Section
          title="Model X"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Demo Drive"
        />
        <Section
          title="Lowest Cost Solar Panels In India"
          description="Money-back Guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"          
        />
        <Section
          title="Solar Roofs"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More" 
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`