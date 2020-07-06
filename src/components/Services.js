import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'


export class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [


                {

                    icon: <FaCocktail />,
                    title: "free cocktails",
                    info: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
                },
                {

                    icon: <FaHiking />,
                    title: "endless hiking",
                    info: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
                },
                {

                    icon: <FaShuttleVan />,
                    title: "free shuttle",
                    info: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
                }, {

                    icon: <FaBeer />,
                    title: "strongest beer",
                    info: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
                }




            ]
        }
    }

    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">

                    {this.state.services.map((item, index) => {

                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services
