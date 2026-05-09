/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sara Darias Sánchez  
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @since May 6 2026
 * @desc 
 */

import type { JSX } from 'react';
import './tsx-example.css';

function BasicElement(): JSX.Element {
	return <h1>Hello, world!</h1>;
}

function ElementWithExpression(): JSX.Element {
  const name = 'React';
  return <h1>Hello, {name}!</h1>;
}

function ElementWithClassName(): JSX.Element {
  return <h1 className='greeting'>Hello, world className!</h1>;
}

function ElementWithComments(): JSX.Element {
  return (
    <div>
      {/* This is a comment in JSX */}
      <h1>Hello, world commented!</h1>
    </div>
  );
}

export function TsxExample(): JSX.Element {
	return (
    <>
      <BasicElement/>
      <ElementWithExpression/>
      <ElementWithClassName/>
      <ElementWithComments/>
    </>
  );
}

