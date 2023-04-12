const { Router } = require('express')
const express = require('express')
const { route } = require('express/lib/application')
const routes = express.Router()
const Contact = require('../models/Contact')
const Detail = require('../models/detail')
const Service = require('../models/Service')
const Slider = require('../models/Slider')
const Gallery = require('../models/Gallery')

routes.get('/', async (req, res) => {
    const details = await Detail.findOne({'_id':"642ea3f5b8970374964744e6"})
    const slides = await Slider.find()
    const services = await Service.find()

    res.render("index", {
        details:details,
        slides:slides,
        services:services,
    })
})

routes.get('/gallery', async (req, res) => {
    const details = await Detail.findOne({'_id':"642ea3f5b8970374964744e6"})
    const gallery = await Gallery.find()
    res.render('gallery', {
        gallery:gallery,
        details:details
    })
})

// Process Contact Form
routes.post('/process-contact-form', async (req, res) => {
    console.log(req.body)
    try{
        const contact = await Contact.create(req.body)
        console.log(contact)
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
})


module.exports = routes