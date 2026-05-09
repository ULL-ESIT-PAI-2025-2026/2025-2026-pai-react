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
  'home' | 
  'tsxExample' |
  'helloWorld' |
  'bookProps' |
  'events' |
  'useEffect'| 
  'useRef' | 
  'bookMVC' | 
  'useState' | 
  'useEffect' |
  'useRef' |
  'bookMVC' |
  'canvasWithReact'|
  'ProjectileReact';

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
    description: 'Example of using useEffect to log component lifecycle events.',
    component: UseEffect,
  },
  {
    id: 'useRef',
    title: 'References with useRef',
    description: 'Example of using useRef to store previous state values.',
    component: UseRef,
  },
  {
    id: 'bookMVC',
    title: 'Mini MVC Example',
    description: 'A simple implementation of the Model-View-Controller pattern in React.',
    component: BookMVC,
  },
  {
    id: 'useState',
    title: 'State with useState',
    description: 'Counter example using typed state and event handlers.',
    component: UseState,
  },
  {
    id: 'useRef',
    title: 'References with useRef',
    description: 'Example of using useRef to store previous state values.',
    component: UseRef,
  },
  {
    id: 'canvasWithReact',
    title: 'Canvas in React',
    description: 'Simple canvas example using useRef and useEffect.',
    component: CanvasWithReact,
  },
  {
    id: 'ProjectileReact',
    title: 'Projectile React',
    description: 'Projectile simulation with React and Canvas.',
    component: ProjectileReact,
  },
];