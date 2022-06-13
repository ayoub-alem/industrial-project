import axios from 'axios';
import url from './urls';

const getBacs = async () => await axios.get(url + 'bacs');
export default getBacs;
