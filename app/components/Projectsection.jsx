import React from 'react'
import Projectcard from './Projectcard'
import description from './description';

const projectsData = [
    {
        id: 2,
        title: "League Exploratory Data Analysis",
        description: "EDA for Leauge of Legends match data. Utilized Python, Pandas, and Numpy to clean Data as well as preform analysis.",
        image: "./images/projects/bananalysis.png",
        link: "https://calwilee.github.io/LoLEDA/",
    },
    {
        id: 3,
        title: "League Win Model",
        description: "Tuned and Implemented random forrest classfier. Enginered features with Pandas and Numpy operaitons. Preformed Fairness analysis on final model, with final test accuracy of 96%",
        image: "./images/projects/winmodel.png",
        link: "https://calwilee.github.io/LoLML/"
    },
    {
        id: 1,
        title: "Tic Tac Toe App",
        description: "Utilized Html, CSS, JavaScript and React to build a basic tic tac toe app",
        image: "./images/projects/tictactoe.png",
        link: "https://calwilee.github.io/tic-tac-toe/",
    },
    {
        id: 4,
        title: "NLP N-gram Model",
        description: "Used a token based system to generate text from corpus using tri-gram model. Will link to project repo when established!",
        image: "./images/projects/nlp.png",
        link: "#projects",
    },
] 


const Projectsection = () => {
  return (
    <section>
    <h2 className='text-left md:text-center text-3xl mb-5 text-white'>
        Projects
    </h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => 
            <Projectcard 
            key = {project.id} 
            title = {project.title} 
            description = {project.description} 
            imgUrl={project.image}
            link = {project.link}
            /> 
        )}
    </div>
    </section>
   
  );
}

export default Projectsection
