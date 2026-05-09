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
 * @description Controller component that coordinates the projectile model
 *              and view.
 */

import {ProjectileModel} from './projectile-model.js';
import {ProjectileView} from './projectile-view.js';

/** @description Handles user interaction and updates the view. */
export class ProjectileController {
  /**
   * @description Creates the controller and starts the application.
   * @param model Projectile model.
   * @param view Projectile view.
   */
  constructor(
    private readonly model: ProjectileModel,
    private readonly view: ProjectileView,
  ) {
    this.run();
  }

  /** @description Registers listeners and renders the initial state. */
  private run(): void {
    this.view.addSpeedInputListener(this.handleSpeedChange);
    this.view.addAngleInputListener(this.handleAngleChange);
    this.view.addHeightInputListener(this.handleHeightChange);
    this.view.addResetListener(this.handleReset);

    this.renderView();
  }

  /** @description Renders the current model state in the view. */
  private renderView(): void {
    this.view.render(this.model.getState());
  }

  /**
   * @description Handles speed changes from the view.
   * @param initialSpeed New projectile speed.
   */
  private handleSpeedChange = (initialSpeed: number): void => {
    this.model.setInitialSpeed(initialSpeed);
    this.renderView();
  };

  /**
   * @description Handles angle changes from the view.
   * @param launchAngleDegrees New launch angle.
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

  /** @description Resets the application state. */
  private handleReset = (): void => {
    this.model.reset();
    this.renderView();
  };
}