import './App.css';
import './components/LoginBox'
import LoginBox from './components/LoginBox';
import TopHeader from './components/Header';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <LoginBox/>
    </div>
  );
}

export default App;
