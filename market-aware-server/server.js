import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [item, setItem] = useState('laptop');

  useEffect(() => {
    axios
      .get(`http://10.55.107.25:5000/api/analyze/${item}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [item]);

  if (!data) return <h1>Loading Market Intelligence...</h1>;

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <button onClick={() => setItem('laptop')}>Laptop</button>
      <button onClick={() => setItem('shirt')}>Shirt</button>

      <div style={{
        marginTop: "20px",
        padding: "20px",
        border: data.isUrgent ? "3px solid red" : "1px solid gray"
      }}>
        <h2>{data.name}</h2>
        <p>${data.price}</p>
        <p>{data.newsHeadline}</p>
        <h3>{data.recommendation}</h3>
      </div>
    </div>
  );
}

export default App;