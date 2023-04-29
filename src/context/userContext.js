/**
 * permite compartir funciones con todos los componentes que contenga
 * createContext crea el contexto, useContext lo utiliza
 * UserProvider componente que contendrá un estado que el resto de componentes van a poder consumir
 * getUsers retornará las publicaciones del backend a través de axios y almacenarlas en la const users
 * res.data retorna los datos y los almacena en la función setUsers
 * userContext.Provider selecciona las funciones a compartir con los hijos
 *  */

/* El Hook useState es un Hook que permite añadir el estado de React a un componente funcional y sirve para manejar el estado de los elementos de un componente de manera que permite actualizar el estado de una variable y solo renderizar el tag html donde se lo use, de manera que cuando el estado cambia el componente responde volviendo a renderizar solo la parte del código afectada por la variable de estado mantenida por el hook useState. */

import { useState, createContext, useContext, useEffect } from "react";

//**Importa todas las funciones de la Api */
import {
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
    getUserRequest,
    updateUserRequest,
} from "../api/apiUsers";

// contexto de las publicaciones
const userContext = createContext();

export const useUsers = () => {
    try {
        // genera y retorna el contexto
        const context = useContext(userContext);
        return context;
    } catch (error) {
        console.error(error);
    }
};

// Función que permite cargar las publicaciones del backend en la variable users mediante setUsers y la respuesta res.data
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState(null);

    // Función para obtener el nombre de un rol a partir de su ID
    const getRoleName = (roleId) => {
        const role = roles.find((r) => r._id === roleId);
        return role ? role.name : "";
    };

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            // Mapea cada usuario para incluir el nombre del rol
            const usersWithRoleName = res.data.map((user) => {
                return { ...user, roleName: getRoleName(user.role) };
            });
            setUsers(usersWithRoleName);
        } catch (error) {
            console.error("Error getting users:", error);
            setError(error);
        }
    };

    const createUser = async (user) => {
        try {
            const res = await createUserRequest(user);
            setUsers([...users, res.data]);
        } catch (error) {
            console.error("Error creating user:", error);
            setError(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await deleteUserRequest(id);
            if (res.status === 204) {
                setUsers(users.filter((user) => user._id !== id));
            }
        } catch (error) {
            console.error(`Error deleting user ${id}:`, error);
            setError(error);
        }
    };

    const getUser = async (id) => {
        try {
            const res = await getUserRequest(id);
            return res.data;
        } catch (error) {
            console.error(`Error getting user ${id}:`, error);
            setError(error);
        }
    };

    const updateUser = async (id, user) => {
        try {
            const res = await updateUserRequest(id, user);
            setUsers(users.map((u) => (u._id === id ? res.data : u)));
        } catch (error) {
            console.error("Error updating user:", error);
            setError(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <userContext.Provider
            value={{
                users,
                createUser,
                deleteUser,
                getUser,
                updateUser,
            }}
        >
            {children}
        </userContext.Provider>
    );
};