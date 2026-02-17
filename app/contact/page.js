export const metadata = { title: 'Contact | BharatSkills Foundation' };

export default function ContactPage() {
  return (
    <main className="container page">
      <h1>Contact Us</h1>
      <div className="grid two">
        <form className="card form">
          <label>Name<input type="text" required /></label>
          <label>Email<input type="email" required /></label>
          <label>Phone<input type="tel" required /></label>
          <label>Message<textarea rows="4" required /></label>
          <button className="btn primary" type="submit">Submit</button>
        </form>
        <div className="card">
          <h2>Contact Information</h2>
          <p>Phone: +91 98765 43210</p>
          <p>Email: support@bharatskills.org</p>
          <p>Location: Jaipur, Rajasthan, India</p>
          <a className="btn" href="https://wa.me/919876543210" target="_blank">WhatsApp</a>
        </div>
      </div>
    </main>
  );
}
