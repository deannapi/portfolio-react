import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', messag: '' });
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onBlur={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="8" defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                <button data-testid="btn" type="submit" className="submit-contact">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;