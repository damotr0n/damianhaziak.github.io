import React from 'react';

// TODO: convert to components
function ContactContent() {
    return (
        <>
            <h2 className="main-title">Contact</h2>
            <p className="subtitle">Click on each icon to be sent to that webpage.</p>
            <div className="card-container contact-card-container">

                <a href="mailto:dmnhaziak3@gmail.com" target="_blank">
                    <div className="card-contact">
                        <svg enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m467 61h-422c-24.813 0-45 20.187-45 45v300c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-300c0-24.813-20.187-45-45-45zm-65.19 30-145.81 108.785-145.81-108.785zm-356.81 0h15.021l187.009 139.523c2.661 1.985 5.815 2.977 8.97 2.977s6.309-.992 8.97-2.977l187.009-139.523h15.021c8.265 0 14.989 6.719 14.999 14.982l-225.999 168.796-225.999-168.796c.01-8.263 6.734-14.982 14.999-14.982zm202.024 214.518c2.662 1.988 5.819 2.982 8.976 2.982s6.314-.994 8.976-2.982l157.024-117.28v232.762h-332v-232.762zm-217.024 100.482v-262.575l30 22.407v255.168h-15c-8.271 0-15-6.729-15-15zm437 15h-15v-255.168l30-22.407v262.575c0 8.271-6.729 15-15 15z"/></svg>
                        <h3 className="card-title">Email Me!</h3>
                    </div>
                </a>

            </div>
        </>
    );
}

export default ContactContent;