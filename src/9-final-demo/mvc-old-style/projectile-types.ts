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
 * @description Common type definitions used in the projectile application.
 */

/** @description Represents a point in a 2D coordinate system. */
export type Point2D = {
  xCoordinate: number;
  yCoordinate: number;
};

/** @description Represents the launch configuration of the projectile. */
export type LaunchParameters = {
  initialSpeed: number;
  launchAngleDegrees: number;
  initialHeight: number;
  gravity: number;
};

/** @description Represents the complete projectile application state. */
export type ProjectileState = {
  parameters: LaunchParameters;
  trajectory: Point2D[];
};