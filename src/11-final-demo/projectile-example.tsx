/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @file ProjectileExample component.
 * @since May 07 2026
 * @description React component that initializes the projectile application.
 */

import {useEffect} from 'react';
import type {ReactElement} from 'react';
import {ProjectileMain} from './main-projectile';

/**
 * @description Renders the container and запуска the projectile app on mount.
 */
export function ProjectileExample(): ReactElement {
  useEffect((): void => {
    ProjectileMain();
  }, []);

  return <div id="projectile-root"></div>;
}