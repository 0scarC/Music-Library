import { createContext } from 'react'

export var SearchContext = createContext({
    term: '',
    handleSearch: () => {}
})