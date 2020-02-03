import React, { Component } from 'react'
import './styles.css'

export default class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <h1>Contact Me</h1>
                <ul className="contact-list">
                    <li><strong>Phone: </strong>(11) 96920 - 8685</li>
                    <li><strong>My Location: </strong>São Paulo, Brazil</li>
                    <li><strong>E-mail: </strong>g.webdevelopr@gmail.com</li>
                </ul>
                <form>
                    <header>Leave a message</header>
                    <input type="text" name="name-input" id="name-input" placeholder="Name"/>
                    <input type="email" name="email-input" id="email-input" placeholder="E-mail"/>
                    <textarea name="message-input" id="message-input" cols="30" rows="10" placeholder="A message" ></textarea>
                    <button className="form-button" type="submit">Send</button>
                </form>
                <div className="social-medias">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <footer>
                    <p className="footer-text">All rights reserved &copy; gabrr. 2020</p>
                </footer>
            </div>
        )
    }
}
