/**
 * permite compartir funciones con todos los componentes que contenga
 * createContext crea el contexto, useContext lo utiliza
 * PostProvider componente que contendrá un estado que el resto de componentes van a poder consumir
 * getPosts retornará las publicaciones del backend a través de axios y almacenarlas en la const posts
 * res.data retorna los datos y los almacena en la función setPosts
 * postContext.Provider selecciona las funciones a compartir con los hijos 
 *  */ 

/* El Hook useState es un Hook que permite añadir el estado de React a un componente funcional y sirve para manejar el estado de los elementos de un componente de manera que permite actualizar el estado de una variable y solo renderizar el tag html donde se lo use, de manera que cuando el estado cambia el componente responde volviendo a renderizar solo la parte del código afectada por la variable de estado mantenida por el hook useState. */

import { 
    useState, 
    createContext, 
    useContext, 
    useEffect
} from "react"

//**Importa todas las funciones de la Api */
import { 
    getPostsRequests, 
    createPostsRequests, 
    deletePostRequests, 
    getPostRequests,
    updatePostRequests,
} from "../api/apiPosts"

// contexto de las publicaciones
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

    const getPosts = async () => {
        try {
           const res = await getPostsRequests()
            setPosts(res.data) 
        } catch (error) {
            console.error(error)
        }
        
    } 

    //setPosts([...posts, res.data]) hace una copia de posts y añade res.data creando y guardando el nuevo post
    const createPost = async (post) => {
        try {
           const res = await createPostsRequests(post)
           setPosts([...posts, res.data]) 
        } catch (error) {
           console.error(error) 
        }
        
    }

    // Función que elimina un post a partir de un ID 
    const deletePost = async (id) => {
        try {
            const res = await deletePostRequests(id)

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
            const res = await getPostRequests(id)
            return res.data  
        } catch (error) {
            console.error(error) 
        }
        
    }

    // Función que actualiza los datos de un post post a partir de un ID y retorna los datos
    const updatePost = async (id, post) => {
        try {
            const res = await updatePostRequests(id, post)
            setPosts(posts.map(post => post._id === id ? res.data : post)) 
        } catch (error) {
            console.error(error)
        }        
    }
 
    /* librería de JavaScript permite ejecutar fragmentos de código según el momento en el que se encuentre el ciclo de vida de nuestro componente    
    cuando cargue el coponente ejecuta...getPosts  */
    useEffect(() => {
        getPosts()
    }, [])  

    // Retorna el contexto con todas las funciones seleccionadas para ser usadas por el resto de páginas que lo soliciten
    return <postContext.Provider value={ {
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
    } }>
        {children }
    </postContext.Provider>
}