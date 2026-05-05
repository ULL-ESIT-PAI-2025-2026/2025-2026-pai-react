import { ProjectileModel } from './projectile-model.ts';
import { ProjectileView } from './projectile-view.tsx';

export class ProjectileController {
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

  private run(): void {
    this.renderView();
  }

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

  private handleSpeedChange = (initialSpeed: number): void => {
    this.model.setInitialSpeed(initialSpeed);
    this.renderView();
  };

  private handleAngleChange = (launchAngleDegrees: number): void => {
    this.model.setLaunchAngleDegrees(launchAngleDegrees);
    this.renderView();
  };

  private handleHeightChange = (initialHeight: number): void => {
    this.model.setInitialHeight(initialHeight);
    this.renderView();
  };

  private handleReset = (): void => {
    this.model.reset();
    this.renderView();
  };
}