import { ProjectileController } from './projectile-controller.ts';
import { ProjectileModel } from './projectile-model.ts';
import { ProjectileView } from './projectile-view.tsx';

export function ProjectileMain(): void {
  new ProjectileController(
    new ProjectileModel(),
    new ProjectileView(),
  );
}