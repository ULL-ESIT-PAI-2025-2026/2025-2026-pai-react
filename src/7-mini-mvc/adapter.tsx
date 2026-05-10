/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez  
 * @author Sergio de la Barrera García
 * @author Candela García Cruz
 * @since 04 May 2026
 * @description Model file for the mini MVC application
 */


import { BookView } from './book-view';
import { InputView } from './input-view';
import { useState } from 'react';
import { BookController } from './controller';
import { Book } from './book-model';
import './Book.css'
import './adapter.css'


export function BookMVC() {
  const [, forceRender] = useState(0);
  const [controller] = useState(
    () => new BookController(new Book(), BookView, () => forceRender((value) => value + 1))
  );

  return (
    <div className="App" id ="center">
      <h1>Book Store</h1>
      <p> Title    Author     Price </p>
      <InputView
        title={controller.getTitle()}
        author={controller.getAuthor()}
        price={controller.getPrice()}
        onTitleChange={controller.updateTitle.bind(controller)}
        onAuthorChange={controller.updateAuthor.bind(controller)}
        onPriceChange={controller.updatePrice.bind(controller)}
      />
      {controller.renderView()}
    </div>
  );
}

export default BookMVC;