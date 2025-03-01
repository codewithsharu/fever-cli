import React, { useState } from 'react';
import './App.css';
import { 
  feverData, 
  indianFevers, 
  symptomCategories,
  getIntersection,
  getAvailableSymptoms 
} from './data/feverData';

function App() {
  const [step, setStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedFevers, setSelectedFevers] = useState({});
  const [result, setResult] = useState(null);
  const [availableSymptoms, setAvailableSymptoms] = useState(symptomCategories.early);

  const classifyFevers = (symptoms, currentFevers) => {
    // Early return if no symptoms selected
    if (!symptoms.length) return {};

    const baseFevers = currentFevers || feverData;
    const feversToCheck = Object.keys(baseFevers).filter(fever => indianFevers.includes(fever));
    
    // Helper function to check symptom matches
    const getMatchingFevers = (fevers, symptoms, categorySymptoms = null) => {
      return fevers.reduce((acc, fever) => {
        const feverSymptoms = baseFevers[fever];
        const matchingSymptoms = getIntersection(symptoms, feverSymptoms);
        
        // If category check is needed (for step 2 and 3)
        const hasCategorySymptoms = categorySymptoms ? 
          getIntersection(feverSymptoms, categorySymptoms).length > 0 : 
          true;

        if (matchingSymptoms.length > 0 && hasCategorySymptoms) {
          acc[fever] = feverSymptoms;
        }
        return acc;
      }, {});
    };

    // Different classification logic based on step
    switch (step) {
      case 1:
        return getMatchingFevers(feversToCheck, symptoms);
      
      case 2:
        return getMatchingFevers(feversToCheck, symptoms, symptomCategories.middle);
      
      case 3:
        return getMatchingFevers(feversToCheck, symptoms, symptomCategories.serious);
      
      default:
        return {};
    }
  };

  const handleSymptomSelect = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSubmit = () => {
    if (step === 1) {
      const classified = classifyFevers(selectedSymptoms);
      if (Object.keys(classified).length === 0) {
        setResult("Please start with early symptoms first. If you're experiencing fatigue or other serious symptoms, please consult a doctor immediately.");
        return;
      }
      setSelectedFevers(classified);
      const nextAvailableSymptoms = getAvailableSymptoms(classified, symptomCategories.middle);
      setAvailableSymptoms(nextAvailableSymptoms);
      setStep(2);
    } else if (step === 2) {
      const classified = classifyFevers(selectedSymptoms, selectedFevers);
      if (Object.keys(classified).length === 0) {
        setResult("Based on early symptoms only. Please consult a doctor for proper diagnosis.");
        return;
      }
      setSelectedFevers(classified);
      const nextAvailableSymptoms = getAvailableSymptoms(classified, symptomCategories.serious);
      setAvailableSymptoms(nextAvailableSymptoms);
      setStep(3);
    } else if (step === 3) {
      const classified = classifyFevers(selectedSymptoms, selectedFevers);
      if (Object.keys(classified).length === 0) {
        setResult("Based on previous symptoms. Please consult a doctor for proper diagnosis.");
      } else {
        const allSymptoms = selectedSymptoms;
        // Sort fevers by number of matching symptoms and take top 3
        const sortedFevers = Object.keys(classified)
          .map(fever => ({
            name: fever,
            matchCount: getIntersection(classified[fever], allSymptoms).length
          }))
          .sort((a, b) => b.matchCount - a.matchCount)
          .slice(0, 3)  // Take only top 3 fevers
          .map(fever => fever.name);
        
        setResult(`You might be affected with: ${sortedFevers.join(", ")}. Please consult a doctor for proper diagnosis and blood test.`);
      }
    }
  };

  const getCurrentSymptoms = () => {
    return availableSymptoms;
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Step 1: Select Early Symptoms";
      case 2:
        return "Step 2: Select Middle Stage Symptoms";
      case 3:
        return "Step 3: Select Serious Symptoms";
      default:
        return "";
    }
  };

  if (result) {
    return (
      <div className="App">
        <div className="result-container">
          <h2>Diagnosis Result</h2>
          {result.includes("You might be affected with:") ? (
            <>
              <p><strong>Possible Fevers:</strong></p>
              <p style={{ color: '#d32f2f' }}>{result.split(":")[1].split(".")[0]}</p>
              <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
                Please consult a doctor for proper diagnosis and blood test.
              </p>
            </>
          ) : (
            <p>{result}</p>
          )}
          <button onClick={() => {
            setStep(1);
            setSelectedSymptoms([]);
            setSelectedFevers({});
            setResult(null);
          }}>Start Over</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Fever Classification System</h1>
      <div className="classification-container">
        <h2>{getStepTitle()}</h2>
        <div className="symptoms-grid">
          {getCurrentSymptoms().map((symptom, index) => (
            <div
              key={symptom}
              className={`symptom-item ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
              onClick={() => handleSymptomSelect(symptom)}
            >
              <span className="symptom-number">{index + 1}</span>
              <span className="symptom-text">{symptom}</span>
            </div>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          {step === 3 ? 'Get Result' : 'Next Step'}
        </button>
        {Object.keys(selectedFevers).length > 0 && (
          <div className="current-status">
            <h3>Current Classification:</h3>
            <details className="fever-dropdown">
              <summary>Possible fevers: {Object.keys(selectedFevers).length}</summary>
              <ul className="fever-list">
                {Object.keys(selectedFevers).map(fever => (
                  <li key={fever}>{fever}</li>
                ))}
              </ul>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
