import './App.css';
import Feed from './feed/Feed';
import Sidebar from './sidebar/Sidebar';
import Widget from './widget/Widget';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed/>
      <Widget/>

    </div>
  );
}

export default App;
