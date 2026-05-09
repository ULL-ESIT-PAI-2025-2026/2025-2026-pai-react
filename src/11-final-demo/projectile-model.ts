/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @file ProjectileModel class.
 * @since May 07 2026
 * @description Model that calculates projectile motion and stores its parameters.
 */

import type {LaunchParameters, Point2D, ProjectileState} from './projectile-types';

/**
 * @description Handles projectile physics and state.
 */
export class ProjectileModel {
  private parameters: LaunchParameters = {
    initialSpeed: 25,
    launchAngleDegrees: 45,
    initialHeight: 0,
    gravity: 9.8,
  };

  /**
   * @description Returns the current state of the projectile.
   * @returns Projectile state including parameters and trajectory.
   */
  getState(): ProjectileState {
    return {
      parameters: {...this.parameters},
      trajectory: this.calculateTrajectory(),
    };
  }

  /**
   * @description Updates the initial speed.
   * @param initialSpeed New speed value.
   */
  setInitialSpeed(initialSpeed: number): void {
    this.parameters.initialSpeed = initialSpeed;
  }

  /**
   * @description Updates the launch angle.
   * @param launchAngleDegrees New angle in degrees.
   */
  setLaunchAngleDegrees(launchAngleDegrees: number): void {
    this.parameters.launchAngleDegrees = launchAngleDegrees;
  }

  /**
   * @description Updates the initial height.
   * @param initialHeight New height value.
   */
  setInitialHeight(initialHeight: number): void {
    this.parameters.initialHeight = initialHeight;
  }

  /**
   * @description Resets parameters to default values.
   */
  reset(): void {
    this.parameters = {
      initialSpeed: 25,
      launchAngleDegrees: 45,
      initialHeight: 0,
      gravity: 9.8,
    };
  }

  /**
   * @description Calculates the projectile trajectory.
   * @returns Array of trajectory points.
   */
  private calculateTrajectory(): Point2D[] {
    const trajectory: Point2D[] = [];
    const angleRadians = this.parameters.launchAngleDegrees * Math.PI / 180;
    const velocityX = this.parameters.initialSpeed * Math.cos(angleRadians);
    const velocityY = this.parameters.initialSpeed * Math.sin(angleRadians);

    for (let timeSeconds = 0; timeSeconds <= 10; timeSeconds += 0.05) {
      const xCoordinate = velocityX * timeSeconds;
      const yCoordinate =
        this.parameters.initialHeight +
        velocityY * timeSeconds -
        0.5 * this.parameters.gravity * timeSeconds * timeSeconds;

      if (yCoordinate < 0) break;

      trajectory.push({xCoordinate, yCoordinate});
    }

    return trajectory;
  }
}