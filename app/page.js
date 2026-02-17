import Link from 'next/link';
import HomeClient from '@/components/HomeClient';
import Reveal from '@/components/Reveal';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <Reveal>
            <h1>BharatSkills Foundation</h1>
            <p>“My goal is to make technical education affordable. Skills should not be expensive.”</p>
            <p>“Empowering students with industry-ready skills at an affordable cost.”</p>
            <p className="price">FULL STACK DEVELOPMENT – Professional Training Program | ₹999 Per Technology</p>
            <div className="cta-row">
              <Link href="/contact" className="btn primary">Enroll Now</Link>
              <Link href="/courses" className="btn ghost">View Curriculum</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeClient />

      <section>
        <div className="container">
          <h2>Why Choose BharatSkills?</h2>
          <div className="grid four">
            {['Affordable', 'Practical Learning', 'Certification', 'Job Support'].map((item) => (
              <Reveal key={item} className="card"><h3>{item}</h3><p>Focused outcomes for beginners, students, and job seekers.</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Technologies Grid</h2>
          <div className="grid four">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap / Tailwind CSS'].map((tech) => (
              <div key={tech} className="chip">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="container card center">
          <h2>Full Stack Combo Offer</h2>
          <p>Affordable Social Initiative – ₹999 Per Technology</p>
          <Link href="/contact" className="btn primary">Start Learning Today</Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>FAQ</h2>
          <div className="faq">
            <details open><summary>Who can join this program?</summary><p>Beginners, college students, graduates, postgraduates, job seekers, and career switchers.</p></details>
            <details><summary>What is the fee?</summary><p>₹999 per technology as part of our social initiative.</p></details>
            <details><summary>Do you provide certificates?</summary><p>Yes, certification is awarded after assessment and project completion.</p></details>
          </div>
        </div>
      </section>
    </main>
  );
}
