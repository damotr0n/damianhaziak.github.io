import React, {useState} from 'react';
import './main.scss'
import Navbar from './components/Navbar';
import ContentPage from './components/ContentPage';

import HomeContent from './components/HomeContent';
import ContactContent from './components/ContactContent';
import ProjectsContent from './components/ProjectsContent';

interface Icontents {
  id: string;
  content: JSX.Element;
}

function App() {

  let contentList: Array<Icontents> = [
    {
      id: "home",
      content: <HomeContent key={"home"} />
    },
    {
      id: "projects",
      content: <ProjectsContent key={"proj"} />
    },
    {
      id: "contact",
      content: <ContactContent key={"cont"} />
    }
  ];

  var menu = contentList.map(item => item.id);

  const [content, setContent] = useState<Icontents>(contentList[0]);
  const [inProp, setInProp] = useState<boolean>(true);

  function selectContent(select: string) {
    const lookup = contentList.find(item => item.id === select);
    // Throw error if undefined, as Array.find can technically fail to find something
    if (lookup === undefined){
      throw new TypeError('Lookup did not find this type of content');
    } else if (lookup.id === content.id) {
      // do nothing if current page is selected
      return;
    }
    setInProp(false)
    setTimeout(() => {
      setContent(lookup)
      setInProp(true)
    }, 250)
  }

  return (
    <>
        <Navbar 
          menuItems={menu} 
          callback={selectContent}
        />
        <ContentPage 
          id={content.id} 
          content={content.content} 
          inProp={inProp}
        />
    </>
  );
}

export default App;
