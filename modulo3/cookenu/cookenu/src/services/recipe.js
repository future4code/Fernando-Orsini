import axios from "axios";
import { BASE_URL } from "../constants/urls";

const createRecipe = (body, clear, setIsLoading ) => {
    setIsLoading(true)  
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Autorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert(res.data.message)
        clear()
        setIsLoading(false)
    })
    .catch((err)=>{
        setIsLoading(false)
        alert(err.response.data.message)
      })
}

export default createRecipe