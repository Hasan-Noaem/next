import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({params}) {
     const postId = params.postId;
     const loadingJSX = (<div><h1>LOADING.</h1></div>);

     return(
          <div>
               <h1 style={{color: "white"}}>PostDetails {postId}</h1>
               <Suspense fallback={loadingJSX}>
                    <PostDetails postId={postId} />
               </Suspense>
          </div>
     );
}