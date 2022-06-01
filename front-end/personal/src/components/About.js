import about_img from '../images/about_img.jpg';
import Nav from './Nav';
import Footer from './Footer';

function About() {

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let age = year - 1997;
  console.log(year);

  return (
    <div>
      <Nav />
        <h1>a little bit about me</h1>
        <hr />
        <section>
        <div className="image_section">
        <img src={about_img} className="about_img" alt="a selfie of lindsay" />
        </div>
        <div>
          <p className='intro-p'><b>i'm a {age} year old graduate of the bachelor of arts program from the university of guelph. i began coding as a hobby in 2020 and since then i have completed the certificate in full-stack web development at york university, completed the lighthouse labs web development bootcamp, and i will be working as a technology and operations associate at rbc.</b></p>
          <p className='tech-stack-p'>Tech Stack: </p>
          <ul className='tech-stack'>
            <li><b>Programming Languages:</b>  JavaScript, Ruby, Python</li>
            <li><b>Mark Up Languages:</b> HTML, CSS</li>
            <li><b>Frameworks and Libraries:</b> ReactJS, Express, Node.js, jQuery, Docker, Ruby on Rails, Bootstrap, SASS</li>
            <li><b>Databases:</b> MySQL, PostgreSQL</li>
            <li><b>Testing:</b> Jest, Storybook, Cypress, Rspec</li>
            <li><b>Cloud Services:</b> GCP, AWS</li>
            <li><b>Version Control:</b> GitHub, GitLab, Bitbucket</li>
          </ul>
        </div>
      </section>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default About