"use client";

import { useState, useEffect } from "react";

export default function Todo() {
     const [todo, setTodo] = useState({});
     useEffect(async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          setTodo(data);
     }, []);

     return(
          <div>{todo.title}</div>
     );
}