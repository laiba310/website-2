import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Let make your <br /> home beautiful together</h1>
        <p>There are many variations <br /> of the passages of lorem Ipsum available the majority.</p>
        <Link href="/your-target-page">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

