import axios from 'axios';

export function getChannel() {
    axios.get(BACKEND_URL + "/channel")
}