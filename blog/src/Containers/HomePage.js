import data from './data.json'
import { useState } from 'react'
import { useHistory } from "react-router-dom";


const HomePage = () => {

  const history = useHistory();

  const [blogId, setId] = useState()

  const routeChange = async (item)  => { 
    setId(item.id)
    let path = `/post/${blogId}`; 
    history.push(path);
  }

  console.log("id", blogId)

  return (
    <>
   <h1>lewis blog</h1>
   <h2>
        { data &&
          data.map((item) => (
            <ul>
              <button onMouseEnter={() => setId(item.id)} onClick={() => routeChange(item)}  > 
                {item.title}
                 </button>
              </ul>
          ))}

   </h2>
   </>
  )
  
}

export default HomePage