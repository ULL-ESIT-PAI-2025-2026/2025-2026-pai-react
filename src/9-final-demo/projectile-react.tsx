/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sara Darias Sánchez
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @file ProjectileReact
 * @since May 07 2026
 * @description React implementation of the projectile simulation without MVC.
 * 
 * !!213 LINES!! VS !!421 LINES + 26 INDEX = 447 LINES!!
 */
import {useEffect, useMemo, useRef, useState} from 'react';
import type {ChangeEvent, ReactElement} from 'react';
import './projectile.css';

type Point2D = {
  xCoordinate: number;
  yCoordinate: number;
};

type LaunchParameters = {
  initialSpeed: number;
  launchAngleDegrees: number;
  initialHeight: number;
  gravity: number;
};

const defaultParameters: LaunchParameters = {
  initialSpeed: 25,
  launchAngleDegrees: 45,
  initialHeight: 0,
  gravity: 9.8,
};

export function ProjectileReact(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [parameters, setParameters] = useState<LaunchParameters>(defaultParameters);

  const trajectory = useMemo((): Point2D[] => {
    return calculateTrajectory(parameters);
  }, [parameters]);

  useEffect((): void => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const context = canvas.getContext('2d');
    if (context === null) return;

    drawScene(canvas, context, trajectory);
  }, [trajectory]);

  const handleSpeedInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setParameters({...parameters, initialSpeed: Number(event.target.value)});
  };

  const handleAngleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setParameters({...parameters, launchAngleDegrees: Number(event.target.value)});
  };

  const handleHeightInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setParameters({...parameters, initialHeight: Number(event.target.value)});
  };

  const handleReset = (): void => {
    setParameters(defaultParameters);
  };

  return (
    <section className="projectile-card">
      <h1 className="projectile-title">Projectile React</h1>

      <div className="projectile-controls">
        <label>
          Speed: {parameters.initialSpeed} m/s
          <input
            type="range"
            min="10"
            max="80"
            value={parameters.initialSpeed}
            onChange={handleSpeedInput}
          />
        </label>

        <label>
          Angle: {parameters.launchAngleDegrees}°
          <input
            type="range"
            min="10"
            max="80"
            value={parameters.launchAngleDegrees}
            onChange={handleAngleInput}
          />
        </label>

        <label>
          Height: {parameters.initialHeight} m
          <input
            type="range"
            min="0"
            max="20"
            value={parameters.initialHeight}
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

      <button className="projectile-reset-button" onClick={handleReset}>
        Reset
      </button>
    </section>
  );
}

function calculateTrajectory(parameters: LaunchParameters): Point2D[] {
  const trajectory: Point2D[] = [];
  const angleRadians = parameters.launchAngleDegrees * Math.PI / 180;
  const velocityX = parameters.initialSpeed * Math.cos(angleRadians);
  const velocityY = parameters.initialSpeed * Math.sin(angleRadians);

  for (let timeSeconds = 0; timeSeconds <= 10; timeSeconds += 0.05) {
    const xCoordinate = velocityX * timeSeconds;
    const yCoordinate =
      parameters.initialHeight +
      velocityY * timeSeconds -
      0.5 * parameters.gravity * timeSeconds * timeSeconds;

    if (yCoordinate < 0) break;

    trajectory.push({xCoordinate, yCoordinate});
  }

  return trajectory;
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

  context.strokeStyle = '#757763'; // almost yellow
  context.lineWidth = 2;

  context.beginPath();
  context.moveTo(marginPixels, originY);
  context.lineTo(canvas.width - marginPixels, originY);
  context.moveTo(marginPixels, originY);
  context.lineTo(marginPixels, marginPixels);
  context.stroke();

  context.fillStyle = '#2f3028'; // black
  context.font = '16px sans-serif';
  context.fillText('x', canvas.width - 40, originY + 25);
  context.fillText('y', marginPixels - 25, 40);
}

function drawTrajectory(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  trajectory: Point2D[],
): void {
  if (trajectory.length === 0) return;

  context.strokeStyle = '#5c068c'; // ull purple
  context.lineWidth = 4;
  context.beginPath();

  trajectory.forEach((point: Point2D, index: number): void => {
    const canvasX = 50 + point.xCoordinate * 7;
    const canvasY = canvas.height - 50 - point.yCoordinate * 7;

    if (index === 0) context.moveTo(canvasX, canvasY);
    else context.lineTo(canvasX, canvasY);
  });

  context.stroke();
}

function drawProjectile(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  trajectory: Point2D[],
): void {
  if (trajectory.length === 0) return;

  const lastPoint = trajectory[trajectory.length - 1];
  const canvasX = 50 + lastPoint.xCoordinate * 7;
  const canvasY = canvas.height - 50 - lastPoint.yCoordinate * 7;

  context.fillStyle = '#5c068c';
  context.beginPath();
  context.arc(canvasX, canvasY, 8, 0, 2 * Math.PI);
  context.fill();
}