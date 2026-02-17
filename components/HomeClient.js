'use client';

import { useEffect, useState } from 'react';

const testimonials = [
  '“As a beginner, I found coding simple and practical at BharatSkills. The ₹999 pricing changed everything for me.” — Riya Sharma, BCA Student',
  '“Their Full Stack workflow and mock interviews helped me switch from non-tech to web development.” — Aman Verma, Career Switcher',
  '“Great mentors, live projects, and interview prep. I landed an internship in just 4 months.” — Neha Gupta, Job Seeker'
];

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let value = 0;
    const step = Math.ceil(target / 100);
    const timer = setInterval(() => {
      value += step;
      if (value >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(value);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter-card">
      <p className="counter">{count}+</p>
      <p>{label}</p>
    </div>
  );
}

export default function HomeClient() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="soft">
        <div className="container counters">
          <Counter target={2500} label="Students Trained" />
          <Counter target={180} label="Projects Built" />
          <Counter target={1200} label="Career Transitions" />
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <h2>Student Testimonials</h2>
          <div className="card">{testimonials[slide]}</div>
        </div>
      </section>
    </>
  );
}
