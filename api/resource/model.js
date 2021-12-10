const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

async function newResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    const newResource = await db('resources')
        .where('resource_id', resource_id)
        .first()
    return newResource
}

module.exports = {
    getResources,
    newResource
}