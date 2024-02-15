// Hero Feature Context Carousel

import { Carousel, Content, Features, Hero } from "../Components"
import { heroOne, heroTwo ,heroThree } from "../data/HeroData" 



function Home() {
  return (
    <div>
      <Hero/>
      <Features />
      <Content {...heroOne}/>
      <Content {...heroTwo}/>
      <Content {...heroThree}/>
      <Carousel />
   
    </div>
  )
}

export default Home

// //