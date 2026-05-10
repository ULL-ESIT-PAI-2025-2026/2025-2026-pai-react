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
 * @desc Simple example to explain React components.
 */

import type { JSX } from 'react';
import './components-example.css';

function Header(): JSX.Element {
  return (
    <header>
      <h1>React application using components.</h1>
    </header>
  );
}

function Content(): JSX.Element {
  return (
    <main className="content">
      <p>Welcome to our website.</p>
      <p>We are learning about components in React.</p>
    </main>
  );
}

function Footer(): JSX.Element {
  return (
    <footer>
      <p>© 2026 Our Web</p>
    </footer>
  );
}

function Button(): JSX.Element {
  return <button>Click here</button>;
}

export function ComponentsExample(): JSX.Element {
  return (
    <div className="container">
      <Header />
      <Button />
      <Content />
      <Button />
      <Footer />
    </div>
  );
}