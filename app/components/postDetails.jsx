export default async function PostDetails({postId}) {

     await new Promise((resolve) => {
          setTimeout(() => {
               resolve();
          }, 2000);
     });

     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          next: {
               revalidate: 120,
          }
     });
     const post = await response.json();

     return(
          <div style={{
               width: "100%",
               background: "white",
               padding: "10px",
               borderRadius: "10px",
               color: "black",
               marginTop: "10px"
          }}>
               <h1>PostDetails {postId}</h1>
               <div>
                    <h1 style={{display:"flex" , justifyContent: "center", alignItems:"center", padding: "20px"}}>{post.title}</h1>
                    <p>{post.body}</p>
               </div>
          </div>
     );
}