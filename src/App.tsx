import { useState } from 'react';
import type { ReactElement } from 'react';
import { examples } from './examples.ts';
import type { ExampleName } from './examples.ts';
import './App.css';

function App(): ReactElement {
  const [selectedExample, setSelectedExample] = useState<ExampleName>('home');

  const selectedExampleData = examples.find(
    (example) => example.id === selectedExample,
  );

  if (selectedExampleData !== undefined) {
    const SelectedComponent = selectedExampleData.component;

    return (
      <main className="page">
        <button
          className="back-button"
          onClick={(): void => setSelectedExample('home')}
        >
          ← Back to examples
        </button>

        <SelectedComponent />
      </main>
    );
  }

  return (
    <main className="page">
      <section className="hero">
        <h1>React PAI Examples</h1>
        <p>
          A progressive collection of examples from basic components to
          interactive PAI-style applications.
        </p>
      </section>

      <section className="cards">
        {examples.map((example) => (
          <article className="card" key={example.id}>
            <h2>{example.title}</h2>

            <div className="card-actions">
              <button onClick={(): void => setSelectedExample(example.id)}>
                Open
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;