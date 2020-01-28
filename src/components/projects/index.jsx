import React, { Component } from 'react'
// import "../../assets/projects"
import './style.css'

export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // In order to add Projects, it is just adding the title and the body. The image must have the same name 
            // as the tag img in the object below. The order will be set by numbers, for example: leilao1.png, leilao2.png.
            projects: [
                {
                    title: "gabrr Leilões", 
                    body: "Project which explores design and animations. It was built only for demonstration porpuses.", 
                    img: "leilao"
                },
                {
                    title: "Software Company",
                    body: "Project which explores design and animations. It was built only for demonstration porpuses.",
                    img: "smg"
                },
                {
                    title: "React App",
                    body: "Project which explores design and animations. It was built only for demonstration porpuses.",
                    img: "api"
                },
                {
                    title: "Vue JS App",
                    body: "Project which explores design and animations. It was built only for demonstration porpuses.",
                    img: "calc"
                }
            ],
            imgs: []
        }

        this.key = 0
    }

    keyGenerator() {
        return this.key += 1
    }

    importAll(r) {
        return r.keys();
      }

    showingImages() {
        let images = document.querySelectorAll("img")
        console.log(images)
    }
       
    componentDidMount() {
        this.showingImages()
        this.setState({
            imgs: this.importAll(require.context('../../assets/projects/'))
        }) 

    }

    render() {

        return (
            <div id="Projects">
                <h1>Projects</h1>
                {
                    this.state.projects.map(p => {
                        return (
                            <React.Fragment>
                                <h2 key={`${this.keyGenerator()}h2`}>{p.title}</h2>
                                <p key={`${this.keyGenerator()}p`}>{p.body}</p>
                                <div className="images-container">
                                    <div className="images-holder">
                                        {
                                            this.state.imgs.map(img => {
                                                // imgs has the image matching of the object in the current loop
                                                // it will render the image if the image name matches the object image key
                                                return img.match( new RegExp(p.img, "gi")) ? <img className="project-img" src={ `${require(`../../assets/projects/${img.match(/[^./][a-zA-Z].*/)}`)}`} alt="img"/> : false
                                                // renders the image using match to take the "./" from the begining of the file name.
                                            })
                                        }
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                <div className="see-more">See more...</div>
            </div>
        )
    }
}
