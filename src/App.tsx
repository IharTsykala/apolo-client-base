// import React from "react"
import "./App.scss"
// import Header from "./Components/Header/Header"
import MainPage from "./Pages/MainPage/MainPage"
// import Footer from "./Components/Footer/Footer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"

import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

// const App: React.FC = () => (
//   <Provider store={store}>
//     <ApolloProvider client={client}>
//       <div className={"wrapper1600"}>
//         <div className={"wrapper1440"}>
//           {/* <Header /> */}
//           <main className={"main"}>
//             <MainPage />
//           </main>
//           {/* <Footer /> */}
//         </div>
//       </div>
//     </ApolloProvider>
//   </Provider>
// )

// export default App

import React, { Component } from "react"

import gql from "graphql-tag"
import { graphql } from "react-apollo"

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(applyMiddleware())
)

const token = "358c8825a32b3bb7424de135545ebffea59ba358"

const httpLink = {
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`,
  },
}

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(),
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div></div>
      </ApolloProvider>
    )
  }
}

const repoQuery = gql`
  query($name: String!) {
    search(query: $name, last: 10, type: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
          }
        }
      }
    }
  }
`

const AppWithData = graphql(repoQuery, {
  options: {
    variables: {
      name: "tuts",
    },
  },
})(App)

export default AppWithData
