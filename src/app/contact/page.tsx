import contactstyles from "./page.module.css";

export default function Home() {
  return (
    <div className={contactstyles.contactBox}>
      <h1 className="page-title">Contact</h1>
      <p>Is there anything you could use my help with? Feel free contact me!</p>
      <form id={contactstyles.contactForm}>
          <div className={contactstyles.topRow}>
              <div>
                  <label htmlFor="name">Name</label>
                  <input className={contactstyles.topRow} type="text" id="name" name="name" placeholder="Name" required/>
              </div>
              <div>
                  <label htmlFor="name">Email</label>
                  <input className={contactstyles.topRow} type="email" id="email" name="email" placeholder="Email" required/>
              </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea id={contactstyles.message} name="message" placeholder="Message"></textarea>
          <input id="contact-submit" type="submit"/>
      </form>
    </div>
  );
}
