import React from "react";

function Footer() {

    return (
        <div>
              {/* <!-- Footer Start --> */}
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="social-links">
                                <a href="https://www.freewebsitecode.com/" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.facebook.com/freewebsitecode/" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.freewebsitecode.com/" className="instagram"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos" className="google-plus"><i className="fa fa-youtube"></i></a>
                                <a href="https://www.freewebsitecode.com/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    Copyright &copy; 2022.  <a href="www.facebook.com">The wAY oUT</a> Inc. All right reserved
                </div>
            </div>
        </footer>
        {/* <!-- Footer end --> */}
        </div>
    )
};

export default Footer;