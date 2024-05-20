import React from 'react';
import { ChamadoProvider } from './src/context/ChamadoContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ChamadoProvider>
      <AppNavigator />
    </ChamadoProvider>
  );
}
