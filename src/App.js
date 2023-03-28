import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Comment from "./Comment";

function App() {
  const [comments,setComment] = useState(null)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((result)=> {
      setComment(result.data)
    })
  }, [])
  
  return (
    <div>
      {comments ? <Comment com={comments}/> : <Loading />}
    </div>
  );
}
export default App;
