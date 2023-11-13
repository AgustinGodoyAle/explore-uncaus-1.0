import React from "react";

import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Accordion from '../components/Accordion';
import Badge from '../components/Badge'
import Button from '../components/Button'
import Card1 from '../components/Card1'
import CardEdificios from '../components/CardEdificios'
import Card3 from '../components/Card3'
import Footer from '../components/Footer'
import Avatar from '../components/Avatar'
import TextSearch from '../components/TextSearch'

import {Input} from "@nextui-org/react";

function App2() {
  return (
    <>
     <Navbar />
      
      <h1>Mi aplicación</h1>
     
      <Dropdown/>
      <Accordion/>
      <Badge/>
      <Button/>
      <Card1/>
      <CardEdificios/>
      <Card3/>

      <section className="mt-8">
      <Avatar/>
      </section>

      <section className="mt-8">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input color="secondary" type="email" label="Email" />
      <Input  color="secondary" type="email" label="Email" placeholder="Enter your email" />
      </div>
      </section>

      <TextSearch/>
      <Footer/>
    </>
  );
}

export default App2;
