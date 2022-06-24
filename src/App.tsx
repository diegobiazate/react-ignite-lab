import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Evento } from "./pages/Event"
import { Router } from "./Router"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
