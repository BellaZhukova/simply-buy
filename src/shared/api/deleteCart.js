const deleteCartFetch = async (product) => {
    let token = localStorage.getItem('token')
    let response = await fetch(`${import.meta.env.VITE_API_URL}/cart/${product}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    let data = response.json();
    console.log(data)
}

export default deleteCartFetch;