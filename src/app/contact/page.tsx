import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image';
const Contact =() => {
    return (
        <div className="main">
            <div className="main-content">
                <Header />
                <div className="bglast"></div>
                <div className="container">
      <h1 className="title">We love meeting new <br />people and helping them.</h1>
      <form className="form">
        <div className="te-in"><input type="text" className="input" placeholder="Name" required />
        <input type="email" className="input" placeholder="Email" required /></div>
        <div className="te-in"><input type="text" className="input" placeholder="Subject" required />
        <input type="email" className="input" placeholder="phone" required /></div>
        <textarea className="textarea" placeholder="Message" required></textarea>
        <button>Send Now</button>
      </form>
    </div>
    <div className="imglast">
    <Image 
                        className="pic5"
                        src="/Map.png"
                        alt=" image"
                        width={1199}
                        height={501}
                    />
    </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;