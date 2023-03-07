import { 
    useState, 
    createContext, 
    useContext,
    useEffect
} from "react"

import {
    getPostsRequest,
    createPostRequest
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
// Función que permite cargar las publicaciones del backend en la variable posts mediante setPosts y la respuesta res.data
export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([])

    const  getPosts = async () => {
        const res = await getPostsRequest()
        setPosts(res.data)
    }

    //setPosts([...posts, res.data]) hace una copia de posts y añade res.data creando y guardando el nuevo post
    const createPost = async (post) => {
        try {
            const res = await createPostRequest(post)
            setPosts([...posts, res.data]) 
        } catch (error) {
            console.error(error) 
        }
        
    }

    useEffect(() => {
        getPosts()
      }, [])
      
    return <postContext.Provider value={ {
        posts,
        getPosts,
        createPost
    }}>
        {children }
    </postContext.Provider>
}