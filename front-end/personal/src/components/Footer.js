import { Link } from 'react-router-dom';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'


function Footer() {

  const github = <FaGithubSquare className='socials' size={30} />
  const instagram = <FaInstagramSquare className='socials'size={30} />
  const linkedin = <FaLinkedin className='socials' size={30} />
  let currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <div className='footer-container'>
        <section className='socials'> 
        {github}
        {instagram}
        {linkedin}
        
        
        </section>
        <section>
        <p>Copyright &copy; {year} Lindsay Wilhelm. All Rights Reserved</p>
        </section>
    </div>
  )
}

export default Footer