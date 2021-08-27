import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

function ButtonAdd() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Happy');

  const submitBookToStore = async (element) => {
    element.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      genre,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setGenre('Happy');
  };

  const onTitleChanged = (element) => setTitle(element.target.value);
  const onGenreChanged = (element) => setGenre(element.target.value);

  return (
    <div className="container">
      <div className="container mb-5 px-5 align-middle">
        <form onSubmit={submitBookToStore}>
          <p className="newBookTitle">ADD NEW BOOK</p>
          <div className="row">
            <div className="col-sm-8">
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
            <div className="col-sm-2">
              <select name="genre" className="form-select" id="genre" value={genre} onChange={onGenreChanged}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Boring">Boring</option>
                <option value="Interesting">Interesting</option>
              </select>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-info buttonAdd">ADD BOOK</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ButtonAdd;
