
const addCartFetch = async (product) => {
    let token = localStorage.getItem('token')
    try {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/cart/${product}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({})
        })
        let data = await response.json();
        console.log(data)
    } catch (e) {
        console.log(e);
    }
}

export default addCartFetch;