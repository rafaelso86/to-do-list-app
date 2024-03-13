import Axios from 'axios';

async function PostUpdateStatusList(userId: number, listId: number, status: string ) {
    let dataUpdate;
    const token = await localStorage.getItem('token');

    await Axios.post('http://localhost:3333/list/status-update', 
        {user_id: userId, list_id: listId, status: status},
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then((res) => {
        dataUpdate = res.data;
    })
    .catch((error) => {
        console.log(error)
    })

    return dataUpdate;
}

export default PostUpdateStatusList;
