// import axios from 'axios'
import { useState, useEffect } from "react";

// devo fare una chiamata di rete all'url del server
// ciclare sui risultati, se ci sono, e mostrarli a video

// dovro' creare uno stato del componente da mostrare nell'html
// lo stato del componente viene modificato dentro useEffect a seguito della chiamata

import React from "react";

const Call = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const res = await fetch("http://localhost:3001/");
      const json = await res.json();
      setStudents(json);
    }
    fetchStudents();
  }, []);

  return (
    <div>
        {students.map((s) => (
        <div>
          <ul>
            <li>{s.name}</li>
            <li>{s.surname}</li>
          </ul>
        </div>
      ))} 
    
    </div>
  );
};

export default Call;
