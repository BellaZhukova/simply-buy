const getOrderFetch = async (order) => {
    let token = localStorage.getItem('token')
    let response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    let data = await response.json();
    order.value = data.data;
    console.log(data);
}

export default getOrderFetch;