const planetService = require('./planet.service')
const logger = require('../../services/logger.service')

async function getPlanet(req, res) {
    try {
        const planet = await planetService.getById(req.params.id)
        res.send(planet)
    } catch (err) {
        logger.error('Failed to get planet', err)
        res.status(500).send({ err: 'Failed to get planet' })
    }
}

async function getPlanets(req, res) {
    try {
        console.log('hello from frontend');
        // const filterBy = {
        //     txt: req.query?.txt || '',
        //     minBalance: +req.query?.minBalance || 0
        // }
        let planets = await planetService.query()
        if (!planets.length) {
            await planetService.populate()
            planets = await planetService.query()
        }
        res.send(planets)
    } catch (err) {
        logger.error('Failed to get planets', err)
        res.status(500).send({ err: 'Failed to get planets' })
    }
}

async function deletePlanet(req, res) {
    try {
        await planetService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete planet', err)
        res.status(500).send({ err: 'Failed to delete planet' })
    }
}

async function updatePlanet(req, res) {
    try {
        const planet = req.body
        const savedPlanet = await planetService.update(planet)
        res.send(savedPlanet)
    } catch (err) {
        logger.error('Failed to update planet', err)
        res.status(500).send({ err: 'Failed to update planet' })
    }
}

module.exports = {
    getPlanet,
    getPlanets,
    deletePlanet,
    updatePlanet
}