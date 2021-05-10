import React, {useState, useEffect, useRef} from 'react';
import './main.scss'
import Navbar from './components/Navbar';
import ContentPage from './components/ContentPage';

import HomeContent from './components/HomeContent';
import ContactContent from './components/ContactContent';
import ProjectsContent from './components/ProjectsContent';

// ignore type issue
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';

interface Icontents {
  id: string;
  content: JSX.Element;
}

function App() {

  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        baseColor: 0x121212,
        lowlightColor: 0xb92b27,
        midtoneColor: 0xb92b27,
        highlightColor: 0x1565c0,
        blurFactor: 0.95,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

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
    <div ref={myRef}>
        <Navbar 
          menuItems={menu} 
          callback={selectContent}
        />
        <ContentPage 
          id={content.id} 
          content={content.content} 
          inProp={inProp}
        />
    </div>
  );
}

export default App;
