import Axios from 'axios';

async function GetShowLists(userId: number ) {
    let data;
    const token = await localStorage.getItem('token');

    await Axios.get('http://localhost:3333/list/show/' + userId, 
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

export default GetShowLists;
