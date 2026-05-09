/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @file Projectile types.
 * @since May 07 2026
 * @description Common type definitions for the projectile application.
 */

/**
 * @description Represents a 2D point in physical coordinates.
 */
export type Point2D = {
  xCoordinate: number;
  yCoordinate: number;
};

/**
 * @description Represents the launch parameters of the projectile.
 */
export type LaunchParameters = {
  initialSpeed: number;
  launchAngleDegrees: number;
  initialHeight: number;
  gravity: number;
};

/**
 * @description Represents the state of the projectile simulation.
 */
export type ProjectileState = {
  parameters: LaunchParameters;
  trajectory: Point2D[];
};

/**
 * @description Callback functions used by the view.
 */
export type ProjectileViewCallbacks = {
  onSpeedChange: (initialSpeed: number) => void;
  onAngleChange: (launchAngleDegrees: number) => void;
  onHeightChange: (initialHeight: number) => void;
  onReset: () => void;
};

/**
 * @description Data structure passed to the view.
 */
export type ProjectileViewData = {
  state: ProjectileState;
  callbacks: ProjectileViewCallbacks;
};