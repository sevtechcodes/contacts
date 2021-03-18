import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class CreateContact extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
    this.onChangeContactType = this.onChangeContactType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      phone: '',
      type: ''
    }
  }

  onChangeContactName(e) {
    this.setState({name: e.target.value})
  }

  onChangeContactEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeContactPhone(e) {
    this.setState({phone: e.target.value})
  }
  onChangeContactType(e) {
    this.setState({type: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const contactObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      type: this.state.type
    };
    axios.post('http://localhost:4000/contacts/create-contact', contactObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', phone: '', type: '' })
  }

  render() {
    return (
    
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeContactName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeContactEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeContactPhone}/>
        </Form.Group>

        <Form.Group controlId="Type">
        <strong>Contact Type :</strong> <br/>
          <label> 
            <input
              type="radio"
              name="type"
              value="personal"
              checked
              onChange={this.onChangeContactType}
            />{" "}Personal{" "}{" "}
          </label>
          <label> 
            <input
              type="radio"
              name="type"
              value="professional"
              onChange={this.onChangeContactType}
            />{" "}Professional
          </label>
        </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Contact
          </Button>
      </Form>
</div>
);
}}