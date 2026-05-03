import { useEffect, useRef } from 'react';
import type { ChangeEvent, ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import type { Point2D, ProjectileViewData } from './projectile-types';
import './projectile.css';

export class ProjectileView {
  private readonly root: Root;

  constructor(rootElement: HTMLElement) {
    this.root = createRoot(rootElement);
  }

  render(viewData: ProjectileViewData): void {
    this.root.render(<ProjectileComponent viewData={viewData} />);
  }
}

type ProjectileComponentProps = {
  viewData: ProjectileViewData;
};

function ProjectileComponent(props: ProjectileComponentProps): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect((): void => {
    const canvas = canvasRef.current;

    if (canvas === null) {
      return;
    }

    const context = canvas.getContext('2d');

    if (context === null) {
      return;
    }

    drawScene(canvas, context, props.viewData.state.trajectory);
  }, [props.viewData.state.trajectory]);

  const handleSpeedInput = (event: ChangeEvent<HTMLInputElement>): void => {
    props.viewData.callbacks.onSpeedChange(Number(event.target.value));
  };

  const handleAngleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    props.viewData.callbacks.onAngleChange(Number(event.target.value));
  };

  const handleHeightInput = (event: ChangeEvent<HTMLInputElement>): void => {
    props.viewData.callbacks.onHeightChange(Number(event.target.value));
  };

  return (
    <section className="projectile-card">
      <h1 className="projectile-title">Projectile MVC</h1>

      <div className="projectile-controls">
        <label>
          Speed: {props.viewData.state.parameters.initialSpeed} m/s
          <input
            type="range"
            min="10"
            max="80"
            value={props.viewData.state.parameters.initialSpeed}
            onChange={handleSpeedInput}
          />
        </label>

        <label>
          Angle: {props.viewData.state.parameters.launchAngleDegrees}°
          <input
            type="range"
            min="10"
            max="80"
            value={props.viewData.state.parameters.launchAngleDegrees}
            onChange={handleAngleInput}
          />
        </label>

        <label>
          Height: {props.viewData.state.parameters.initialHeight} m
          <input
            type="range"
            min="0"
            max="20"
            value={props.viewData.state.parameters.initialHeight}
            onChange={handleHeightInput}
          />
        </label>
      </div>

      <canvas
        ref={canvasRef}
        width={1000}
        height={450}
        className="projectile-canvas"
      />

      <button
        className="projectile-reset-button"
        onClick={props.viewData.callbacks.onReset}
      >
        Reset
      </button>
    </section>
  );
}

function drawScene(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  trajectory: Point2D[],
): void {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes(canvas, context);
  drawTrajectory(canvas, context, trajectory);
  drawProjectile(canvas, context, trajectory);
}

function drawAxes(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
  const marginPixels = 50;
  const originY = canvas.height - marginPixels;

  context.strokeStyle = '#757763';
  context.lineWidth = 2;

  context.beginPath();
  context.moveTo(marginPixels, originY);
  context.lineTo(canvas.width - marginPixels, originY);
  context.moveTo(marginPixels, originY);
  context.lineTo(marginPixels, marginPixels);
  context.stroke();

  context.fillStyle = '#2f3028';
  context.font = '16px sans-serif';
  context.fillText('x', canvas.width - 40, originY + 25);
  context.fillText('y', marginPixels - 25, 40);
}

function drawTrajectory(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  trajectory: Point2D[],
): void {
  if (trajectory.length === 0) {
    return;
  }

  context.strokeStyle = '#5c068c';
  context.lineWidth = 4;
  context.beginPath();

  trajectory.forEach((point: Point2D, index: number): void => {
    const canvasX = 50 + point.xCoordinate * 7;
    const canvasY = canvas.height - 50 - point.yCoordinate * 7;

    if (index === 0) {
      context.moveTo(canvasX, canvasY);
    } else {
      context.lineTo(canvasX, canvasY);
    }
  });

  context.stroke();
}

function drawProjectile(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  trajectory: Point2D[],
): void {
  if (trajectory.length === 0) {
    return;
  }

  const lastPoint = trajectory[trajectory.length - 1];
  const canvasX = 50 + lastPoint.xCoordinate * 7;
  const canvasY = canvas.height - 50 - lastPoint.yCoordinate * 7;

  context.fillStyle = '#5c068c';
  context.beginPath();
  context.arc(canvasX, canvasY, 8, 0, 2 * Math.PI);
  context.fill();
}