import Link from 'next/link';

export const metadata = { title: 'Courses | BharatSkills Foundation' };

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap (Optional)', 'Tailwind CSS (Optional)'];

export default function CoursesPage() {
  return (
    <main className="container page">
      <h1>Courses – ₹999 Each</h1>
      <div className="grid three">
        {courses.map((course) => (
          <article key={course} className="card">
            <h2>{course}</h2>
            <p><strong>Description:</strong> Industry-focused practical module.</p>
            <p><strong>What You Will Learn:</strong> Concepts + implementation.</p>
            <p><strong>Projects Included:</strong> Real portfolio projects.</p>
            <p><strong>Interview Questions:</strong> Topic-wise practice set.</p>
            <p><strong>Certificate:</strong> Issued after completion.</p>
            <Link href="/contact" className="btn primary">Enroll</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
