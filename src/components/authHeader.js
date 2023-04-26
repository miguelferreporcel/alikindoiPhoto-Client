/* import useAuth from "../hooks/useAuth";
const AuthHeader = () => {
  const { auth } = useAuth();

    try {
        if (auth && auth.accessToken) {
            /* console.log(auth.accessToken); */
            return { "x-access-token": auth.accessToken };
        } else {
            console.log("No token");
            return {};
        }
    } catch (error) {
        console.error(error);
    }
  
};

export default AuthHeader; */