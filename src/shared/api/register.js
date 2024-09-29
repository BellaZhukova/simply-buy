import router from "@/app/router/index.js";

const registerFetch = async (model) => {
    try {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model.value)
        })
        let data = await response.json();
        router.push('/auth')
    }
    catch (e) {
        console.log(e)
    }
};

export default registerFetch;