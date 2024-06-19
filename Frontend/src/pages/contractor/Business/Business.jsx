import React, { useState, useEffect } from "react";
import { loadState, saveState } from "./localstorage";
// import "./Business.css";
// import paintingImage from "./images/painting.jpg";
// import electricalImage from "./images/electrical.jpg";
// import carpentryImage from "./images/carpentry.jpg";

const Business = () => {
  const [currentBusinesses, setCurrentBusinesses] = useState(() =>
    loadState("currentBusinesses") || []
  );
  const [newBusinesses, setNewBusinesses] = useState(() =>
    loadState("newBusinesses") || [
      { id: 1, name: 'Painting', image: 'path/to/paintingImage.jpg' },
      { id: 2, name: 'Electrical', image: 'path/to/electricalImage.jpg' },
      { id: 3, name: 'Carpentry', image: 'path/to/carpentryImage.jpg' },
      // Add more business items as needed
    ]
  );

  useEffect(() => {
    saveState("currentBusinesses", currentBusinesses);
  }, [currentBusinesses]);

  useEffect(() => {
    saveState("newBusinesses", newBusinesses);
  }, [newBusinesses]);

  const addBusiness = (business) => {
    const updatedCurrent = [...currentBusinesses, business];
    const updatedNew = newBusinesses.filter((item) => item.id !== business.id);
    setCurrentBusinesses(updatedCurrent);
    setNewBusinesses(updatedNew);
  };

  const removeBusiness = (business) => {
    const updatedNew = [...newBusinesses, business];
    const updatedCurrent = currentBusinesses.filter((item) => item.id !== business.id);
    setNewBusinesses(updatedNew);
    setCurrentBusinesses(updatedCurrent);
  };

  return (
    <div className="business-page">
      <h1>What Businesses are you involved in ?</h1>
      <div className="business-sections">
        <div className="current-business">
          <h2>Current Business</h2>
          {currentBusinesses.length > 0 ? (
            currentBusinesses.map((business) => (
              <div key={business.id} className="business-card">
                <img src={business.image} alt={business.name} />
                <div className="business-info">
                  <p>{business.name}</p>
                  <button onClick={() => removeBusiness(business)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p>No current businesses.</p>
          )}
        </div>
        <div className="add-business">
          <h2>Add More Business</h2>
          {newBusinesses.length > 0 ? (
            newBusinesses.map((business) => (
              <div key={business.id} className="business-card">
                <img src={business.image} alt={business.name} />
                <div className="business-info">
                  <p>{business.name}</p>
                  <button onClick={() => addBusiness(business)}>Add</button>
                </div>
              </div>
            ))
          ) : (
            <p>No more businesses to add.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Business;
