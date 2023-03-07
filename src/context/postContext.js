import { 
    useState, 
    createContext, 
    useContext
} from "react"

const postContext = createContext()

export const usePosts = () => {
    try {
        // genera y retorna el contexto
        const context =  useContext(postContext)
        return context
    } catch (error) {
        console.error(error)
    }
    
}

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    return <postContext.Provider value={ {
        posts
    }}>
        {children }
    </postContext.Provider>
}