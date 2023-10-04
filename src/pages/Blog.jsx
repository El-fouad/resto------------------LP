import React, { useEffect, useState } from 'react'
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../frebase"
import { getDocs,doc, onSnapshot } from "firebase/firestore";
function Blog() {
    const [res , setRes] = useState([])
    const [todos , setTodos] = useState()
    const ref = collection(firestore, "contacts")

   
        const unsub =async()=> onSnapshot( ref, (doc) => {
            console.log("Current data: ", doc.docs);
        });
        
        // const fetchPost = async () => {
       
        //     await getDocs(ref)
        //         .then((querySnapshot)=>{              
        //             const newData = querySnapshot.docs
        //                 .map((doc) => ({...doc.data(), id:doc.id }));
        //             setTodos(newData);                
        //             console.log(todos, newData);
        //         })
           
        // }
        useEffect(()=>{
            unsub()
        },[])
    
  return (
    <div>

    </div>
  )
}

export default Blog


// to add
// import { useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { addDoc, collection } from "@firebase/firestore"
// import { firestore } from "./firebase"
// function App() {
//   const [count, setCount] = useState('')
//   const submithandler = (e) => {
//     e.preventDefault()
//     const ref = collection(firestore, "contacts") // Firebase creates this automatically
 
//     let data = {
//         firsName: count
//     }
//     console.log(data);
//     try {
//         addDoc(ref, data)
//         console.log("added");
//     } catch(err) {
//         console.log(err)
//     }
//     setCount("")
//   }
 
//   return (
//     <div className="App">
//       <form onSubmit={submithandler}>
//         <input type= "text" value={count} onChange={(e)=>setCount(e.target.value)} />
//         <button type = "submit">Save</button>
//       </form>
//     </div>
//   );
// }

// export default App
