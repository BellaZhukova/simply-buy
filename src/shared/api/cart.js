const cartFetch = async (product) => {
    let token = localStorage.getItem('token')
    let response = await fetch(`${import.meta.env.VITE_API_URL}/cart`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    let data = await response.json();
    product.value = data.data;
    console.log(data);
}

export default cartFetch;