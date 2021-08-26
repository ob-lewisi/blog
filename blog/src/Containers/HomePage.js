import data from './data.json'

const HomePage = () => {

  return (
    <>
   <h1>lewis blog</h1>
   <h2>
        { data &&
          data.map((item) => (
            <ul>
              <li> {item.title} </li>
              </ul>
          ))}

   </h2>
   </>
  )
  
}

export default HomePage