import './App.css';
import RandomGif from './components/RandomGif';
import TaggedGif from './components/TaggedGif';

function App() {
  return (
    <div className="App">
      <h1 className="heading">GIFER : GIF Fetcher</h1>
      <div className="container">
        <RandomGif />
        <TaggedGif />
      </div>
    </div>
  );
}

export default App;
// To access api from env variable : process.env.REACT_API_KEY