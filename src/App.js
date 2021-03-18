import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import CreateContact from "./components/CreateContact.js";
import EditContact from "./components/EditContacts.js";
import ListContacts from "./components/ListContacts.js";
import Header from "./components/Header.js";
import "./App.css";

function App() {
  return (<Router>
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Container>
          <Row>
            <Col md={4}>
                <Link to={"/create-contact"} className="nav-link">
                  Create Contact
                </Link>
              
                <Link to={"/edit-contact/:email"} className="nav-link">
                  Edit Contact
                </Link>
      
                <Link to={"/list-contacts"} className="nav-link">
                 List Contacts 
                </Link>
            </Col>

            <Col md={8}>
              <div>
                <Switch>
                  <Route exact path='/'>
                    <CreateContact/>
                  </Route>
                  <Route path="/create-contact" render={CreateContact} />
                  <Route path="/edit-contact/:id" render={EditContact} />
                  <Route path="/list-contacts" render={ListContacts} />

                </Switch>
              </div>
            </Col>
          </Row>
      </Container>
     
      </main>
    </div>
  </Router>);
}

export default App;