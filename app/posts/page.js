import Todo from "../components/todo";
import Link from "next/link";

export const metadata = {
     title: "Posts page"
}

export default async function PostsPage() {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          next: {
               revalidate: 120,
          }
     });
     const posts = await response.json();
     
     const postsJSX = posts.map((post) => {
          return(
               <Link style={{width: "70%"}} href={`/posts/${post.id}`}>
                    <div style={{
                         width: "100%",
                         background: "white",
                         padding: "10px",
                         borderRadius: "10px",
                         color: "black",
                         marginTop: "10px"
                    }}>
                         <h1>POST - {post.id}</h1>
                         <div>{post.title}</div>
                         <p>{post.body}</p>
                    </div>
               </Link>
          );
     });


     return(
          <div>
               <h1>PostsPage</h1>
               <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
               }}>{postsJSX}</div>
          </div>
     );
}