import Axios from 'axios';

async function PostCreateList(userId: number, name: string, status: string ) {
    let data;
    const token = await localStorage.getItem('token');

    await Axios.post('http://localhost:3333/list/create', 
        {user_id: userId, name: name, status: status},
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then((res) => {
        data = res.data;
    })
    .catch((error) => {
        console.log(error)
    })

    return data;
}

export default PostCreateList;
