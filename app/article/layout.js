export const metadata = {
     title: "Article page"
}

export default function Co ({children}) {
     return(
          <div>
               <h1>Article</h1>
               <div 
                    style={{
                         marginTop: "50px",
                         background: "blue",
                         padding: "20px",
                         borderRadius: "10px"
                         }}>{children}</div>
          </div>
     );
}