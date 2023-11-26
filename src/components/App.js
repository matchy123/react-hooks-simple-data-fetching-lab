import React,{useEffect, useState } from "react"

// create your App component here
export default function App(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [image, setImage] = useState("");
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data=> 
            {setImage(data.message) ;
                setIsLoaded(true) ;
            }
            )
    },[])
    if (!isLoaded) return <h3>Loading...</h3>;
    return(<img src={image} alt="A Random Dog" />)
       
}
