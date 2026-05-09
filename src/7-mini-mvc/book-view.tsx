/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez  
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @since 04 May 2024
 * @description View file for the mini MVC application
 */

export function BookView({ title, author, price }: { title: string; author: string; price: number }) {
  return (
    <div className="book-card">
      <img src="https://via.placeholder.com/150" alt="Book cover" />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}