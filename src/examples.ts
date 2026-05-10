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
 * @desc Defines the available React examples displayed in the application.
 */

import type { ReactElement } from 'react';

import { TsxExample } from './1.1-tsx/tsx-example';
import { ComponentsExample } from './1.2-components/components-example';
import { HelloWorld } from './2-hello-world/hello-world';
import { BookDemo } from './3.1-book-props-example/book-examples';
import { Events } from './4.1-events/events';
import { UseState } from './5-use-state/use-state';
import { UseEffect } from './6.1-use-effect/use-effect';
import { UseRef } from './6.2-use-ref/use-ref';
import { BookMVC } from './7-mini-mvc/adapter';
import { CanvasWithReact } from './8-canvas-with-react/canvas-with-react';
import { ProjectileReact } from './9-final-demo/projectile-react';

export type ExampleName =
  | 'home'
  | 'tsxExample'
  | 'componentsExample'
  | 'helloWorld'
  | 'bookProps'
  | 'events'
  | 'useState'
  | 'useEffect'
  | 'useRef'
  | 'bookMVC'
  | 'canvasWithReact'
  | 'ProjectileReact';

export interface Example {
  id: Exclude<ExampleName, 'home'>;
  title: string;
  description: string;
  component: () => ReactElement;
}

export const examples: Example[] = [
  {
    id: 'tsxExample',
    title: 'TSX Example',
    description: 'Example of TSX syntax in React.',
    component: TsxExample,
  },
  {
    id: 'componentsExample',
    title: 'React Components',
    description: 'Basic example of reusable React components.',
    component: ComponentsExample,
  },
  {
    id: 'helloWorld',
    title: 'Hello World',
    description: 'Basic React component example.',
    component: HelloWorld,
  },
  {
    id: 'bookProps',
    title: 'Book Props Examples',
    description: 'Demonstrates different ways of using props in React.',
    component: BookDemo,
  },
  {
    id: 'events',
    title: 'Event Handling',
    description: 'Example of handling click and change events in React.',
    component: Events,
  },
  {
    id: 'useState',
    title: 'State with useState',
    description: 'Counter example using typed state and event handlers.',
    component: UseState,
  },
  {
    id: 'useEffect',
    title: 'Side Effects with useEffect',
    description: 'Example of using useEffect to react to state changes.',
    component: UseEffect,
  },
  {
    id: 'useRef',
    title: 'References with useRef',
    description: 'Example of using useRef for DOM and persistent references.',
    component: UseRef,
  },
  {
    id: 'bookMVC',
    title: 'Mini MVC Example',
    description: 'Simple implementation of MVC architecture in React.',
    component: BookMVC,
  },
  {
    id: 'canvasWithReact',
    title: 'Canvas in React',
    description: 'Canvas integration using useRef and useEffect.',
    component: CanvasWithReact,
  },
  {
    id: 'ProjectileReact',
    title: 'Projectile React',
    description: 'Interactive projectile simulation using React and Canvas.',
    component: ProjectileReact,
  },
];