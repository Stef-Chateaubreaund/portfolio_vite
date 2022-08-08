import React, { useEffect, useState } from 'react'
import Social from "./Social";
import InfoContainer from "./InfoContainer";
// import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style'


const ProjetosContainer = () => {
    const [itemsApi, setItemsApi] = useState([])

    useEffect(() => {
        let abortController = new AbortController();

        function getGitHubAPI() {
            fetch('https://api.github.com/users/Stef-Chateaubreaund/repos')

                .then(async res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    var data = await res.json()
                    setItemsApi(data)
                })
                .catch(e => console.log(e))
        }

        getGitHubAPI()
        return () => abortController.abort();
    }, [])

    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
During 3 months in a coding bootcamp I was imersed in diverse technologies and created numerous projects with my newly acquired skillset. My projects entailed the three stacks: Python, Mern, and C#.
            </p>
            <a href="#" className="btn">
                Ver Projetos
            </a>
        </section>
    );
};

export default ProjetosContainer;