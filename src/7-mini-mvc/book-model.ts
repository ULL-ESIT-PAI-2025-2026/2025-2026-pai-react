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

export class Book {
  private title: string;
  private author: string;
  private price: number;
  constructor(
     title: string = 'The Great Gatsby',
     author: string = 'F. Scott Fitzgerald',
     price: number = 29.99
  ) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getPrice(): number {
    return this.price;
  }
}