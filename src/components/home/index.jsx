import React, { Component } from 'react'
import avatar from '../../assets/avatar.png'
import './style.css'

export default class Home extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            beanNumbers: "M810.246 584.444C810.246 873.896 1278.98 1422.62 474.469 1329.49C152.244 1329.49 0 813.551 0 524.099C0 234.647 261.215 0 583.44 0C905.665 0 810.246 294.992 810.246 584.444Z"
        }
        this.beanMover = this.beanMover.bind(this)
        this.switcher = 0

    }

    beanMover() {
        const values = [
            ["M810.246", "584.444C810.246", "1003.896", "1278.98", "1422.62", "374.469", "1329.49C152.244", "1329.49", "0", "813.551", "0", "524.099C0", "234.647", "261.215", "0", "583.44", "0C905.665", "0", "810.246", "294.992", "810.246", "584.444Z"],
            ["M1189", "543.099C1189", "832.551", "1279.48", "1422.72", "474.969", "1329.59C152.744", "1329.59", "0.5", "813.65", "0.5", "524.198C0.5", "234.746", "261.715", "0.0991821", "583.94", "0.0991821C906.165", "0.0991821", "1189", "253.647", "1189", "543.099Z"]
        ]

        // this.setState({
        //     beanNumbers: values[0].join(" ")
        // })

        setInterval(() => {
            if(this.switcher === 0) {
                this.setState({
                    beanNumbers: values[1].join(" ")
                })

                document.getElementById("biggest-bean").classList.add("shortening")

                this.switcher = 1
            } else {
                this.setState({
                    beanNumbers: values[0].join(" ")
                })

                document.getElementById("biggest-bean").classList.remove("shortening")

                this.switcher = 0
            }

        }, 1600)

    }

    componentDidMount() {
        this.beanMover()
    }

    render() {
        return (
            <div id="Home">
                <header>
                    Hi, I'm <br/> Gabriel Oiveira
                </header>
                <img id="home-avatar" src={avatar} alt="gabriel profile pic"/>
                <svg id="biggest-bean" width="1346" height="1340" viewBox="0 0 1346 1340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={this.state.beanNumbers} fill="url(#paint0_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="477.075" y1="26.6088" x2="477.075" y2="1074.81" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F70909"/>
                    <stop offset="1" stop-color="#D3550E"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        )
    }
}
