
import './App.css';
import SearchWeather from './components/Search/search';

function App() {

  
  return (
   <div className="container mx-auto rounded-lg">
      <h1 className="flex items-center justify-center text-5xl text-white ">Weather Forecast</h1>
      <SearchWeather />
   </div>
  );
}

export default App;
