import './App.css';
import AppRouter from './config/AppRouter';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className='App'>
        <AppRouter />
    </div>
  );
}

export default App;
