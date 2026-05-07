/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @file ProjectileMain.
 * @since May 07 2026
 * @description Entry point of the projectile motion application.
 */

import {ProjectileController} from './projectile-controller.js';
import {ProjectileModel} from './projectile-model.js';
import {ProjectileView} from './projectile-view.js';

/**
 * @description Starts the projectile application.
 */
export function ProjectileMain(): void {
  new ProjectileController(
    new ProjectileModel(),
    new ProjectileView(),
  );
}