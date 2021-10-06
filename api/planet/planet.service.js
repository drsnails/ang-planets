
const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
    populate
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('planet')
        var planets = await collection.find(criteria).toArray()

        return planets
    } catch (err) {
        logger.error('cannot find planets', err)
        throw err
    }
}

async function getById(planetId) {
    try {
        const collection = await dbService.getCollection('planet')
        const planet = await collection.findOne({ '_id': ObjectId(planetId) })
        delete planet.password



        return planet
    } catch (err) {
        logger.error(`while finding planet ${planetId}`, err)
        throw err
    }
}


async function remove(planetId) {
    try {
        const collection = await dbService.getCollection('planet')
        await collection.deleteOne({ '_id': ObjectId(planetId) })

    } catch (err) {
        logger.error(`cannot remove planet ${planetId}`, err)
        throw err
    }
}

async function update(planet) {
    try {
        // peek only updatable fields!
        const planetToSave = {
            _id: ObjectId(planet._id),
            ...planet
        }

        const collection = await dbService.getCollection('planet')
        await collection.updateOne({ '_id': planetToSave._id }, { $set: planetToSave })
        return planetToSave;
    } catch (err) {
        logger.error(`cannot update planet ${planet._id}`, err)
        throw err
    }
}

async function add(planet) {
    try {
        // peek only updatable fields!
        const planetToAdd = {
            planetname: planet.planetname,
            password: planet.password,
            fullname: planet.fullname,
            score: planet.score || 0
        }
        const collection = await dbService.getCollection('planet')
        await collection.insertOne(planetToAdd)
        return planetToAdd
    } catch (err) {
        logger.error('cannot insert planet', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                planetname: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }
    return criteria
}

async function populate() {
    const planets = [
        { name: 'Mercury', mass: 7.17 * 10 ** 21, imgUrl: 'http://news.bbcimg.co.uk/media/images/65904000/jpg/_65904721_mdis_global_enhancedcolor_caloris_orth_hd.jpg' },
        { name: 'Venus', mass: 1.02 * 10 ** 26, imgUrl: 'https://media.nature.com/w400/magazine-assets/d41586-020-03258-5/d41586-020-03258-5_18593332.jpg' },
        { name: 'Earth', mass: 5.97 * 10 ** 24, imgUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGglMjBzcGFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' },
        { name: 'Mars', mass: 1.02 * 10 ** 26, imgUrl: 'https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2014/09/MavenMars-1024x616.jpg' },
        { name: 'Jupiter', mass: 1.9 * 10 ** 27, imgUrl: 'https://live.staticflickr.com/3670/11342207673_0c61609d32_b.jpg' },
        { name: 'Saturn', mass: 1.02 * 10 ** 26, imgUrl: 'https://media1.popsugar-assets.com/files/thumbor/cSSyEURh6RyulOeF2hfVXzwqAik/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/06/13/382/n/47459756/tmp_gfEomt_b2692fcb4e43e97e_nasa-2W-QWAC0mzI-unsplash.jpg' },
        { name: 'Uranus', mass: 9.97 * 10 ** 24, imgUrl: 'https://ktar.com/wp-content/uploads/2020/10/uranus-5559037_6401.jpg' },
        { name: 'Neptune', mass: 1.02 * 10 ** 26, imgUrl: 'https://media.wired.com/photos/5d04045bde1abfe4e801d054/16:9/w_2127,h_1196,c_limit/Science-Neptune-FA-PIA01492_orig.jpg' },
        { name: 'Pluto', mass: 4.29 * 10 ** 23, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCFCn_g6y_F2HPuZ5JOE3imhm1xI5AhsRde_PF02clHBI-ML8HKVGIfYvUbKDRkhV8rQ&usqp=CAU' }
    ]
    const collection = await dbService.getCollection('planet')
    await collection.insertMany(planets)


}
// populate()
