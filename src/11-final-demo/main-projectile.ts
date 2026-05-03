import { ProjectileController } from './projectile-controller.ts';
import { ProjectileModel } from './projectile-model.ts';
import { ProjectileView } from './projectile-view.tsx';

export function ProjectileMain(): void {
  const rootElement = document.getElementById('projectile-root');

  if (rootElement === null) {
    throw new Error('Root element not found');
  }

  new ProjectileController(
    new ProjectileModel(),
    new ProjectileView(rootElement),
  );
}