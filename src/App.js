import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
//import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Photos of web development projects completed during the 2021 UA Coding Bootcamp',
    },
    { name: 'resume',
      description: 'PDF resume and key competencies' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //const [currentCategory, setCurrentCategory] = useState(false);

  const [contactSelected, setContactSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
      
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
            
          </>
        ) : (
          <>
          <ContactForm></ContactForm>
          
          </>
        )}

        
      </main>
    </div>
  );
}

export default App;
