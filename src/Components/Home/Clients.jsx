import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Clients = () => {
    return (
        <div className='clients_main_component'>
            <div className="clients_top_images">
                <img src="https://manasvitechnologies.org/assets/imgs/testimonial/1.jpg" style={{ height: 'auto', width: 'auto' }} alt="" />
                <img src="https://manasvitechnologies.org/assets/imgs/testimonial/2.jpg" style={{ height: '100px', width: 'auto' }} alt="" />
            </div>
            <div className="clients_slider">
                <img src="https://manasvitechnologies.org/assets/imgs/testimonial/1.jpg" style={{ height: '200px', width: 'auto', flex: '0.5' }} alt="" />
                <div className="slider" style={{ width: '800px' }}>
                    <div style={{ width: '100%' }}>
                        <p className="main_slider_content">
                        Trisanco Infotech surpassed all my expectations with their outstanding IT solutions. Their team&apos;s expertise, professionalism, and dedication were evident from day one. They provided innovative solutions that not only met but exceeded our business needs. Communication was seamless, and their commitment to customer satisfaction was truly commendable. I highly recommend Trisanco Infotech to anyone in need of top-notch IT services.
                        </p>
                        <p className="client_name">
                            Abhishek Kumar
                        </p>
                        {/* <p className="client_designation">
                            
                        </p> */}
                    </div>


                    {/* <div style={{ width: '100%'  }}>
                        <p className="main_slider_content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet delectus et, hic tenetur enim nemo quae ea sequi minus ipsam reprehenderit asperiores laudantium, sed necessitatibus maxime illo. Laudantium ex eaque vitae voluptas rerum illo, velit iusto minus! Dignissimos eum pariatur, exercitationem, est eligendi earum optio sint cumque veniam laboriosam obcaecati provident repudiandae velit excepturi nemo aliquam possimus? Et, animi dolorem! Tempore aperiam inventore voluptates aliquid nihil nostrum amet labore dolores soluta praesentium sapiente perspiciatis distinctio iste esse ducimus quisquam architecto sed reiciendis, dignissimos unde officia? Corrupti iusto quae maiores eaque quisquam quibusdam facilis? Consequatur nihil veniam ab et eaque provident ad earum unde dolores illo, temporibus modi voluptatum quasi, ipsa minus illum ipsam labore id! Qui nesciunt quidem eos consequatur earum sunt blanditiis cum facilis ipsum excepturi sapiente tempore deserunt autem sequi, veritatis saepe ducimus. Fuga similique distinctio nisi, nostrum eligendi quo minima nam saepe enim sint expedita consequuntur modi.
                        </p>
                        <p className="client_name">
                            Lorem ipsum.
                        </p>
                        <p className="client_designation">
                            Lorem, ipsum.
                        </p>
                    </div>
                    <div style={{ width: '100%' }}>
                        <p className="main_slider_content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet delectus et, hic tenetur enim nemo quae ea sequi minus ipsam reprehenderit asperiores laudantium, sed necessitatibus maxime illo. Laudantium ex eaque vitae voluptas rerum illo, velit iusto minus! Dignissimos eum pariatur, exercitationem, est eligendi earum optio sint cumque veniam laboriosam obcaecati provident repudiandae velit excepturi nemo aliquam possimus? Et, animi dolorem! Tempore aperiam inventore voluptates aliquid nihil nostrum amet labore dolores soluta praesentium sapiente perspiciatis distinctio iste esse ducimus quisquam architecto sed reiciendis, dignissimos unde officia? Corrupti iusto quae maiores eaque quisquam quibusdam facilis? Consequatur nihil veniam ab et eaque provident ad earum unde dolores illo, temporibus modi voluptatum quasi, ipsa minus illum ipsam labore id! Qui nesciunt quidem eos consequatur earum sunt blanditiis cum facilis ipsum excepturi sapiente tempore deserunt autem sequi, veritatis saepe ducimus. Fuga similique distinctio nisi, nostrum eligendi quo minima nam saepe enim sint expedita consequuntur modi.
                        </p>
                        <p className="client_name">
                            Lorem ipsum.
                        </p>
                        <p className="client_designation">
                            Lorem, ipsum.
                        </p>
                    </div> */}


                </div>

                <img src="https://manasvitechnologies.org/assets/imgs/testimonial/2.jpg" style={{ height: '100px', width: 'auto', flex: '1.5' }} alt="" />
            </div>
            <div className="slide_togglers">
                <div className="toggle_left">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color:'#555'}} />
                </div>
                <div className="toggle_left">
                    <FontAwesomeIcon icon={faArrowRight} style={{color:'#555'}} />
                </div>
            </div>
            <div className="clients_bottom_section">
                <p className="clients_bottom_heading">
                    Delighted to work with amazing clients: A
                    Collaboration That Leads to Success
                </p>
                <div className="client_companies_images">
                    {
                        [0, 0, 0, 0, 0, 0, 0].map((e,i) => <div key={i} style={{ height: '150px', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #e9e9e9', }}><img src='https://manasvitechnologies.org/assets/imgs/brand/vida.png' alt='' /></div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Clients
