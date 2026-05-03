export type Point2D = {
  xCoordinate: number;
  yCoordinate: number;
};

export type LaunchParameters = {
  initialSpeed: number;
  launchAngleDegrees: number;
  initialHeight: number;
  gravity: number;
};

export type ProjectileState = {
  parameters: LaunchParameters;
  trajectory: Point2D[];
};

export type ProjectileViewCallbacks = {
  onSpeedChange: (initialSpeed: number) => void;
  onAngleChange: (launchAngleDegrees: number) => void;
  onHeightChange: (initialHeight: number) => void;
  onReset: () => void;
};

export type ProjectileViewData = {
  state: ProjectileState;
  callbacks: ProjectileViewCallbacks;
};