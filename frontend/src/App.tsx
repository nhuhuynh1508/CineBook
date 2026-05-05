
import { useEffect } from 'react';
import './App.css';
import HomePage from './app/pages/HomePage';

function App() {
  useEffect(() => {
  console.log("API URL: ", import.meta.env.VITE_API_URL);
}, []);
  return (
    <HomePage />
  );
}

export default App;
