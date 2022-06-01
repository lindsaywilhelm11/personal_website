import Nav from './Nav';
import Footer from './Footer';


function Home() {
  return (
    <div>
      <Nav />
      <section className="home-intro">
      <h1>hi, i'm lindsay</h1>
      <h3>i'm a full-stack developer based in canada</h3>
      <h5>welcome to my website</h5>
      </section>
      <Footer />
    </div>
  )
}

export default Home