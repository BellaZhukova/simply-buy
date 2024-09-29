const orderFetch = async () => {
    let token = localStorage.getItem('token');
    let response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    let data = await response.json();
    console.log(data);
}

export default orderFetch;