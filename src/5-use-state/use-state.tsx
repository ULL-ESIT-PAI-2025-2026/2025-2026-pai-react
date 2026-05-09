/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez  
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @since 01 May 2026
 * @description Example of handling states in React.
 */

import { useState } from 'react';
import type { ReactElement } from 'react';
import './use-state.css';

export function UseState(): ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <section className="use-state-card">
      <h1 className="use-state-title">useState Example</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-actions">
        <button onClick={(): void => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={(): void => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}