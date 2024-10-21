// src/App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';



const firstName = "Yaya"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <div className="App">

      <Container className="mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Image />
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
        <h3 className="mt-4">
          {firstName ? `Bonjour, ${firstName}!` : "Bonjour !"}
        </h3>
        {firstName && (
          <img
            src="https://media.direct.playstation.com/is/image/psdglobal/ps4-flat-and-dualsense?$Hero_Desktop$" // Lien vers l'image de votre choix
            alt="user"
            style={{ width: '150px', borderRadius: '50%', marginTop: '20px' }}
          />
        )}
      </Container>


    </div>
  );
}

export default App;
