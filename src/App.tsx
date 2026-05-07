import { useState } from 'react';
import type { ReactElement } from 'react';
import { examples } from './examples-2.ts';
import type { ExampleName } from './examples-2.ts';
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
          A progressive collection of small examples, from basic components to
          interactive PAI-style applications.
        </p>
      </section>

      <section className="cards">
        {examples.map((example) => (
          <article className="card" key={example.id}>
            <h2>{example.title}</h2>
            <p>{example.description}</p>

            <button onClick={(): void => setSelectedExample(example.id)}>
              Open example
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;