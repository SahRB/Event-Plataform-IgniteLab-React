import { ApolloProvider } from "@apollo/client"
import {Router} from "./components/Router"
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom"


// import { gql, useQuery } from "@apollo/client"

// 

// query{
//   lessons{
//     id
//     title
//   }

// }

// `
// interface Lesson{
//   id: string;
//   title: string;
// }
function App() {
//  const {data}= useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
//   return (
//    <ul>
//     {data?.lessons.map(lesson=>{
//       return <li key={lesson.id}>{lesson.title}</li>
//     })}
//    </ul>
//   )

return(

      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
    </BrowserRouter>
    </ApolloProvider>

)
}

export default App
