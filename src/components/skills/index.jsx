import React, { Component } from 'react'
import './style.css'

export default class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skills: [
                "Front-end",
                "Animations",
                "Web Design",
                "JavaScript",
                "Redux",
                "React JS",
                "Vue JS",
                "Mongo DB",
                "REST API",
                "Express JS",
                "Jquery",
                "JSON",
            ]
        }

        this.key = 0
    }

    generateKey() {
        return this.key++
    }

    render() {
        return (
            <div id="Skills">
                <h1>Skills</h1>
                <div className="skills-container">
                    {this.state.skills.map(s => {
                        return <div key={this.generateKey() + "skill"}>{s}</div>
                    })}
                </div>
            </div>
        )
    }
}
