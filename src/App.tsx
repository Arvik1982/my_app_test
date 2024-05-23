import { useState } from 'react';
import './App.css'
import AppRoutes from './routes/AppRoutes';

function App() {
  
  const [error, setError] = useState("");
  return (
    <div>
      <h1>Страны мира</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <AppRoutes setError={setError} />
      
     </div>
  )
}

export default App
