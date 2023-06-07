// import Atropos component
import Atropos from 'atropos/react';
import  './Test.css'

export default function Test({children}) {
  return (

      <Atropos className="my-atropos">
       

      {/*   <img
          src='../../../public/wallpaper.png'
          data-atropos-offset="-10"
         className='bg-img'



        /> */}


          {/* 
  Element with negative offset will move in reverse direction,
  making it appear behind the scene
  */}
  <img src="/wallpaper.png" data-atropos-offset="5" width={500} height={200} />
  {/* 
  Element with no offset will not move
  */}
  
  {/* 
  Element with positive offset will move in same direction,
  making it appear in front of the scene
  */}
  <div data-atropos-offset="-4">

        {children}
  </div>
  
        {/* ... */}
      </Atropos>
   
  )
}