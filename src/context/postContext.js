import { 
    useState, 
    createContext, 
    useContext,
    useEffect
} from "react"

import {
    getPostsRequest
} from '../api/apiPosts'

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
    const  getPosts = async () => {
        const res = await getPostsRequest()
        setPosts([])
    }

    useEffect(() => {
        getPosts()
      }, [])

    return <postContext.Provider value={ {
        posts,
        getPosts
    }}>
        {children }
    </postContext.Provider>
}