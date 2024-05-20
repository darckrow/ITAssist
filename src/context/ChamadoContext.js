import React, { createContext, useState } from 'react';

export const ChamadoContext = createContext();

export const ChamadoProvider = ({ children }) => {
  const [chamados, setChamados] = useState([]);

  const addChamado = (newChamado) => {
    setChamados([...chamados, newChamado]);
  };

  return (
    <ChamadoContext.Provider value={{ chamados, addChamado }}>
      {children}
    </ChamadoContext.Provider>
  );
};
