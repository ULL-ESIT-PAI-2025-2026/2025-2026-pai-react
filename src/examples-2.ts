import type { ReactElement } from 'react';
import { UseState } from './5-use-state/use-state';
import {Events }from './4.1-events/events';
import { UseEffect } from './7.1-use-effect/use-effect';
import { UseRef } from './7.2-use-ref/use-ref';
import  BookMVC from './4.2-mini-mvc/adapter';
export type ExampleName = 'home' | 'useState' | 'Events' |  'useEffect'| 'useRef' | 'bookMVC';

export interface Example {
  id: Exclude<ExampleName, 'home'>;
  title: string;
  description: string;
  component: () => ReactElement;
}

export const examples: Example[] = [
  {
    id: 'Events',
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
  }



];