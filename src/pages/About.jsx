import React from "react";

function About() {
    return (
        <section className="section-white">

            <div className="col-md-12 text-center">
                <h2 className="about-title text-5xl">
                    <ins>About Us</ins>
                </h2>
            <div className="hero min-h-screen bg-base-100 shadow-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://cdn.pixabay.com/photo/2013/05/12/09/37/translate-110777_640.jpg" className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">SmartDict Website</h1>
                        <p className="py-6">
                            It is a website that provides language translation services, which could be an online tool or service where human translators offer text translation from one language to another.
                            Alternatively, it could be a website related to presenting information about language translation, with articles, recommendations, or various translation assistance tools. Generally, "Translate" in the context of a website relates to language translation or services related to facilitating communication between different languages.</p>
                        <button className="btn btn-primary">NEXT</button>
                    </div>
                </div>
            </div>
            </div>
            <br />
            <br />

            <div className="col-md-12 text-center">
                <h2 className="about-title text-3xl font-bold">
                    The Teams Project SmartDict
                </h2>
                <br />
                <p className="about-subtitle">Positions and responsibilities of each individual</p>
            </div>
            <br />
            <hr />
            <br />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="about-card shadow-xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/431799366_3576234712617455_1410869206141780594_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvOaDoDLac3SXKRyf9-269p5hOZHT-cc2nmE5kdP5xzc5hh7UDZsKe6q-33m7rKAjb0kV5lnyWFNDK1DddxyZZ&_nc_ohc=LwPS1i1JRMsAX_LhULD&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfCbxS5tlC77nzrUalugncfXI21uehVU4-e3xo4AkYDtfA&oe=6605F699" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h4>Phalat Phonphatsawat</h4>
                        <p className="p-5">UX/UI Designer</p>
                        <hr />
                        <p>Card content here...</p>
                    </div>
                </div>
                <div className="about-card shadow-2xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/411086100_2268912846653119_5725856641135262957_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEdbYnSs-gIHX5_meIrKda-0f6Pxvrn-pjR_o_G-uf6mOV0vR3KkGx7f1iX8wreeRTlirzNN2w9wAWy9EHkJsc7&_nc_ohc=Ib3_3xdO9b8AX9OMbtE&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfCjZl8GG1oxBTMoBgWUQNXAsDByksIDbc1J3t6icwNX7g&oe=6605DCD1" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h4>Siripoom</h4>
                        <p className="p-5">Head</p>
                        <hr />
                        <p>Card content here...</p>
                    </div>
                </div>
                <div className="about-card shadow-xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.15752-9/416242559_345930398501785_8735749436621081379_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-eJ4DcQYJ6groP2NFY-78qnMPySLYOLWqcw_JItg4tYYuSEnokZmzlfKLXvfMrM4N89YCYNqBqy7cjFudx_Sb&_nc_ohc=0rfoTtB8OTQAX-uG4Rw&_nc_ht=scontent.fbkk28-1.fna&oh=03_AdQm1CnN5cLjm13cnhV3IMmEDqZF6ol0JMW5_MUtAMLaqg&oe=6628C96A" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h4>Sumat</h4>
                        <p className="p-5">UX/UI Designer</p>
                        <hr />
                        <p>Card content here...</p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default About;