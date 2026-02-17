import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: 'BharatSkills Foundation | Affordable Full Stack Training',
  description:
    'BharatSkills Foundation offers affordable, industry-ready Full Stack Development training at ₹999 per technology for students, beginners, and job seekers.',
  keywords: [
    'Affordable Full Stack Course in India',
    '₹999 Coding Course',
    'MERN Stack Training',
    'Job-Oriented Web Development',
    'Best coaching'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
