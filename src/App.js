import './App.css';
import TopBar from './Navbar/Topbar'
import Background from './Navbar/Background'
import StoreListings from './Navbar/StoreListing'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;