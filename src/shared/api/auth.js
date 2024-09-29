import router from "@/app/router/index.js";

const authFetch = async (model) => {
    try {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model.value)
        })
        let data = await response.json();
        let token = data.data.user_token;
        localStorage.setItem('token', token)
        router.push('/')
    }
    catch (e) {
        console.log(e)
    }
}

export default authFetch;