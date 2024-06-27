import React from 'react'
import Projectcard from './Projectcard'
import description from './description';

const projectsData = [
    {
        id: 2,
        title: "League of Legends Ban Analysis",
        description: "Preformed data analysis on ___ points for with pandas numpy and matplotlib",
        image: "./images/projects/bananalysis.png",
        link: "https://calwilee.github.io/LoLEDA/",
    },
    {
        id: 3,
        title: "League of Legends Win Model",
        description: "Analzyed data from ____ used scikit learn random forrest classifer, data analasa sa   ",
        image: "./images/projects/winmodel.png",
        link: "https://calwilee.github.io/LoLML/"
    },
    {
        id: 1,
        title: "Tic Tac Toe app",
        description: "Utilized Html, CSS, JavaScript and React to build a basic tic tac toe app",
        image: "./images/projects/tictactoe.png",
        link: "https://calwilee.github.io/tic-tac-toe/",
    },
    {
        id: 4,
        title: "Tic Tac Toe App",
        description: "Utilized Html, CSS, JavaScript and React to build a basic tic tac toe app",
        image: "./images/projects/tictactoe.png",
    }
] 


const Projectsection = () => {
  return (
    <section id = 'projects'>
    <h2 className='text-center text-3xl mb-5 text-white'>
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
