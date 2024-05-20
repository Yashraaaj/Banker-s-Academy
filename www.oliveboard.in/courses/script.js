document.addEventListener('DOMContentLoaded', function () {
    // Sample data for courses (replace with your own data)
   
        const courses = [
            {
              name: 'Quantitative Aptitude Mastery',
              heading: 'Quantitative Aptitude',
              link: 'http://www.course1.com'
            },
            {
              name: 'Reasoning Skills for Banking Exams',
              heading: 'Reasoning Ability',
              link: 'http://www.course2.com'
            },
            {
              name: 'English Proficiency for Banking Aspirants',
              heading: 'English Language',
              link: 'http://www.course3.com'
            },
            {
              name: 'Banking Awareness and Current Affairs',
              heading: 'General Awareness',
              link: 'http://www.course4.com'
            },
            {
              name: 'Basics of Computer Science for Banking',
              heading: 'Computer Knowledge',
              link: 'http://www.course5.com'
            },
            {
              name: 'Bank Exam Mock Test Series',
              heading: 'Mock Tests and Practice Papers',
              link: 'http://www.course6.com'
            },
            {
              name: 'Financial Literacy and Banking Basics',
              heading: 'Financial and Banking Awareness',
              link: 'http://www.course7.com'
            },
            {
              name: 'Effective Time Management for Bank Exams',
              heading: 'Time Management Strategies',
              link: 'http://www.course8.com'
            },
            {
              name: 'Bank Interview Skills and Preparation',
              heading: 'Interview Preparation',
              link: 'http://www.course9.com'
            },
            // Add more courses as needed
          ];
          
       

    const courseList = document.getElementById('courseList');

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';

        const courseheading = document.createElement('h1');
        courseheading.textContent = course.heading;
        courseheading.alt = course.name;

        const courseName = document.createElement('h3');
        courseName.textContent = course.name;

        const courseLink = document.createElement('a');
        courseLink.href = course.link;
        courseLink.textContent = 'Learn More';

        courseElement.appendChild(courseheading);
        courseElement.appendChild(courseName);
        courseElement.appendChild(courseLink);

        courseList.appendChild(courseElement);
    });
});
