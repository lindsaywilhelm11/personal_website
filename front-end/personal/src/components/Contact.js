import Nav from './Nav';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Nav />
      <header>
        <h1>get in touch</h1>
      </header>
      <section className="col-3">
        <form className='contact-form'>
          <label>first name</label>
          <input type='text' className='form-control'/>
          <label>last name</label>
          <input type='text' className='form-control'/>
          <label>email</label>
          <input type='email' className='form-control'/>
          <label>message</label>
          <textarea placeholder='type your message here' className='form-control'/>
          <button type="submit" className='btn btn-dark' id="contact-btn">send your message</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Contact