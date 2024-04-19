import Cookies from "universal-cookie"

const cookies = new Cookies();

const token = cookies.get("jwt_token");

const AuthorizationHeaders = {
    headers:{
        Authorization: `Bearer ${token}`
    }
}

export default AuthorizationHeaders;