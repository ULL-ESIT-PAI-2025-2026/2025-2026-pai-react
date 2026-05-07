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
 * @desc Examples of different ways to use props in React.
 */

import type { JSX } from 'react';

/**
 * Props definition for Book examples.
 */
type BookProps = {
  title: string;
  author?: string;
  details?: {
    year: number;
    genre: string;
  };
  tags?: string[];
  extra?: string;
};

/**
 * Displays a book title using props.
 * Uses the tittle attribute in the Book component.
 */
export function Book(props: BookProps): JSX.Element {
  return <h2>I am reading {props.title}!</h2>;
}

/**
 * Displays a book title using destructuring props.
 */
export function BookDestructured({title}: BookProps): JSX.Element {
  return <h2>I am reading {title}!</h2>;
}

/**
 * Displays a book title and author using multiple props.
 */
export function BookMultipleProps(props: BookProps): JSX.Element {
  return <h2>{props.title} by {props.author}!</h2>;
}

/**
 * Displays a book title and author using multiple props
 * destructured inside the component for cleaner access.
 */
export function BookDestructuredInside(props: BookProps): JSX.Element {
  const { title, author } = props;
  return <h2>{title} - {author}!</h2>;
}

/**
 * Displays a book title and author using object props.
 * Object props accessed with dot notation.
 */
export function BookObject({details,}: BookProps): JSX.Element {
  return (
    <h2>
      Book of genre {details?.genre} published in {details?.year}
    </h2>
  );
}

/**
 * Displays a book title and author using props with rest operator.
 * You can specify the properties you need, the rest will be stored in an object.
 */
export function BookRest(props: BookProps): JSX.Element {
  const { title, ...rest } = props;
  return (
    <h2>
      The book "{title}" written by {rest.author}
    </h2>
  );
}

/**
 * Displays a book title and author using props with a default value.
 */
export function BookDefault({title, author = "Unknown author",}: BookProps): JSX.Element {
  return <h2>{title} by {author}</h2>;
}


