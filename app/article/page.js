import Link from "next/link";

export default function ArticlePage() {
     return (
          <div>
               <h1>ArticlePage</h1>
               <Link href="/posts">
                    <button>Go To Posts</button>
               </Link>
          </div>
     );
}