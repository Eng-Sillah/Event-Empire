import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact-section">
            <section id="contact">
                <div className="container">
                    <div className="section-header">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7 g-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.674337553163!2d-80.21115708560353!3d26.044209503207053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a99f457f3cf7%3A0x92cca70690e98869!2s4000+N+State+Rd+7%2C+Fort+Lauderdale%2C+FL+33301%2C+USA!5e0!3m2!1sen!2sbd!4v1552557532542" width="100%" height="350" frameborder="0" allowfullscreen title="Google Maps"></iframe>
                        </div>
                        <div className="col-md-5 form">
                            <form action="" method="post" className="contactForm">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                                </div>
                                <div><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
