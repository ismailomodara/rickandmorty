import './assets/css/main.scss';

import { ApolloProvider } from "@apollo/client";
import { client } from './services'

import Home from "./pages";

const App = () => {
  return (
      <ApolloProvider client={client}>
          <div className="app">
              <Home />
          </div>
      </ApolloProvider>
  );
}

export default App;
