import './assets/App.css';
import { Quiz } from './component/Question';
import { StartImage } from './component/Start';
import { Description } from './component/Description';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  // 画面表示部分
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartImage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </Router>
      
        
    </div>
  );
}

export default App;
