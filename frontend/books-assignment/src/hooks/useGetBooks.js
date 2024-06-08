import { useQuery } from "urql"

export default function useGetBooks() {
    const BOOKS_QUERY = `
  {
    books 
    {
    author
    coverPhotoURL
    readingLevel
    title
    }
  }
`
    const [result] = useQuery({
        query: BOOKS_QUERY,
    })
    return result
}
