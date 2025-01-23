import { eventsQuantity } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { getEvents }