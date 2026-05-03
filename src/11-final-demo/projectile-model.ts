import type { LaunchParameters, Point2D, ProjectileState } from './projectile-types';

export class ProjectileModel {
  private parameters: LaunchParameters = {
    initialSpeed: 25,
    launchAngleDegrees: 45,
    initialHeight: 0,
    gravity: 9.8,
  };

  getState(): ProjectileState {
    return {
      parameters: { ...this.parameters },
      trajectory: this.calculateTrajectory(),
    };
  }

  setInitialSpeed(initialSpeed: number): void {
    this.parameters.initialSpeed = initialSpeed;
  }

  setLaunchAngleDegrees(launchAngleDegrees: number): void {
    this.parameters.launchAngleDegrees = launchAngleDegrees;
  }

  setInitialHeight(initialHeight: number): void {
    this.parameters.initialHeight = initialHeight;
  }

  reset(): void {
    this.parameters = {
      initialSpeed: 25,
      launchAngleDegrees: 45,
      initialHeight: 0,
      gravity: 9.8,
    };
  }

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

      if (yCoordinate < 0) {
        break;
      }

      trajectory.push({ xCoordinate, yCoordinate });
    }

    return trajectory;
  }
}