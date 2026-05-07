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
 * @desc Demo showing how Book components receive props.
 */

import type { JSX } from 'react';
import {
  Book,
  BookDestructured,
  BookMultipleProps,
  BookObject,
  BookDefault,
} from './book-props';

export function BookDemo(): JSX.Element {
  return (
    <div>
      <Book title="1984" author="George Orwell" />

      <BookDestructured title="Dune" />

      <BookMultipleProps title="Clean Code" author="Robert C. Martin" />

      <BookObject
        title="Example"
        details={{ year: 2020, genre: "Tech" }}
      />

      <BookDefault title="No author book" />
    </div>
  );
}