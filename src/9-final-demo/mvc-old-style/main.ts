/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @since 01 May 2026
 * @description Main entry point of the projectile application.
 */
import {ProjectileController} from './projectile-controller.js';
import {ProjectileModel} from './projectile-model.js';
import {ProjectileView} from './projectile-view.js';

/** @description Initializes and starts the projectile MVC application. */
function main(): void {
  new ProjectileController(
    new ProjectileModel(),
    new ProjectileView(),
  );
}

main();