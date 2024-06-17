import React from "react";
import "./footer.css";
export default function page(){
    return(
        <div className="main-footer">
            <div className="sub-footer-one">
                <div className="footer-logo">
                    <img src="/Logo.svg"/>
                </div>
                <div className="footer-line">
                
                </div>
                <div className="footer-para">
                   <p>Welcome to SKY FINANCIAL, where we prioritize protecting your future above all else. Our About Us section offers a glimpse into who we are, our values, and why we&aposre dedicated to ensuring your peace of mind. Meet our experienced team, learn about our history, and discover how our personalized approach to life insurance can safeguard your loved ones&apos financial security. At [Agency Name], we&aposre here to guide you toward a future of confidence and security.</p>   
                </div>
                <div className="footer-line">

                </div>
                <div className="contact-details">
                    <div  className="icon">
                        <img src="/footerphone.svg"/>
                        <p>586-907-8700</p>
                    </div>
                    <div className="icon">
                        <img src="/footermail.svg"/>
                        <p>sam@sky.financial</p>
                    </div>
                    <div className="icon">
                        <img src="/footermap.svg"/>
                        <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
                    </div>
                </div>
            </div>
            <div className="subfooter-two">
                <div className="footer-rights">
                   <p>© 2024 SKY FINANCIAL, New York, NY. All Rights Reserved.</p>
                 </div>
                <div   className="footer-terms">
                    <p>Terms of use</p>
                    <p>Privacy & other policies</p>
                </div>
            </div>
        </div>
    );
}