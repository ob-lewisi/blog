import { useParams } from 'react-router-dom';
import data from './data.json'

const BlogPost = () => {

  const urlParams = useParams();
  const id = urlParams.id


  console.log("IDIDIDID", id)
 
  console.log(data)
  const getBlog = data.find((item) => item.id = id)

  

  console.log("getblog", getBlog)


  return (
    <>
  <h1>{getBlog.title}</h1>
< h2>{getBlog.text}</h2>



    
    </>
  )
  
}

export default BlogPost