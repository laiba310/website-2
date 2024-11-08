import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image';
const Services = () => {
  return (
    <div>
      <div>{/**main content */}
      <Header />
       <div className="bg6">
        <h1>Services</h1>
       </div>
<div className="ser-p">
<div className='home'>
        <div className="des">
          <h1>Project Plan</h1>
          <p>
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority.
          </p>
          <h3>Read More......</h3>
        </div>
        <div className="des">
          <h1>Interior Work</h1>
          <p>
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority.
          </p>
          <h3>Read More......</h3>
        </div>
        <div className="des">
          <h1>Realization</h1>
          <p>
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority.
          </p>
          <h3>Read More......</h3>
        </div>

      </div>{/*home */}
    <div className="ser-p2">
    
        <div className="dess">
          <h1>2d/3d Art Work</h1>
          <p>
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority.
          </p>
          <h3>Read More......</h3>
        </div>
        <div className="dess">
          <h1>Interior Work</h1>
          <p>
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority.
          </p>
          <h3>Read More......</h3>
        </div>
        <div className="dess">
          <h1>Decoration Work</h1>
          <p>
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority.
          </p>
          <h3>Read More......</h3>
        </div>


    </div>
</div>{/**serp */}

<div className="ser-2">
    <div className="serimg"><Image
          className="logoo"
          src="/Rectangle 21.png"
          alt=" image"
          width={525}
          height={385}
        />  </div>
        <div className="sern">
            <h1>01</h1>
        </div>
    <div className="serp">
        <h1>Concept & Details</h1>
        <p>It is a long established fact  will be distracted. <br />
Lorem Ipsum is simply dummy from text of the <br />
and typesetting indufstry. </p>
    </div>
   
</div>

<div className="ser-2">
<div className="sern">
            <h1>02</h1>
        </div>
    <div className="serp">
        <h1>Idea for Work</h1>
        <p>It is a long established fact  will be distracted. <br />
Lorem Ipsum is simply dummy from text of the <br />
and typesetting indufstry. </p>
    </div>
    <div className="serimg"><Image
          className="logoo"
          src="/Rectangle 22.png"
          alt=" image"
          width={525}
          height={385}
        />  </div>
</div>


<div className="ser-2">
    <div className="serimg"><Image
          className="logoo"
          src="/Rectangle 23.png"
          alt=" image"
          width={525}
          height={385}
        />  </div>
        <div className="sern">
            <h1>03</h1>
        </div>
    <div className="serp">
        <h1>Design</h1>
        <p>It is a long established fact  will be distracted. <br />
Lorem Ipsum is simply dummy from text of the <br />
and typesetting indufstry. </p>
    </div>
   
</div>
<div className="ser-2">
<div className="sern">
            <h1>04</h1>
        </div>
    <div className="serp">
        <h1>Perfection</h1>
        <p>It is a long established fact  will be distracted. <br />
Lorem Ipsum is simply dummy from text of the <br />
and typesetting indufstry. </p>
    </div>
    <div className="serimg"><Image
          className="logoo"
          src="/Rectangle 24.png"
          alt=" image"
          width={525}
          height={385}
        />  </div>
</div>

<div className="bg4">

<div className="bg4-content">
      <h1>Wanna join the interno?</h1>
      <p>TIt is a long established fact  will be distracted..</p>
      <button>Contact With Us</button>
    </div>
</div>
<Footer />
 </div>
  </div>
  );
};

export default Services;   
