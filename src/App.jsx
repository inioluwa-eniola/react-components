import React from "react"
import Badge from "./Badge"
import Banner from "./Banner/index"
import Card from "./Card/index"
import Testimonial from "./Testimonial/index"
import Tooltip from "./Tooltip/index"
import Toast from "./Toast/index"
import "./index.css"

export default function App () {
    return (
        <>
            {/* Badges */}
            <section className="badges">
                <h1 className="badges-heading">Badges</h1>
                <section className="rectangular-badges">
                    <Badge variant="gray" shape="rectangle">Badge</Badge> 
                    <Badge variant="red" shape="rectangle">Badge</Badge> 
                    <Badge variant="yellow" shape="rectangle">Badge</Badge>
                    <Badge variant="green" shape="rectangle">Badge</Badge> 
                    <Badge variant="blue" shape="rectangle">Badge</Badge>
                    <Badge variant="indigo" shape="rectangle">Badge</Badge> 
                    <Badge variant="purple" shape="rectangle">Badge</Badge>
                    <Badge variant="pink" shape="rectangle">Badge</Badge>
                </section>
                
                <section className="pill-badges">
                    <Badge variant="gray" shape="pill">Badge</Badge> 
                    <Badge variant="red" shape="pill">Badge</Badge> 
                    <Badge variant="yellow" shape="pill">Badge</Badge> 
                    <Badge variant="green" shape="pill">Badge</Badge> 
                    <Badge variant="blue" shape="pill">Badge</Badge>
                    <Badge variant="indigo" shape="pill">Badge</Badge>
                    <Badge variant="purple" shape="pill">Badge</Badge> 
                    <Badge variant="pink" shape="pill">Badge</Badge> 
                </section>
            </section>
            
            {/* Banners */}
            <section className="banners">
                <h1 className="banners-heading">Banners</h1>
                {/* Single-line */}
                <section className="single-line">
                    
                    <Banner variant="success" lineHeight="single-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>

                    <Banner variant="warning" lineHeight="single-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>

                    <Banner variant="error" lineHeight="single-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>

                    <Banner variant="neutral" lineHeight="single-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>
                </section>

                {/* Multi-line */}
                <section className="multi-line">
                    <Banner variant="success" lineHeight="multi-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>

                    <Banner variant="warning" lineHeight="multi-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>

                    <Banner variant="error" lineHeight="multi-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>
                    <Banner variant="neutral" lineHeight="multi-line">
                        <Banner.Container>
                            <Banner.IconAndTitle />
                            <Banner.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                            </Banner.Description>
                        </Banner.Container>
                    </Banner>
                </section>
            </section>
            
            {/* Cards */}
            <section className="card-section">
                <h1 className="card-heading">Card</h1>
                <section className="card-container">
                    <Card>
                        <Card.Upload />
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu mauris, ultricies et ultrices sit amet, vulputate et mi. 
                            Aenean vitae gravida quam, at maximus libero. 
                        </Card.Text>
                    </Card>
                </section>
            </section>

            {/* Testimonials */}
            <section className="testimonial-wrapper">
                <h1 className="heading">Testimonials</h1>
                <section className="testimonial-section">
                    <Testimonial picture desktop>
                        <Testimonial.Image />
                        <Testimonial.Text>
                            <Testimonial.Header />
                            <Testimonial.Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
                                Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                            </Testimonial.Paragraph>
                            <Testimonial.Footer>
                                <span>May Andersons</span>
                                <p>Workcation, CTO</p>
                            </Testimonial.Footer>
                        </Testimonial.Text>
                    </Testimonial>
                </section>
                
                <section className="testimonial-section">
                    <Testimonial picture mobile>
                        <Testimonial.Image />
                        <Testimonial.Text>
                            <Testimonial.Header />
                            <Testimonial.Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
                                Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                            </Testimonial.Paragraph>
                            <Testimonial.Footer>
                                <span>May Andersons</span>
                                <p>Workcation, CTO</p>
                            </Testimonial.Footer>
                        </Testimonial.Text>
                    </Testimonial>
                </section>

                <section className="testimonial-section">
                    <Testimonial desktop>
                        <Testimonial.Image />
                        <Testimonial.Text>
                            <Testimonial.Header />
                            <Testimonial.Paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. 
                                Numquam corrupti in laborum sed rerum et corporis.
                            </Testimonial.Paragraph>
                            <Testimonial.Footer>
                                <span>May Andersons</span>
                                <p>Workcation, CTO</p>
                            </Testimonial.Footer>
                        </Testimonial.Text>
                    </Testimonial>
                </section>

                <section className="testimonial-section">
                    <Testimonial mobile>
                        <Testimonial.Image />
                        <Testimonial.Text>
                            <Testimonial.Header />
                            <Testimonial.Paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. 
                                Numquam corrupti in laborum sed rerum et corporis.
                            </Testimonial.Paragraph>
                            <Testimonial.Footer>
                                <span>May Andersons</span>
                                <p>Workcation, CTO</p>
                            </Testimonial.Footer>
                        </Testimonial.Text>
                    </Testimonial>
                </section>

            </section>

            {/* Tool tips */}
            <section className="tooltips-container">
                <h1 className="heading">Tooltips</h1>
                <section className="tooltips-wrapper">
                    <section className="tooltip">
                        <Tooltip variant="black">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>

                    <section className="tooltip">
                        <Tooltip variant="white">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>

                    <section className="tooltip">
                        <Tooltip variant="darkblue">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>
                    
                    <section className="tooltip">
                        <Tooltip variant="lightblue">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>

                    <section className="tooltip">
                        <Tooltip variant="darkpurple">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>
                    
                    <section className="tooltip">
                        <Tooltip variant="lightpurple">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>
                    
                    <section className="tooltip">
                        <Tooltip variant="darkgreen">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>
                    
                    <section className="tooltip">
                        <Tooltip variant="lightgreen">
                            <Tooltip.Archive />
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur</Tooltip.Text>
                            <Tooltip.Close />
                        </Tooltip>
                    </section>
                </section>
            </section>

            {/* Toast */}
            <section className="toast-container">
                <h1 className="heading">Toast</h1>
                <section className="toast">
                    <Toast variant="success" paragraph="Your work has been saved">
                        <Toast.Content />
                    </Toast>
                    <Toast variant="warning" paragraph="A network error was detected">
                        <Toast.Content />
                    </Toast>
                    <Toast variant="information" paragraph="Please read updated information">
                        <Toast.Content />
                    </Toast>
                    <Toast variant="error" paragraph="Please re-save your work again">
                        <Toast.Content />
                    </Toast>
                </section>
            </section>
        </>
    )
}

