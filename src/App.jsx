import { useEffect, useState } from 'react'
import './App.css'




function App() {
  const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://gorest.co.in/public/v2/users')
  //     .then(response => response.json())
  //     .then(data => setData(data))

  //     console.log(data)
  // }, [])

  useEffect(() => {
       fetch('https://gorest.co.in/public/v2/users')
          .then(response => response.json())
          .then(data => setData(data))
      console.log(data)
  },[])

 

  return (
    <>
     <div>
       <h1>hello</h1>
       {/* <ul>
        {data && data.map(({ id, name, email, gender, status, title }) => (
            <li key={id}>
              <h2>Name: {name}</h2>
              <h5>Email: {email}</h5>
              <h5>Gender: {gender}</h5>
              <h5>Status: {status}</h5>
            </li>
        ))}
      </ul> */}

     
     <h1>Method Two</h1>
      <ul>
        {data && data.map((item, index) => (
            <li key={index}>
              <h2>Name: {item.name}</h2>
              <h5>Email: {item.email}</h5>
              <h5>Gender: {item.gender}</h5>
              <h5>Status: {item.status}</h5>
            </li>
        ))}
      </ul>


     </div>
    </>
  )
}

export default App
