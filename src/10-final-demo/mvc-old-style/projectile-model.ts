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
 * @description Model component that stores the projectile parameters
 *              and calculates its trajectory.
 */
import type {
  LaunchParameters,
  Point2D,
  ProjectileState,
} from './projectile-types.js';

/** @description Represents the projectile model and its physics logic. */
export class ProjectileModel {
  private parameters: LaunchParameters = {
    initialSpeed: 25,
    launchAngleDegrees: 45,
    initialHeight: 0,
    gravity: 9.8,
  };

  /**
   * @description Returns the current application state.
   * @returns Projectile state with parameters and trajectory.
   */
  getState(): ProjectileState {
    return {
      parameters: { ...this.parameters },
      trajectory: this.calculateTrajectory(),
    };
  }

  /**
   * @description Updates the projectile initial speed.
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
   * @description Updates the initial projectile height.
   * @param initialHeight New initial height.
   */
  setInitialHeight(initialHeight: number): void {
    this.parameters.initialHeight = initialHeight;
  }

  /** @description Restores the default projectile parameters. */ 
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