import React from 'react';

function SimpleApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#663399', textAlign: 'center' }}>
        Kerlis Aguado - Frontend Developer
      </h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h2>About Me</h2>
        <p>
          Frontend Developer especializada en React.js, TypeScript y tecnologías modernas.
          Con más de 5 años de experiencia creando aplicaciones web escalables y eficientes.
        </p>
        
        <h2>Skills</h2>
        <ul>
          <li>React.js & Next.js</li>
          <li>TypeScript & JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Tailwind CSS</li>
          <li>Node.js & Express</li>
          <li>Git & GitHub</li>
        </ul>
        
        <h2>Experience</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Frontend Developer - Freelance</h3>
          <p><strong>2019 - Present</strong></p>
          <p>Desarrollo de aplicaciones web modernas usando React, TypeScript y herramientas actuales.</p>
        </div>
        
        <h2>Contact</h2>
        <p>Email: kerlis.aguado@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/kerlis-aguado</p>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a 
            href="/CV_ KERLIS AGUADO_FRONTEND_DEVELOPER (1)_1752170801413.pdf" 
            download
            style={{ 
              display: 'inline-block', 
              padding: '10px 20px', 
              backgroundColor: '#663399', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px' 
            }}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default SimpleApp;