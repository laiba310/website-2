import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <div>{/** Main content */}
        <Header />
        <div className="bg5">
          <h1>About Us</h1>
        </div>{/* bg5 */}
        <div className="para1">
          <div className="dividerr"></div>
          <div>
            <h1>
              I like an interior that defies labeling. I don&#39;t <br />
              really want someone to walk into a room and <br />
              know that I did it
            </h1>
            <p>BUNNY WILLIAMS</p>
          </div>
          <div className="dividerr"></div>
        </div>

        <div className="para2">
          <div className="p">
            <h1>What We Do</h1>
            <p>
              It is a long established fact that a reader will be <br /> 
              distracted by the readable content of a page <br />
              when looking at its layout. The point of using <br />
              it is that it has a more-or-less normal.
            </p>
            <button>Our Concept</button>
          </div>
          <div>
            <Image 
              className="pic1"
              src="/Rectangle 18.png"
              alt=" image"
              width={500}
              height={718}
            />
          </div>
        </div>

        <div className="para3">
          <div>
            <Image 
              className="pic1"
              src="/Rectangle 19.png"
              alt=" image"
              width={500}
              height={718}
            />
          </div>
          <div className="p">
            <h1>What We Do</h1>
            <p>
              It is a long established fact that a reader will be <br /> 
              distracted by the readable content of a page <br />
              when looking at its layout. The point of using <br />
              it is that it has a more-or-less normal.
            </p>
            <button>Our Concept</button>
          </div>
        </div>{/* para3 */}

        <div className="about">
          <h1 className="hea2">What The People Think <br /> About Us</h1>
          <div className="aboutdes">
            <div className="aboutimg">
              <div className="abboout">
                <Image src="/Image.png" alt="Natasha" width={80} height={80} />
                <div className="abbot">
                  <h1>Natasha</h1>
                  <p>Moscow, Russia</p>
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
            </div>

            <div className="aboutimg">
              <div className="abboout">
                <Image src="/Image (1).png" alt="Raymond Galario" width={80} height={80} />
                <div className="abbot">
                  <h1>Raymond Galario</h1>
                  <p>UK, London</p>
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it.</p>
            </div>

            <div className="aboutimg">
              <div className="abboout">
                <Image src="/Image (2).png" alt="Benny Roll" width={80} height={80} />
                <div className="abbot">
                  <h1>Benny Roll</h1>
                  <p>USA, New York</p>
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.</p>
            </div>
          </div>
        </div>{/* about */}

        <div className="container">
          <h1 className="title">Creative project? Let&#39;s have <br /> a productive talk.</h1>
          <form className="form">
            <div className="te-in">
              <input type="text" className="input" placeholder="Name" required />
              <input type="email" className="input" placeholder="Email" required />
            </div>
            <textarea className="textarea" placeholder="Message" required></textarea>
            <button>Submit</button>
          </form>
        </div>
        
        <Footer />
      </div>{/* main content */}
    </div>
  );
};

export default About;
