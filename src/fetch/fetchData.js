async function fetchData(options) {
    let endpoint = 'https://randomuser.me/api'

    if (options?.usersQuantity) {
        endpoint += `?results=${options.usersQuantity}`
    }

    const response = await fetch(endpoint)
    const json =  await response.json()

    return json.results
}

export default fetchData
