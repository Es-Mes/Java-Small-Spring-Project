import React, { useEffect } from 'react'

const users = () => {
    useEffect(()=>{
        Axios.get(` http://localhost:8081/users`)
        .then(res=> console.log(res.data,"hhh") )
        },[])
  return (
    <div>users</div>
  )
}

export default users