import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
      id
    }
  }
`

export const ALL_GENRES = gql`
  query {
    allGenres
  }
`

const BOOK_DETAILS = gql`
  fragment BookDetails on Book {
    title
    author {
      name 
    }
    published 
    genres
    id
  }
`

export const FAVORITE_GENRE = gql`
  query{
    booksByFavoriteGenre {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}  
`

export const ALL_BOOKS = gql`
  query {
    allBooks {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}  

`

export const BOOKS_BY_GENRE = gql`
  query filteredBooks($genre:String!) {
    allBooks(genre:$genre) {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}  

`

export const ADD_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(
      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ) {
      title
      published
      genres
    }
  }
`

export const SET_BIRTH = gql`
  mutation setBirth($name: String!, $setBornTo: Int!) {
    editAuthor(
      name: $name,
      setBornTo: $setBornTo
    ) {
      name
      born
    }
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`

export const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}  
`