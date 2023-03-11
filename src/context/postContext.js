import { 
    useState, 
    createContext, 
    useContext,
    useEffect
} from "react"

import {
    getPostsRequest,
    createPostRequest,
    deletePostRequest,
    getPostRequest,
    updatePostRequest
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

     // Función que elimina un post a partir de un ID 
     const deletePost = async (id) => {
        try {
            const res = await deletePostRequest(id)

            /* Si la respuesta del server con el estado es 204 significa que se eliminó el post 
             * setPosts actualiza el estado y almacenará y mostrará solo los posts que no coinciden con el _id eliminado */
            if (res.status === 204) {
            setPosts(posts.filter((post) => post._id !== id)) 
        }   
        } catch (error) {
            console.error(error)
        }
             
    }

    // Función que obtiene un único post a partir de un ID y retorna los datos
    const getPost = async (id) => {
        try {
            const res = await getPostRequest(id)
            return res.data  
        } catch (error) {
            console.error(error) 
        }
        
    }

    // Función que actualiza los datos de un post post a partir de un ID y retorna los datos
    const updatePost = async (id, post) => {
        try {
            const res = await updatePostRequest(id, post)
            setPosts(posts.map(post => post._id === id ? res.data : post)) 
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
        createPost,
        deletePost,
        getPost,
        updatePost
    }}>
        {children }
    </postContext.Provider>
}