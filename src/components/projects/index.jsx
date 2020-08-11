import React, { useState } from 'react'
// import "../../assets/projects"
import './style.css'
import { useEffect } from 'react'

// In order to add Projects, it is just adding the title and the body. The image must have the same name 
// as the tag img in the object below. The order will be set by numbers, for example: leilao1.png, leilao2.png.
const projects = [
    {
        title: "gabrr Leilões", 
        body: "Project which explores design and animations. It was built only for demonstration porpuses.", 
        img: "leilao",
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
]

export default () =>  {
    const [state, setstate] = useState({
        imgs: [],
    })

    const importAll = r => {
        return r.keys();
    }

    const moveImages = () => {
        const images = document.querySelectorAll('.imgCard')
        setInterval(() => {
            for (let img of images) {
                const index = parseInt(Math.random() * 9)
                img.className = `project-img imgCard moving-img${index}`
            }
        }, 5000)
    }

    useEffect(() => {
        moveImages()
    }, [state.imgs])
       
    useEffect(() => {
        setstate({
            ...state,
            imgs: importAll(require.context('../../assets/projects/'))
        })
    }, [])

    return (
        <div id="Projects">
            <h1>Projects</h1>
            {
                projects.map((p, key) => {
                    return (
                        <React.Fragment key={key}>
                            <h2>{p.title}</h2>
                            <p>{p.body}</p>
                            <div className="images-container">
                                {
                                    state.imgs.map((img, key) => {
                                        // imgs has the image matching of the object in the current loop
                                        // it will render the image if the image name matches the object image key
                                        return img.match( new RegExp(p.img, "gi")) ? <img key={key} className="project-img imgCard" src={ `${require(`../../assets/projects/${img.match(/[^./][a-zA-Z].*/)}`)}`} alt="img"/> : false
                                        // renders the image using match to take the "./" from the begining of the file name.
                                    })
                                }
                            </div>
                        </React.Fragment>
                    )
                })
            }
            <div className="see-more">See more...</div>
        </div>
    )
}
