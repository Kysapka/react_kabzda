import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: "My Components"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>} ) => {
    console.log("USERS")
    return <div>{
            props.users.map((u,i) => <div key={i}>{u}</div>)
        }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("EXAMPLE RENDERED")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    users.push('Alexey' + new Date().getTime())

    return <>
        <button onClick={() => {setCounter(counter +1)}}>+</button>
        <button onClick={addUser}>Add User</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["Rect", "JS", "CSS", "HTML"]);

const newArray = useMemo(() => {
    const newArray = books.filter(b => b.toLocaleLowerCase().indexOf('a') > -1)
    return newArray
}, [books])

    const addBook = () => {
        setBooks([...books, 'Angular' + new Date().getTime()])
    }
    // const memoized1AddBook = useMemo(() => {
    //     return addBook
    // }, [books])

    // const memoized2AddBook = useMemo(() => {
    //     return () => {
    //         setBooks([...books, 'Angular' + new Date().getTime()])
    //     }
    // }, [books])

  const memoizedAddBook = useCallback(() => {
      setBooks([...books, 'Angular' + new Date().getTime()])
  }, [books])

    return <>
        <button onClick={() => {setCounter(counter +1)}}>+</button>
        {counter}
        <Books books={newArray} addBook={memoizedAddBook}/>
    </>
}

const BooksSecret = (props: {books: Array<string>; addBook: () => void} ) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={props.addBook}>Add Book</button>
        {props.books.map((book,i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)