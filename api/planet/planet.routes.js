const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getPlanet, getPlanets, deletePlanet, updatePlanet} = require('./planet.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getPlanets)
router.get('/:id', getPlanet)
router.put('/:id',  updatePlanet)

// router.put('/:id',  requireAuth, updatePlanet)
router.delete('/:id', deletePlanet)

module.exports = router