/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @since 01 May 2026
 * @description Example of using canvas in React.
 */

import { useRef, useEffect } from 'react';
import type { ReactElement } from 'react';
import './canvas-with-react.css';

export function CanvasWithReact(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect((): void => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const context = canvas.getContext('2d');
    if (context === null) return;


    context.fillStyle = '#5C068C';
    context.fillRect(50, 50, 150, 100);
  }, []);

  return (
    <section className="canvas-card">
      <h1 className="canvas-title">Canvas Example</h1>

      <canvas
        className="canvas-element"
        ref={canvasRef}
        width={500}
        height={320}
      />
    </section>
  );
}