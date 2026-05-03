import type { ReactElement } from 'react';
import { UseState } from './5-use-state/use-state';
import { CanvasWithReact } from './8-canvas-with-react/canvas-with-react';
import { ProjectileExample } from './11-final-demo/projectile-example';

export type ExampleName = 
  'home' | 
  'useState' | 
  'canvasWithReact'|
  'projectileMvcReact';

export interface Example {
  id: Exclude<ExampleName, 'home'>;
  title: string;
  description: string;
  component: () => ReactElement;
}

export const examples: Example[] = [
  {
    id: 'useState',
    title: 'State with useState',
    description: 'Counter example using typed state and event handlers.',
    component: UseState,
  },
  {
    id: 'canvasWithReact',
    title: 'Canvas in React',
    description: 'Simple canvas example using useRef and useEffect.',
    component: CanvasWithReact,
  },
  {
    id: 'projectileMvcReact',
    title: 'Projectile MVC (PAI + React)',
    description: 'Projectile simulation using MVC architecture with React and Canvas.',
    component: ProjectileExample,
  },
];