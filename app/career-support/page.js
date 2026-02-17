export const metadata = { title: 'Career Support | BharatSkills Foundation' };

export default function CareerSupportPage() {
  return (
    <main className="container page">
      <h1>Career Support</h1>
      <div className="grid two">
        <div className="card"><h2>Resume Building</h2><p>ATS-friendly resume guidance.</p></div>
        <div className="card"><h2>LinkedIn & GitHub Optimization</h2><p>Profile and portfolio enhancement.</p></div>
        <div className="card"><h2>Mock Interviews</h2><p>HR + technical mock rounds.</p></div>
        <div className="card"><h2>MERN Interview Questions</h2><p>Comprehensive preparation set.</p></div>
      </div>
      <div className="card"><h2>Internship & Job Guidance</h2><p>Role mapping and application support.</p></div>
    </main>
  );
}
