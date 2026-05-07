/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @since 02 May 2026
 * @description Example of using useEffect in React.
 */


import { useEffect, useState } from 'react';

export function UseEffect() {
  
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<string>('black');

  useEffect(() => {
    if (count % 2 === 0) {
      setColor('blue');
    } else {
      setColor('red');
    }
  }, [count]);

  return (
    <section className="use-effect-card">
      <h1 className="use-effect-title" style={{ color }}>useEffect Example</h1>
      <div className="counter-display">{count}</div>
      <button onClick={(): void => setCount(count + 1)}>
        Increment
      </button>
    </section>
  );

} 