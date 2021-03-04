const endpoint = 'https://randomuser.me/api'

async function fetchData() {
    const response = await fetch(endpoint)
    const json =  await response.json()
    return json.results
}

export default fetchData
