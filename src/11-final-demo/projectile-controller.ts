/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @file ProjectileController class.
 * @since May 07 2026
 * @description Controller that coordinates the projectile model and view.
 */

import {ProjectileModel} from './projectile-model.js';
import {ProjectileView} from './projectile-view.js';

/**
 * @description Handles interaction between model and view.
 */
export class ProjectileController {
  /**
   * @description Creates the controller, initializes the root element and starts the application.
   * @param model Projectile model.
   * @param view Projectile view.
   */
  constructor(
    private readonly model: ProjectileModel,
    private readonly view: ProjectileView,
  ) {
    const element = document.getElementById('projectile-root');

    if (element === null) {
      throw new Error('Root element not found');
    }

    this.view.setRootElement(element);
    this.run();
  }

  /**
   * @description Starts the application.
   */
  private run(): void {
    this.renderView();
  }

  /**
   * @description Renders the view with the current state and callbacks.
   */
  private renderView(): void {
    this.view.render({
      state: this.model.getState(),
      callbacks: {
        onSpeedChange: this.handleSpeedChange,
        onAngleChange: this.handleAngleChange,
        onHeightChange: this.handleHeightChange,
        onReset: this.handleReset,
      },
    });
  }

  /**
   * @description Handles speed changes from the view.
   * @param initialSpeed New initial speed.
   */
  private handleSpeedChange = (initialSpeed: number): void => {
    this.model.setInitialSpeed(initialSpeed);
    this.renderView();
  };

  /**
   * @description Handles angle changes from the view.
   * @param launchAngleDegrees New angle in degrees.
   */
  private handleAngleChange = (launchAngleDegrees: number): void => {
    this.model.setLaunchAngleDegrees(launchAngleDegrees);
    this.renderView();
  };

  /**
   * @description Handles height changes from the view.
   * @param initialHeight New initial height.
   */
  private handleHeightChange = (initialHeight: number): void => {
    this.model.setInitialHeight(initialHeight);
    this.renderView();
  };

  /**
   * @description Resets the model state.
   */
  private handleReset = (): void => {
    this.model.reset();
    this.renderView();
  };
}