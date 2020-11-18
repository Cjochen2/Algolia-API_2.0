import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import UserHistory from './components/UserHistory'

function App() {
  return (
    <div className="App container">
      <h1 className="App-header row justify-content-center">
        Algoia Api React-Redux App
      </h1>
      <SearchBar />
      <SearchResults />
      <UserHistory />
    </div>
  )
};

export default App;