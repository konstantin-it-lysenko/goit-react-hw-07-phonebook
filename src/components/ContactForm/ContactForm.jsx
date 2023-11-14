import { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledFormBox } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleContactSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
    console.log('Form', this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledFormBox
        onSubmit={this.handleContactSubmit}
        component="form"
        autoComplete="off"
      >
        <TextField
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />

        <TextField
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          label="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 300,
            height: 50,
          }}
        >
          Add contact
        </Button>
      </StyledFormBox>
    );
  }
}
export default ContactForm;