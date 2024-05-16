const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact.js')
const ContactController = require('../controllers/ContactController.js')

router.post("/create", ContactController.createContact)

router.get('/', ContactController.getAllContacts);

router.get('/id/:_id', ContactController.getContactById);

router.put('/id/:_id', ContactController.updateContact);

router.delete('/id/:_id', ContactController.deleteContact);

module.exports = router

/*
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/id', deleteContact);*/




/*
const ContactController = require('../controllers/ContactController.js')
router.get('/', ContactController.getAll )
router.get('/ssr', ContactController.getAllSSR )
router.get('/id/:_id', ContactController.getByID)
router.put("/markascompleted/:_id", ContactController.updateCompleted)
router.put('/id/:_id', ContactController.updateByName) 
router.delete('/id/:_id', ContactController.deleteTask )

*/