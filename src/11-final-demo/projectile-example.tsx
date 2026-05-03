import { useEffect } from 'react';
import type { ReactElement } from 'react';
import { ProjectileMain } from './main-projectile';

export function ProjectileExample(): ReactElement {
  useEffect((): void => {
    ProjectileMain();
  }, []);

  return <div id="projectile-root"></div>;
}