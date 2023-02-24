export const makeapicall = async (url, options = {}) => {
    const headers = { "content-type": "application/json" }
    options.headers = { ...headers }
    const fetchdata = await fetch(url, options)
    if (fetchdata.ok) {

        return await fetchdata.json()
    }
    else {
        throw new Error('Error');
    }

}