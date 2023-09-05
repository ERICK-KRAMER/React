import React from 'react'
import Svg from "../Components/Animation_Home";

export default function Section_home() {
  return (

    <div className="Wrapper-animation" style={{display: "flex",justifyContent: "space-around", width: "100%"}}>

        <div className="Animation_home" style={{width: "50%"}}>
            <Svg />
        </div>

        <div className="Wrapper-text" style={{width: "450%", display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column", fontSize: "1.3rem"}}>

            <h1>Home</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur impedit accusamus quis animi dolorum soluta laborum velit praesentium, possimus debitis est adipisci, consectetur accusantium minus omnis labore! Accusantium, harum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi deleniti minus ab laboriosam, aspernatur nam dicta iste possimus in delectus ipsa, accusantium ducimus itaque libero. Corporis necessitatibus dicta impedit.</p>

        </div>

    </div>
  )
}
