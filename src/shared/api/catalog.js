const catalogFetch = async (products) => {
    try {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        let data = await response.json();
        products.value = data.data;
        console.log(data)
        console.log(products.value)
    } catch (e) {
        console.log(e)
    }
}

export default catalogFetch;