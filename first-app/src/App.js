import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Numbers from './components/numbers'

import styled from 'styled-components'

function createAlert(){
  alert('hello, you clicked me');
}

function ShowMessage(props) {
  if(props.toShow) {
    return <h2>My message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
}

const pStyle = {
  fontSize: '2em',
  color: 'red'
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`;

function App() {
  return (
    <div className="App">
      <Numbers/>
      {/* <Header info="This is my HEADER message"/>
      <p style={pStyle}>main content</p>
      <Paragraph>New styled</Paragraph>
      <Footer trademark="page by neknu" 
      myAlert={createAlert}/> */}
      {/* <ShowMessage toShow={false}/> */} 
    </div>
  );
}

export default App;
