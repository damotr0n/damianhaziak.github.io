import React, {useState} from 'react';
import './main.scss'
import Navbar from './components/Navbar';
import ContentPage from './components/ContentPage';

import HomeContent from './components/HomeContent';
import ContactContent from './components/ContactContent';
import ProjectsContent from './components/ProjectsContent';

function App() {

  let contentList = [
    {
      id: "home",
      content: <HomeContent />
    },
    {
      id: "projects",
      content: <ProjectsContent />
    },
    {
      id: "contact",
      content: <ContactContent />
    }
  ]

  const [content, setContent] = useState(contentList[0]);

  return (
    <>
        <Navbar />
        <ContentPage id={content.id} content={content.content} />
    </>
  );
}

export default App;
