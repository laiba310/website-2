// components/Header.js
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav1'>
                    <Image 
                        className="logo"
                        src="/Vector.png"
                        alt=" image"
                        width={20}
                        height={30}
                    />
            
                <h1 className='hea1'>SELHONO</h1>
                </div>
                <ul className='nav2'>
                <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact us</Link>

                    <li>projects</li>
                    <li>Blog</li>
               
                </ul>

            </nav>
        </header>
    );
};

export default Header;