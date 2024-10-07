import React, { useState, useEffect, useRef } from "react";

import Cards from "./components/Cards";
import QualitiesCards from "./components/QualitiesCards";
import HowToWorks from "./components/HowToWorks";
import Questions from "./components/Questions";
import FooterSocial from "./components/FooterSocial";
import Navbar from "./components/Navbar";

import header from "./assets/images/header.png"
import foto from "./assets/images/foto.png"
import users from "./assets/images/users.png"
import girl from "./assets/images/girl_meet.png"

import facebook from "./assets/images/facebook.png"
import whatsapp from "./assets/images/whatsapp.png"
import instagram from "./assets/images/instagram.png"
import template from "./assets/images/template.webp"
import { CARDS_SERVICES } from "./constants";
import { Reveal } from "./commons/Reveal";

const Home = () => {
    return <>
        <Navbar />
        <header>
            <div className="container">
                <div className="titles">
                    <Reveal delay={0.25}>
                        <p className="name">Tu contador online</p>
                    </Reveal>
                    <Reveal delay={0.45}>
                        <h1>Soluciones financieras para tu negocio</h1>
                    </Reveal>
                    <Reveal delay={0.65}>
                        <p>Asesoramiento personalizado con profesionales experimentados para darte servicios contables integrales</p>
                    </Reveal>
                    <Reveal delay={0.85}>
                        <button className="call-to-action">
                            <div>
                                asesorate ahora
                                <span></span>
                            </div>
                            <div>
                                sin cargo
                            </div>
                        </button>
                    </Reveal>
                </div>

                <div className="image">
                    <Reveal delay={0.85}>
                        <img src={header} alt=""></img>
                    </Reveal>
                </div>
            </div>
        </header>
        <section className="quelities" id="nosotros">
            <div className="container">
                <QualitiesCards />
            </div>
        </section>

        <section className="talent">
            <div className="container">
                <div className="image">
                    <Reveal delay={0.35}>
                        <img src={foto} alt="" />
                    </Reveal>
                </div>
                <div className="description">

                    <Reveal delay={0.55}>
                        <span>Acerca de nosotros</span>
                    </Reveal>
                    <Reveal delay={0.55}>
                        <h2>La experiencia que te merecés</h2>
                    </Reveal>
                    <Reveal delay={0.75}>
                        <p>En <b>TuContadorOnline</b> creemos que la contabilidad es más que solo números. Es sobre entender tus objetivos y ayudarte a alcanzarlos.</p>
                        <p>
                            Nuestro equipo de expertos se compromete a brindarte servicios contables integrales y personalizados, para que puedas tomar decisiones informadas y alcanzar el éxito.
                        </p>
                    </Reveal>

                    <Reveal delay={0.35}>
                        <div className="contact">
                            <button>leer más</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            <div>
                                <p>Dejanos tu mensaje en:
                                    <br />
                                    +00 0 00 0000 0000</p>

                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

        <section className="services" id="servicios">
            <div className="container">
                <Reveal delay={0.35}>
                    <span>nuestros servicios</span>
                    <h2>Servicios personalizados para tu negocio </h2>
                </Reveal>
                <Cards />
            </div>
        </section>

        <section className="how-works" id="como-trabajamos">
            <div className="container">
                <Reveal delay={0.35}>
                    <div className="title">
                        <span>Como trabajamos</span>
                        <h2>Nuestra metodología de trabajo colaborativo</h2>
                        <p>Nuestro proceso de trabajo está diseñado para ser eficiente, efectivo y transparente. Desde la consulta inicial hasta la entrega final, nos aseguramos de que nuestros clientes estés informados y saisfechos en cada paso del camino.</p>
                    </div>
                </Reveal>
                <HowToWorks />
            </div>
        </section>

        <section className="contact-to-meet" id="hablemos">
            <div className="container">
                <div className="image">
                    <Reveal delay={0.35}>
                        <img src={girl} alt="" />
                    </Reveal>
                </div>

                <Reveal delay={0.35}>
                    <div className="data">
                        <span>Hablemos</span>
                        <h2>Agendá una reunión con nuestros expertos y obten una consulta gratuita y personalizada</h2>
                        <div>
                            <img src={users} alt="" />
                            <button>Consultanos</button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section >

        <section className="clients-feedback">
            <Reveal delay={0.35}>
                <div className="container">
                    <span>Lo que dicen de nosotros</span>
                    <h2>Feedback de nuestros clientes</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis ratione veniam repellendus, enim adipisci distinctio expedita, laudantium alias, inventore delectus dolore quo dolor ducimus officiis magni aliquid corporis rerum?</p>

                    <h3>John Doe</h3>
                </div>
            </Reveal>
        </section >

        <section className="frecuent-questions" id="preguntas-frecuentes">
            <div className="container">
                <span>¿Algunas dudas?</span>
                <h2>Preguntas frecuentes</h2>

                <div className="questions-cards">
                    <Questions />
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="container">
                <FooterSocial />
                <div className="about">
                    <div></div>
                    <div></div>
                    <div>
                        <ul>
                            <h3>Referencias</h3>
                            {
                                CARDS_SERVICES?.map((item, i) => (
                                    <li key={i}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3>Acerca de</h3>
                        <p>TuContadorOnline es un estudio contable especializado en brindar servicios de alta calidad a empresas y particulares. Nuestro equipo de expertos contadores se compromete a ofrecer soluciones personalizadas y efectivas para satisfacer tus necesidades financieras.</p>
                        <div className="social">
                            <a href="" target="_blank">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={whatsapp} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            setLoading(true)
        }, 3000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [])

    return (<> {
        !loading ?
            <div className="loading">
                {/* <img src={template} alt="" /> */}
                <h2>Tu Contador Online</h2>
                <div className="square">
                    <div className="dot"></div>
                </div>
            </div>
            :
            <Home />
    }
    </>
    )
}

export default App;