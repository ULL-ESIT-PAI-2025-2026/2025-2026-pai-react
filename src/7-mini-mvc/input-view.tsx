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
 * @description Input view for the mini MVC application
 */

type InputViewProps = {
  title: string;
  author: string;
  price: number;
  onTitleChange: (title: string) => void;
  onAuthorChange: (author: string) => void;
  onPriceChange: (price: number) => void;
};

export function InputView({
  title,
  author,
  price,
  onTitleChange,
  onAuthorChange,
  onPriceChange
}: InputViewProps) {
  function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const parsedPrice = Number(event.target.value);

    if (!Number.isNaN(parsedPrice)) {
      onPriceChange(parsedPrice);
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
        placeholder="Book title"
      />
      <input
        type="text"
        value={author}
        onChange={(event) => onAuthorChange(event.target.value)}
        placeholder="Author"
      />
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        placeholder="Price"
        min="0"
        step="0.01"
      />
    </form>
  );
}