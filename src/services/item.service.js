
export const itemService = {
    query
}

async function query(filterBy = {}) {
    const itemsJson = await fetch('./src/data/data.json')
    let items = await itemsJson.json()
    if (filterBy.id) items.items = items.items.filter(item => item.categories.includes(filterBy.id))
    return items
}