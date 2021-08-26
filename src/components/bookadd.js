import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function ButtonAdd() {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: 'New title',
      author: 'New Author',
    };
    dispatch(addBook(newBook));
  };

  return (<div className="align-middle text-center"><button type="button" onClick={submitBookToStore}>Add Book</button></div>);
}

export default ButtonAdd;
