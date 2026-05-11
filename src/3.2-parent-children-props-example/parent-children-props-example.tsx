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
 * @desc Demonstrates communication between parent and child components using props.
 */

import type { JSX, ReactNode } from 'react';
import './parent-children-props-example.css';

type ChildProps = {
  title: string;
  children: ReactNode;
};

//Child component that receives props from Parent.
function ChildComponent(props: ChildProps): JSX.Element {
  return (
    <div className="child-component">
      <h2>{props.title}</h2>

      {/* Content received from Parent */}
      {props.children}
    </div>
  );
}

// Parent component that sends data to children.
export function ParentChildrenExample(): JSX.Element {
  return (
    <div className="parent-container">
      <h1>Parent Component</h1>

      <ChildComponent title="First Child">
        <p>This text comes from the Parent component.</p>
      </ChildComponent>

      <ChildComponent title="Second Child">
        <p>Props allow Parent to communicate with children.</p>
      </ChildComponent>
    </div>
  );
}