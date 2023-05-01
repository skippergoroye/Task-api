import { useEffect, useState } from 'react'
import './App.css'


// const url =  https://jsonplaceholder.typicode.com/posts?_limit=8

function App() {
  const [item, setItem] = useState([])

  // useEffect(() => {
  //   fetch('https://gorest.co.in/public/v2/users')
  //     .then(response => response.json())
  //     .then(item => setItem(item))

  //     // console.log(item)

  // }, [])
  //    console.log(item)

  

   



  // useEffect(() => {
  //      fetch('https://gorest.co.in/public/v2/users')
  //         .then(response => response.json())
  //         .then(data => setData(data))
  //     console.log(data)
  // },[])



  // Using the async/await syntax

  // useEffect(() => { 
  //   async function getData() {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?_limit=10`
  //     )
  
  //     console.log(response)
  //   }
  //   getData()
  // }, [])




  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?_limit=10`
  //     )
  //     let actualData = await response.json();
  
  //     console.log(actualData) 
  //   }
  //   getData()
  // }, [])



  useEffect(() => {
    fetchApi()
  }, [])


  const fetchApi = async () => {
    const res = await fetch('https://gorest.co.in/public/v2/users')

    // convert to json 
    // console.log(res.json())
    
    const data = await res.json();
    setItem(data)
    // console.log(data)
  }







 

  return (
    <>
     <div>
       <h1>hello</h1>
       <ul>
        {item && item.map(({ id, name, email, gender, status, title }) => (
            <li key={id}>
              <h2>Name: {name}</h2>
              <h5>Email: {email}</h5>
              <h5>Gender: {gender}</h5>
              <h5>Status: {status}</h5>
            </li>
        ))}
      </ul>

     
     {/* <h1>Method Two</h1>
      <ul>
        {data && data.map((item, index) => (
            <li key={index}>
              <h2>Name: {item.name}</h2>
              <h5>Email: {item.email}</h5>
              <h5>Gender: {item.gender}</h5>
              <h5>Status: {item.status}</h5>
            </li>
        ))}
      </ul> */}


     </div>
    </>
  )
}

export default App
