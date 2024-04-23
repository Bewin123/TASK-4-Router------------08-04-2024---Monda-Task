import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/9.jpg';
import image10 from '../assets/images/10.jpg';
import image11 from '../assets/images/11.jpg';
import image12 from '../assets/images/12.jpg';

const CoursesNavigation = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const coursesData = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      description: 'Learn to build modern web applications.',
      category: 'full-stack',
      image: image1
    },
    {
      id: 2,
      name: 'Data Science Fundamentals',
      description: 'Master data analysis and visualization.',
      category: 'data-science',
      image: image2
    },
    {
      id: 3,
      name: 'Cyber Security Essentials',
      description: 'Protect digital assets from cyber threats.',
      category: 'cyber-security',
      image: image3
    },
    {
      id: 4,
      name: 'Career Development Strategies',
      description: 'Advance your career with essential skills.',
      category: 'career',
      image: image4
    },
    {
      id: 5,
      name: 'Web Design Essentials',
      description: 'Learn the fundamentals of web design.',
      category: 'full-stack',
      image: image5
    },
    {
      id: 6,
      name: 'Machine Learning Basics',
      description: 'Introduction to machine learning algorithms.',
      category: 'data-science',
      image: image6
    },
    {
      id: 7,
      name: 'Ethical Hacking Techniques',
      description: 'Explore ethical hacking and cybersecurity.',
      category: 'cyber-security',
      image: image7
    },
    {
      id: 8,
      name: 'Communication Skills Workshop',
      description: 'Improve your interpersonal communication.',
      category: 'career',
      image: image8
    },
    {
      id: 9,
      name: 'React Development Bootcamp',
      description: 'Master front-end development with React.',
      category: 'full-stack',
      image: image9
    },
    {
      id: 10,
      name: 'Python Data Analysis Course',
      description: 'Learn data analysis using Python libraries.',
      category: 'data-science',
      image: image10
    },
    {
      id: 11,
      name: 'Leadership Skills Training',
      description: 'Develop effective leadership qualities.',
      category: 'career',
      image: image11
    },
    {
      id: 12,
      name: 'UI/UX Design Principles',
      description: 'Explore the principles of user interface and user experience design.',
      category: 'full-stack',
      image: image12
    }
  ];

  const filterCourses = category => {
    setCategoryFilter(category);
  };

  return (
    <div className="courses-container">
      <header>
        <img src={image12} alt="Logo" />
        <h1>Online Courses</h1>
        <p>EXPLORE AN EXCITING ARRAY OF ENGAGING COURSES DESIGNED TO IGNITE YOUR PASSION AND ENHANCE YOUR SKILLS TO NEW HEIGHTS!</p>
      </header>

      <nav>
        <a href="#" className="nav-link" onClick={() => filterCourses('all')}>
          All
        </a>
        <a href="#" className="nav-link" onClick={() => filterCourses('full-stack')}>
          Full Stack Development
        </a>
        <a href="#" className="nav-link" onClick={() => filterCourses('data-science')}>
          Data Science
        </a>
        <a href="#" className="nav-link" onClick={() => filterCourses('cyber-security')}>
          Cyber Security
        </a>
        <a href="#" className="nav-link" onClick={() => filterCourses('career')}>
          Career
        </a>
      </nav>

      <section>
        <div className="courses-list">
          {coursesData.map(course => (
            <div
              key={course.id}
              className={`course ${course.category === categoryFilter || categoryFilter === 'all' ? 'visible' : 'hidden'}`}
            >
              <img src={course.image} alt={course.name} />
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesNavigation;






















