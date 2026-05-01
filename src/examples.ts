import type { ReactElement } from 'react';
import { UseState } from './5-use-state/use-state';

export type ExampleName = 'home' | 'useState';

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
];