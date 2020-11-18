import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import UserHistory from './components/UserHistory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SearchBar />
       <SearchResults />
       <UserHistory />
      </header>
    </div>
  )
};

export default App;