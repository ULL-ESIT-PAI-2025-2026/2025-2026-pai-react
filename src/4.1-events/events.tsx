/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @since 01 May 2026
 * @description Example of handling events in React.
 */



/**
 * 
 * @returns 
 */
function Button() {
  function handleHover() {
    console.log('Button hovered!');
  }

  return (
    <button onClick={() => alert('Button clicked!')}
     onMouseOver={handleHover}>
      Click me
    </button>
  );
}

function Input() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input value:', event.target.value);
  }

  return (
    <input type="text" onChange={handleChange} placeholder="Type something..." />
  );
}

export function Events() {
  return (
    <section className="events-card">
      <h1 className="events-title">Event Handling Example</h1>
      <div className="events-section">
        <h2>Click Event</h2>
        <Button />
      </div>
      <div className="events-section">
        <h2>Change Event</h2>
        <Input />
      </div>
    </section>
  );
}
