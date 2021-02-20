import React, {useState, useEffect} from 'react';
import CardWrapper from './CardWrapper'
import ContactCard from './ContactCard'

interface Icontact {
    href: string;
    svg_path: string;
    view_box: string;
    card_title: string;
}

function ContactContent() {

    const [contacts, setContacts] = useState<JSX.Element[]>()

    useEffect(() => {
        
        fetch('data/contact.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            const projectsList = myJson.map((contact: Icontact) => 
                <ContactCard 
                    key={contact.href}
                    href={contact.href}
                    svg_path={contact.svg_path}
                    view_box={contact.view_box}
                    card_title={contact.card_title}
                />
            );
            setContacts(projectsList)
        });

    }, [])

    return (
        <CardWrapper 
            mainTitle={"Contact"}
            subtitle={"Click on each icon to be sent to that webpage."}
        >
            {contacts}
        </CardWrapper>
    );
}

export default ContactContent;