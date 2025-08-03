// src/App.js
import React from 'react';
import './App.css'; // Importing external CSS

function App() {
  const heading = "Office Space at Affordable Range";

  const imgSrc = "https://assets.aboutamazon.com/dims4/default/3e58ba1/2147483647/strip/true/crop/1334x751+0+181/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F61%2F17%2F888fdb694f16948aa14f3689005d%2Fliving-space-upgrades-100.png";

  // Office list (array of objects)
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore" },
    { Name: "Regus", Rent: 60000, Address: "Hyderabad" },
    { Name: "SmartSpace", Rent: 45000, Address: "Pune" }
  ];

  return (
    <div className="container">
      {/* Heading */}
      <h1>{heading}</h1>

      {/* Office Image */}
      <img src={imgSrc} width="50%" alt="Office Space" className="office-image" />

      <hr />

      {/* Loop through office list */}
      {officeList.map((office, index) => (
        <div key={index} className="office-card">
          <h2>Name: {office.Name}</h2>
          <h3 className={office.Rent < 60000 ? "textRed" : "textGreen"}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
