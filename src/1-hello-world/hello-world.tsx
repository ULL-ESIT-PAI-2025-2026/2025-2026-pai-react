/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Sara Darias Sánchez  
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @since May 5 2026
 * @desc Basic React component that displays a Hello World message.
 */

import type { JSX } from 'react';

export function HelloWorld(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
