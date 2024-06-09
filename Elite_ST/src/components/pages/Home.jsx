import React from 'react'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import { Gallery } from '../Gallery'
import { Header } from '../Header'
import { HeadeTop } from '../HeadeTop'
import { Services } from '../Services'
import { Team } from '../Team'




export const Home = () => {
  return (
    <div>
        <Header/>
        <HeadeTop/>
        <Contact/>
        <Services/>
        <Gallery/>
        <Team/>
        <Footer/>
    </div>
  )
}
