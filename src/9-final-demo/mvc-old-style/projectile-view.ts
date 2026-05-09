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
 * @description View component that manages projectile controls and canvas rendering.
 */
import type {Point2D, ProjectileState} from './projectile-types.js';

/** @description Handles user interface events and renders the projectile scene. */
export class ProjectileView {
  private readonly speedInput: HTMLInputElement;
  private readonly angleInput: HTMLInputElement;
  private readonly heightInput: HTMLInputElement;
  private readonly resetButton: HTMLButtonElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;

  /** @description Creates the view and initializes input elements and canvas context. */
  constructor() {
    this.speedInput = this.getElement<HTMLInputElement>('#speed-input');
    this.angleInput = this.getElement<HTMLInputElement>('#angle-input');
    this.heightInput = this.getElement<HTMLInputElement>('#height-input');
    this.resetButton = this.getElement<HTMLButtonElement>('#reset-button');
    this.canvas = this.getElement<HTMLCanvasElement>('#projectile-canvas');

    const context = this.canvas.getContext('2d');
    if (context === null) {
      throw new Error('Canvas context not found');
    }
    this.context = context;
  }

  /**
   * @description Adds a listener for speed input changes.
   * @param listener Function executed when speed changes.
   */
  addSpeedInputListener(listener: (initialSpeed: number) => void): void {
    this.speedInput.addEventListener('input', (): void => {
      listener(Number(this.speedInput.value));
    });
  }

  /**
   * @description Adds a listener for angle input changes.
   * @param listener Function executed when angle changes.
   */
  addAngleInputListener(listener: (launchAngleDegrees: number) => void): void {
    this.angleInput.addEventListener('input', (): void => {
      listener(Number(this.angleInput.value));
    });
  }

  /**
   * @description Adds a listener for height input changes.
   * @param listener Function executed when height changes.
   */
  addHeightInputListener(listener: (initialHeight: number) => void): void {
    this.heightInput.addEventListener('input', (): void => {
      listener(Number(this.heightInput.value));
    });
  }

  /**
   * @description Adds a listener for the reset button.
   * @param listener Function executed when reset is requested.
   */
  addResetListener(listener: () => void): void {
    this.resetButton.addEventListener('click', listener);
  }

  /**
   * @description Renders the complete current state.
   * @param state Projectile state to render.
   */
  render(state: ProjectileState): void {
    this.speedInput.value = String(state.parameters.initialSpeed);
    this.angleInput.value = String(state.parameters.launchAngleDegrees);
    this.heightInput.value = String(state.parameters.initialHeight);
    this.updateLabels(state);
    this.drawScene(state.trajectory);
  }

  /**
   * @description Updates the visible labels of the controls.
   * @param state Projectile state with current parameters.
   */
  private updateLabels(state: ProjectileState): void {
    this.getElement<HTMLElement>('#speed-value').textContent =
      `${state.parameters.initialSpeed} m/s`;

    this.getElement<HTMLElement>('#angle-value').textContent =
      `${state.parameters.launchAngleDegrees}°`;

    this.getElement<HTMLElement>('#height-value').textContent =
      `${state.parameters.initialHeight} m`;
  }

  /**
   * @description Draws the full canvas scene.
   * @param trajectory Projectile trajectory points.
   */
  private drawScene(trajectory: Point2D[]): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawAxes();
    this.drawTrajectory(trajectory);
    this.drawProjectile(trajectory);
  }

  /** @description Draws the coordinate axes. */
  private drawAxes(): void {
    const marginPixels = 50;
    const originY = this.canvas.height - marginPixels;

    this.context.strokeStyle = '#757763';
    this.context.lineWidth = 2;

    this.context.beginPath();
    this.context.moveTo(marginPixels, originY);
    this.context.lineTo(this.canvas.width - marginPixels, originY);
    this.context.moveTo(marginPixels, originY);
    this.context.lineTo(marginPixels, marginPixels);
    this.context.stroke();

    this.context.fillStyle = '#2f3028';
    this.context.font = '16px sans-serif';
    this.context.fillText('x', this.canvas.width - 40, originY + 25);
    this.context.fillText('y', marginPixels - 25, 40);
  }

  /**
   * @description Draws the projectile trajectory.
   * @param trajectory Projectile trajectory points.
   */
  private drawTrajectory(trajectory: Point2D[]): void {
    if (trajectory.length === 0) return;

    this.context.strokeStyle = '#5c068c';
    this.context.lineWidth = 4;
    this.context.beginPath();

    trajectory.forEach((point: Point2D, index: number): void => {
      const canvasX = 50 + point.xCoordinate * 7;
      const canvasY = this.canvas.height - 50 - point.yCoordinate * 7;

      if (index === 0) this.context.moveTo(canvasX, canvasY);
      else this.context.lineTo(canvasX, canvasY);
    });

    this.context.stroke();
  }

  /**
   * @description Draws the projectile at the last trajectory point.
   * @param trajectory Projectile trajectory points.
   */
  private drawProjectile(trajectory: Point2D[]): void {
    if (trajectory.length === 0) return;

    const lastPoint = trajectory[trajectory.length - 1];
    const canvasX = 50 + lastPoint.xCoordinate * 7;
    const canvasY = this.canvas.height - 50 - lastPoint.yCoordinate * 7;

    this.context.fillStyle = '#5c068c';
    this.context.beginPath();
    this.context.arc(canvasX, canvasY, 8, 0, 2 * Math.PI);
    this.context.fill();
  }

  /**
   * @description Gets an HTML element from the DOM.
   * @param selector CSS selector.
   * @returns The HTML element associated with the selector.
   */
  private getElement<Type extends HTMLElement>(selector: string): Type {
    const element = document.querySelector<Type>(selector);
    if (element === null) {
      throw new Error(`Element not found: ${selector}`);
    }
    return element;
  }
}