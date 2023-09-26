
// import React from 'react'
// import Person from './component/Person/Person'


// const App = () => {
//   const img1 = "https://images.pexels.com/photos/18129433/pexels-photo-18129433/free-photo-of-young-fashionable-woman-in-sunglasses-posing-in-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   const img2 = "https://images.pexels.com/photos/16221175/pexels-photo-16221175/free-photo-of-young-woman-wearing-a-blazer-and-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   const img3 = "https://images.pexels.com/photos/15683680/pexels-photo-15683680/free-photo-of-young-woman-in-a-trendy-outfit-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   const img4 = "https://images.pexels.com/photos/18063728/pexels-photo-18063728/free-photo-of-young-woman-in-a-black-outfit-posing-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   const img5 ="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600"
//   return (
//     <div>
//     <Person name="Tomillionaire" numberOfChildren={2} image={img1}/>
//     <Person name="Praise" numberOfChildren={3} image={img2}/>
//     <Person name="Emmanuella" numberOfChildren={4} image={img3} />
//     <Person name="Jane" numberOfChildren={5} image={img4}/>
//     <Person name="Martha" numberOfChildren={6} image={img5}/>

//     </div>
//   )
// }

// export default App

import "./App.css"
import React from 'react'
import Box from './component/box/Box'

const App = () => {
  const styleObject = {
    display: "flex",
    flexWrap: "wrap",
  }

  const object1 ="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=600";
  const object2 ="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600";
  const object3 ="https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const object4 ="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600"
  const object5 ="https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600"
  const object6 = "https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=800"
  const object7 = "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const object8 = "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
  const object9 = "https://images.pexels.com/photos/14824329/pexels-photo-14824329.jpeg?auto=compress&cs=tinysrgb&w=800"
  const object10 = "https://images.pexels.com/photos/15493878/pexels-photo-15493878/free-photo-of-hands-on-samsung-galaxy-s23-ultra-5g-green-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=800"




  return (
    <div style={styleObject}>
      <Box title="iphone12" price="₦330,000" images={object1}/>
      <Box title="Unisex Medium Backpack" price="₦45,000" images={object2}/>
      <Box title="Red Stoned Heels" price="₦67,999" images={object3}/>
      <Box title="Michael Kors Wristwatch" price="₦112,000" images={object4}/>
      <Box title="Photochromic Eye Glasses" price="₦45,000" images={object5}/>
      <Box title="Macbook Pro" price="₦1,200,000" images={object6}/>
      <Box title="Diamond-Stud Earrings" price="₦79,000" images={object7}/>
      <Box title="Max Cushion Sneakers" price="₦162,000" images={object8}/>
      <Box title="PlayStation 5 " price="₦720,000" images={object9}/>
      <Box title="Samsung S23 Ultra" price="₦665,000" images={object10}/>
    </div>
  )
}

export default App