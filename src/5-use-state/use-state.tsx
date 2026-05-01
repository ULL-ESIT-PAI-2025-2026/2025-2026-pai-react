import { useState } from 'react';
import type { ReactElement } from 'react';
import './use-state.css';

export function UseState(): ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <section className="use-state-card">
      <h1 className="use-state-title">useState Example</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-actions">
        <button onClick={(): void => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={(): void => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}