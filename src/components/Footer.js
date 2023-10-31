import React from "react";
const Footer = () =>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>PreUp</h4>
                        <ul className="list-unstyled">
                            <li>1800-222-333</li>
                            <li>New Delhi, India</li>
                            <li>123 Street no.,Old grain Market,South Delhi</li>
                        </ul>
                    </div>
                    <div className="col">
                        {/* <h4>STUFF</h4> */}
                        {/* <ul className="list-unstyled">
                            <li>Dank meme</li>
                            <li>Old meme</li>
                            <li>Good stuff</li>
                        </ul> */}
                    </div>
                    <div className="col">
                        {/* <h4>new one</h4> */}
                        {/* <ul className="list-unstyled">
                            <li>Dank meme</li>
                            <li>Old meme</li>
                            <li>Good stuff</li>
                        </ul> */}
                    </div>
                </div>
                <hr />
                <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} PreUp | All right reserved | Terms of Services | Privacy
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;