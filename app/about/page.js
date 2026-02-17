import Reveal from '@/components/Reveal';

export const metadata = { title: 'About | BharatSkills Foundation' };

export default function AboutPage() {
  return (
    <main className="container page">
      <h1>About BharatSkills Foundation</h1>
      <Reveal><p>BharatSkills Foundation focuses on affordable and industry-ready technical education.</p></Reveal>
      <div className="grid two">
        <Reveal className="card"><h2>Mission</h2><p>Make technical education affordable for everyone.</p></Reveal>
        <Reveal className="card"><h2>Vision</h2><p>Empower learners with practical skills and job readiness.</p></Reveal>
      </div>
      <h2>Instructor Profiles</h2>
      <div className="grid three">
        <Reveal className="card"><h3>Bhupendra Singh</h3><p>Full Stack Mentor</p></Reveal>
        <Reveal className="card"><h3>Priyanshu Gautam</h3><p>Backend & API Instructor</p></Reveal>
        <Reveal className="card"><h3>Nisha Rathore</h3><p>Frontend & Career Coach</p></Reveal>
      </div>
      <Reveal className="card"><h2>Social Initiative</h2><p>Affordable Social Initiative – ₹999 Per Technology.</p></Reveal>
    </main>
  );
}
