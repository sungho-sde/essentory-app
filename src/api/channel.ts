import axios from 'axios';

interface Channel {
    id: number;
    name: string;
    description: string;
}

export async function getChannel() {
    const response = await axios.get(BACKEND_URL + "/channels");

    const channels = [];
    for (const channel in response.data) {
        const channelObj = {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description
        }
    }
}