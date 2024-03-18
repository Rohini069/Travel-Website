import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Error = () => {

    useEffect(()=>{
        const header = document.getElementById('header');
        console.log('header',header);
        header.style.display='none';
    })
    
  return (
    <>
    
    <div style={{textAlign:'center', margin:'50px auto'}}>
    <img src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFnZSUyMG5vdCUyMGZvdW5kfGVufDB8fDB8fHww' alt='Error' height={400} width={500} />
    <div style={{textAlign:'center'}}>
    <button><Link to='/'>Home</Link></button>
    </div>
    </div>
    </>
  )
}

export default Error