import React, { useEffect, useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../frebase";
import { getDocs, doc, onSnapshot } from "firebase/firestore";
function Blog() {
  const [res, setRes] = useState([]);
  const ref = collection(firestore, "contacts");
  //   send message
  const [Message, setMessage] = useState("");
  const submithandler = (e) => {
    e.preventDefault();

    let data = {
      user: "F",
      message: Message,
    };
    try {
      addDoc(ref, data);
      console.log("added");
    } catch (err) {
      console.log(err);
    }
    setMessage("");
  };
  // get messages
  const getMessages = async () =>
    onSnapshot(ref, (doc) => {
      const urls = [];
      doc.forEach((doc) => {
        urls.push(doc.data());
      });
      setRes(urls);
    });

  useEffect(() => {
    getMessages();
  }, []);
  console.log(res);
  return (
    <>
      <div className=" flex justify-center items-start w-screen mt-10 h-screen">
      <div className=" flex-[0.2] flex w-full justify-center">
        <div className=" h-8 w-8 rounded-full bg-gray ">F</div>
      </div>
        <div className="flex flex-col w-80 h-96 ">
          <div className=" flex-[0.8]  bg-purple px-1 py-2 overflow-auto rounded-lg">
            {/* pers 1 */}
            {res[0]
              ? res.map((m) => (
                  <div
                    className={` flex ${
                      m.user === "F" ? "flex-row" : " flex-row-reverse"
                    }  justify-end w-full  p-2`}
                  >
                    <div
                      className={` w-[80%] h-full ${
                        m.user === "F" ? "bg-gray" : "bg-green"
                      } p-2  rounded-md`}
                    >
                      <p>{m.message} </p>
                    </div>
                    <div className=" mx-1 h-5 w-5 bg-orange rounded-full flex justify-center items-center">
                      {m.user}
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <form
            onSubmit={submithandler}
            className=" flex-[0.2] px-2 flex items-center bg-blue rounded-lg"
          >
            <div className=" flex-[0.8] h-[60%] ">
              <input
                type="text"
                placeholder="Message..."
                onChange={(e) => setMessage(e.target.value)}
                value={Message}
                className=" h-full w-full rounded-lg px-2"
              />
            </div>
            <div className=" flex-[0.2]">
              <button type="submit" className=" bg-green rounded-lg px-2 py-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Blog;

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

//   doc_refs.forEach(country => {
//     res.push({
//         id: country.id,
//         ...country.data()
//     })
// })
// const fetchPost = async () => {

//     await getDocs(ref)
//         .then((querySnapshot)=>{
//             const newData = querySnapshot.docs
//                 .map((doc) => ({...doc.data(), id:doc.id }));
//             setTodos(newData);
//             console.log(todos, newData);
//         })
// }
