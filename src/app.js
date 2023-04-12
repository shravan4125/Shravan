const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const routes = require('./routes/main')
const Detail = require('./models/detail')
const Slider = require('./models/Slider')
const Service = require('./models/Service')
const Gallery = require('./models/Gallery')

console.log(Service, '//////////')

// static
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static', express.static('public'))
app.use('/', routes)


// View-engine setup
app.set("view engine", "hbs")
app.set("views", "views")
hbs.registerPartials("views/partials")

// DB-connection
mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("db connected")

    // Gallery.create({
    //     url:'/static/images/gallery1.jpg',
    // },
    // {
    //     url:'/static/images/gallery2.jpg',
    // },
    // {
    //     url:'/static/images/gallery3.webp',
    // },
    // {
    //     url:'/static/images/gallery4.png',
    // },
    // {
    //     url:'/staic/images/gallery5.jpg',
    // },
    // {
    //     url:'/staic/images/gallery6.jpg'
    // },
    // )

    // Service.create(
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'we provide courses that helps in learning and placement',
    //         linkText:'https://nodejs.org/en',
    //         link:'check',
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Projects',
    //         description:'we provide courses that helps in learning and placement',
    //         linkText:'https://nodejs.org/en',
    //         link:'learn',
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Projects',
    //         description:'we provide courses that helps in learning and placement',
    //         linkText:'https://nodejs.org/en',
    //         link:'learn',
    //     },
    // )


    // Slider.create(
    //   {
    //     title: 'Learn Java in very easy manner',
    //     subTitle: 'Java is one of the most populer language.',
    //     imageUrl: '/static/images/img1.png',
    //   },
    //   {
    //     title: 'What is Django in python?',
    //     subTitle: 'Django is most famous web framework in python programming.',
    //     imageUrl: '/static/images/img2.avif',
    //   },
    //   {
    //     title: 'What about nodejs?',
    //     subTitle: 'Nodejs is a runtime environment to run the javascript outside the browser.',
    //     imageUrl: '/static/images/bg1.jpg',
    //   },
    // )

    // Detail.create({
    //     brandName: "Info Technical Solution",
    //     brandIconUrl: "https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s50-c-k-c0x00ffffff-no-rj",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/",
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact us",
    //             url: "/contact-us"
    //         },
    //         {
    //             label: "test",
    //             url: "/test"
    //         },
    //     ]
    // })
})

app.listen(process.env.PORT | 7000, () => {
    console.log("Server started!")
})