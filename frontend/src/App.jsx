import React, { useEffect, useState } from 'react'
import api from './api'

const App = () => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/');
        setMessage(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage('Error connecting to backend');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-red-600 text-3xl font-bold underline mb-4">Frontend</h1>
      <div className="text-xl">
        Backend says: <span className="text-blue-600 font-semibold">{message}</span>
      </div>
    </div>
  )
}

export default App