import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footerrr">
            <div className="footer">
            <div className="footerr">
                <h2>SELHONO</h2>
                <p>It is a long established fact that a reader <br /> will be distracted lookings.</p>
                <div className="foo">
                    <Image 
                        className="logooo"
                        src="/1.png"
                        alt=" image"
                        width={10}
                        height={20}
                    />
                    <Image 
                        className="logooo"
                        src="/2.png"
                        alt=" image"
                        width={10}
                        height={20}
                    />
                    <Image 
                        className="logooo"
                        src="/3.png"
                        alt=" image"
                        width={10}
                        height={20}
                    />
                    <Image 
                        className="logooo"
                        src="/4.png"
                        alt=" image"
                        width={10}
                        height={20}
                    />
                </div>
            </div>

            {/* Center Section */}
            <div className="footer-center">
                <h3>Pages</h3>
                <ul>
                    <li>About Us</li>
                    <li>Our Projects</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="footer-right">
                <h3>Services</h3>
                <ul>
                    <li>Kitchen</li>
                    <li>Living Area</li>
                    <li>Bathroom</li>
                    <li>Dining Hall</li>
                    <li>Bedroom</li>
                </ul>
                </div>
                <div className='center'>
                <h3>Contact</h3>
                <p>55 East Birchwood Ave.<br />Brooklyn, New York 11201</p>
                <p>contact@selhono.com</p>
                <p>(123) 456 - 7890</p>
          
            </div>
            </div>
            <p className="footer-copyright">Copyright © SELHONO</p>
        </footer>
      
    );
};

export default Footer;
