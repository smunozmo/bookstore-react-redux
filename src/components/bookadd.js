import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

function ButtonAdd() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Happy');

  const submitBookToStore = async (element) => {
    element.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      genre,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setGenre('Happy');
  };

  const onTitleChanged = (element) => setTitle(element.target.value);
  const onAuthorChange = (element) => setAuthor(element.target.value);
  const onGenreChanged = (element) => setGenre(element.target.value);

  return (
    <div className="container mx-auto mb-5">
      <div className="container mx-auto align-middle">
        <form onSubmit={submitBookToStore} className="mx-auto">
          ADD NEW BOOK
          <div className="row">
            <div className="col-sm-4">
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={title}
                onChange={onTitleChanged}
                placeholder="Title"
                required
              />
            </div>
            <div className="col-sm-4">
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                value={author}
                onChange={onAuthorChange}
                placeholder="Author"
                required
              />
            </div>
            <div className="col-sm-2">
              <select name="genre" className="form-select" id="genre" value={genre} onChange={onGenreChanged}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Boring">Boring</option>
                <option value="Interesting">Interesting</option>
              </select>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary buttonAdd">ADD BOOK</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ButtonAdd;
