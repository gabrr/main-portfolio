import React, { Component } from 'react'
import "./style.css"

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.openMenu = this.openMenu.bind(this)
    }

    openMenu() {
        const toggler = document.getElementById('toggler')
        const navList = document.getElementById('navbar-links')
        const linkBehind = document.getElementById('link-behind')

        toggler.addEventListener('click', () => {
            toggler.classList.toggle('activated')
            navList.classList.toggle('activated')
        })

        navList.childNodes.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                linkBehind.style.left = `calc(45% + ${e.screenX / 10}px)`
                linkBehind.style.top = `${e.screenY / 10}px`
                console.log(e)
            })
        })

        navList.childNodes.forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                linkBehind.innerHTML = el.innerHTML
            })
        })
    }

    componentDidMount() {
        this.openMenu()
    }

    render() {
        return (
            <nav id="Navbar">
                <div id="logo">gabrr</div>
                <div id="toggler">
                    <div></div>
                    <div></div>
                </div>
                <ul id="navbar-links">
                    <div id="link-behind">Home</div>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
