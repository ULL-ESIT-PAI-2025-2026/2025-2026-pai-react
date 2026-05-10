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
 * @description controller file for the mini MVC application
 */

import type { ReactElement } from 'react';
import { Book } from './book-model';
import { BookView } from './book-view';

type BookViewProps = {
  title: string;
  author: string;
  price: number;
};

type BookViewComponent = (props: BookViewProps) => ReactElement;

export class BookController {
  private model: Book;
  private view: BookViewComponent;
  private notifyChange: () => void;
  
  constructor(
    model: Book,
    view: BookViewComponent = BookView,
      notifyChange: () => void = () => {}
  ) {
    this.model = model;
    this.view = view;
    this.notifyChange = notifyChange;
  }

  getTitle(): string {
    return this.model.getTitle();
  }

  getAuthor(): string {
    return this.model.getAuthor();
  }

  getPrice(): number {
    return this.model.getPrice();
  }

  updateTitle(title: string): void {
    this.model = new Book(title, this.getAuthor(), this.getPrice());
    this.notifyChange();
  }

  updateAuthor(author: string): void {
    this.model = new Book(this.getTitle(), author, this.getPrice());
    this.notifyChange();
  }

  updatePrice(price: number): void {
    this.model = new Book(this.getTitle(), this.getAuthor(), price);
    this.notifyChange();
  }

  renderView(): ReactElement {
    return this.view({
      title: this.getTitle(),
      author: this.getAuthor(),
      price: this.getPrice()
    });
  }
}