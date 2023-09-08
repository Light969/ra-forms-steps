import { useState } from 'react';
import Form from './react-component/Form';
import TrainingSessions from './react-component/TrainingSessions';
import './App.css';

export default function App() {
  const [steps, setSteps] = useState([]);

  return (
    <div className="container">
      <Form steps={steps} setSteps={setSteps} />
      <TrainingSessions steps={steps} setSteps={setSteps} />
    </div>
  );
}
