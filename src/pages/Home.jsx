import { Box } from '@chakra-ui/react'
import React from 'react'
import About from '../layouts/About'
import Features from '../layouts/Features'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import Testimonial from '../layouts/Testimonial'

const Home = () => {
  return (
    <Box>
        <Header />
        <Hero />
        <Features />
        <About />
        <Testimonial />
        <Footer />
    </Box>
  )
}

export default Home