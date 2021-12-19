import React from "react";
import ContactCard from "./ContactCard";

function App() {

  return (
    
    <div className="contacts">
      
      <ContactCard 

        // we can pass an obj as a single prop since the data isnt always 
        // hardcoded and can come from json file or some other api !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "https://placekitten.com/300/200",
          phone: "(212) 555-1234",
          email: "mr.whiskerson@catnap.meow"
        }}

        // name="Mr. Whiskerson" 
        // imgUrl="https://placekitten.com/300/200" 
        // phone="(212) 555-1234" 
        // email="mr.whiskerson@catnap.meow" 
      />

      <ContactCard 
        name="Fluffy" 
        imgUrl="https://placekitten.com/300/200" 
        phone="(212) 555-2345" 
        email="fluffy@catnap.meow" 
      />
    
      <ContactCard 
        name="Destroyer" 
        imgUrl="https://placekitten.com/300/200" 
        phone="(212) 555-3456" 
        email="destroyer@catnap.meow" 
      />

      <ContactCard 
        name="Felix" 
        imgUrl="https://placekitten.com/300/200" 
        phone="(212) 555-4567" 
        email="Felixr@catnap.meow" 
      />

    {/*
      <div className="contact-card">
        <img src="https://placekitten.com/300/200"/>
        <h3>Mr. Whiskerson</h3>
        <p>Phone: (212) 555-1234</p>
        <p>Email: mr.whiskerson@catnap.meow</p>
      </div> 

      <div className="contact-card">
        <img src="https://placekitten.com/300/200"/>
        <h3>Fluffy</h3>
        <p>Phone: (212) 555-2345</p>
        <p>Email: fluffy@catnap.meow</p>
      </div> 

      <div className="contact-card">
        <img src="https://placekitten.com/300/200"/>
        <h3>Destroyer</h3>
        <p>Phone: (212) 555-3456</p>
        <p>Email: destroyer@catnap.meow</p>
      </div> 

      <div className="contact-card">
        <img src="https://placekitten.com/300/200"/>
        <h3>Felix</h3>
        <p>Phone: (212) 555-4567</p>
        <p>Email: felix@catnap.meow</p>
      </div>
    */}

    </div>
  )
}

export default App;