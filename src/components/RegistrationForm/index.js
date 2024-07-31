import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    isFirstNameBlurred: false,
    isLastNameBlurred: false,
  }

  submittedForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        isFormSubmitted: true,
      })
    }
    if (firstName === '') {
      this.setState({
        isFirstNameBlurred: true,
      })
    }
    if (lastName === '') {
      this.setState({
        isLastNameBlurred: true,
      })
    }
  }

  handleBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        isFirstNameBlurred: true,
      })
    } else {
      this.setState({
        isFirstNameBlurred: false,
      })
    }
  }

  handleBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({
        isLastNameBlurred: true,
      })
    } else {
      this.setState({
        isLastNameBlurred: false,
      })
    }
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value, isFirstNameBlurred: false})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value, isLastNameBlurred: false})
  }

  submitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isFormSubmitted: false,
      isFirstNameBlurred: false,
      isLastNameBlurred: false,
    })
  }

  render() {
    const {
      isFormSubmitted,
      firstName,
      lastName,
      isFirstNameBlurred,
      isLastNameBlurred,
    } = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {!isFormSubmitted && (
          <div>
            <form onSubmit={this.submittedForm}>
              <label htmlFor="firstName">FIRST NAME</label>
              <br />
              <input
                type="text"
                placeholder="First name"
                id="firstName"
                value={firstName}
                onBlur={this.handleBlurFirstName}
                onChange={this.changeFirstName}
              />
              <br />
              {isFirstNameBlurred && <p className="heading">Required</p>}
              <label htmlFor="lastName">LAST NAME</label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                id="lastName"
                value={lastName}
                onBlur={this.handleBlurLastName}
                onChange={this.changeLastName}
              />
              <br />
              {isLastNameBlurred && <p className="heading">Required</p>}
              <button type="submit" className="heading button-styling">
                Submit
              </button>
            </form>
          </div>
        )}
        {isFormSubmitted && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-icon"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              onClick={this.submitAnotherResponse}
              className="heading button-styling"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
