import React, { useEffect, useState } from 'react'
import Background from "../src/Components/Background/Background.jsx"
import Navbar from "../src/Components/Navbar/Navbar.jsx"
import Hero from  "../src/Components/Hero/Hero.jsx"
const App = () => {
  let heroData = [
    {text1: "Dive into" , text2:"what you love"},
    {text1:"Indulge" , text2:"your passions"},
    {text1:"Give in to" , text2:"your passions"}
  ];
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus , setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=> {return count === 2 ?  0 :count+1} )
    },3000);
  }, [] )
  return (
    <div>
      <Background playStatus={playStatus}  heroCount={heroCount} />
      <Navbar />
      <Hero heroData={heroData}
      heroCount={heroCount}
      playStatus={playStatus}
      setHeroCount={setHeroCount} 
      setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App