import Header from "../components/header"; // Ensure correct paths
import Hero from "../components/hero";
import ContentSection from "../components/contentsection"
import Footer from "../components/footer";

const HomePage =() => {
  return (
    <div className="main">
      <div className="main-content">
        <Header />
        <Hero />
        <ContentSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
