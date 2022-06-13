import axios from "axios";
import url from "./urls";

const getEmp = async ()=> await axios.get(url + "emplacements")
export default getEmp