import { useLoaderData } from "react-router-dom"
import Coffee from "./coffee";
import { useState } from "react";


const Showcoffee = () => {
  const loadedallcoffee = useLoaderData();
  const [allcoffee,setallcoffee] = useState(loadedallcoffee);
  console.log(allcoffee);
  return (
    <div>
        <h1>all data</h1>
        {
           allcoffee.map(coffeel => <Coffee key={coffeel._id} coffeel={coffeel} allcoffee={allcoffee} setallcoffee={setallcoffee} ></Coffee>)
        }
    </div>
  )
}

export default Showcoffee