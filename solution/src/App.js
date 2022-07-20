import Card from './components/rating-card/Card';
import './App.css';
import Thanks from './components/thankYou-card/Thanks';
import { useState } from 'react';

function App() {
  const [isSumbit, setIsSubmit] = useState(false)
  const [finalRating, setFinalRating] = useState(null)

  const handleSubmit = (rating) => {
    setIsSubmit(true)
    setFinalRating(rating)
  }
  return (
    <div className="App">
      {
        !isSumbit ? 
          <Card handleSubmit={handleSubmit} />
          :
          <Thanks finalRating={finalRating} />
      }
     
    </div>
  );
}

export default App;
