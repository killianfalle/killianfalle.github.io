import SemicolonText from "../../components/semicolon-text/semicolon-text";
import conversionCow from "../../assets/images/projects/colored/conversioncow-logo.png";
import moneycache from "../../assets/images/projects/colored/moneycache-logo.png";
import learnmate from "../../assets/images/projects/learnmate-logo.png";
import jiffi from "../../assets/images/projects/jiffi-logo.png";
import estiie from "../../assets/images/projects/estiie-logo.png";
import protrainer from "../../assets/images/projects/colored/protrainer-logo.png";

const projects = [
    {
        title: "Learnmate",
        url: "https://learnmate.com.au/",
        description: "Learnmate is a trusted community marketplace comprising hundreds of trusted quality tutors and coaches looking to leverage their personal experience",
        backgroundColor: "#235a6f",
        logo: learnmate,
        className: "p-4 2md:p-20"
    },
    {
        title: "Jiffi Webhelp",
        url: "https://jiffiwebhelp.com/",
        description: "We started out in 2015 as a business development consultancy which lead to us building a lot of api integrations & plugins to help businesses streamline their processes.",
        backgroundColor: "#fe7138",
        logo: jiffi,
        className: 'p-8 2md:p-4 2md:-ml-4'
    },
    {
        title: "Estiie",
        url: "https://estiie.com/",
        description: "Estiie is a two-sided marketplace exclusively for the Building and Construction industry.",
        backgroundColor: "#0a7cbd",
        logo: estiie,
        className: 'p-3 2md:p-20'
    },
    {
        title: "Moneycache POS",
        url: "https://money-cache.org/",
        description: "A key feature of MoneyCache is its connectivity. Update your inventory and track your sales anytime, anywhere.",
        backgroundColor: "#fff",
        logo: moneycache,
        className: "p-3 2md:p-16 text-black"
    },
    {
        title: "Protrainer Live",
        url: "https://protrainerlive.com/",
        description: "Pro Trainer Live is the fitness company that gets you fit the way you want it.",
        backgroundColor: "#ae1619",
        logo: protrainer,
        className: "p-3 2md:p-16"
    },
    {
        title: "ConversionCow",
        url: "https://www.conversioncow.com/",
        description: "ConversionCow is a website plugin that displays social proofs & call-to-actions to help you build trust faster and get leads quicker!",
        backgroundColor: "#28265B",
        logo: conversionCow,
        className: "p-6 2md:p-2"
    },
]


function Projects() {
    const redirectToSocial = (url) => window.open(url, '_blank');

    return (
        <div className="section-container centered">
            <div className="section-title">
                <SemicolonText text="Projects"/>
            </div>

            <p className="section-subtitle text-center mt-2 mb-4">This are the few projects that I've worked on.</p>
            <div className="section-content flex justify-center items-center">
                <div className="projects-content">
                    {projects.map((project, index) => {
                        return (
                            <div key={index}
                                className="project-item"
                                style={{backgroundColor: project.backgroundColor}}
                                onClick={() => redirectToSocial(project.url)}>
                                <p className={`project-description ${project.backgroundColor === "#fff" ? "text-black" : "text-white"}`}>{project.description}</p>
                                <img className={`project-logo ${project.className}`} src={project.logo} alt={project.title}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
  
export default Projects;