import { v4 as uuidv4 } from 'uuid';
/* eslint-disable */

export default function Loop() {
 const myBooks = [
    {
        id: uuidv4(),
        title: 'Jhon',
        author: 'Foo',
      },
      {
        id: uuidv4(),
        title: 'Jhon 2',
        author: 'Foo',
      },
      {
        id: uuidv4(),
        title: 'Jhon 3',
        author: 'Foo',
      },
 ]

return (
    <div>
        {myBooks.map((book) => {
            console.log(book);
            return (
                <div>{book.id}</div>

            )
        })}
    </div>
)

}