document.addEventListener('DOMContentLoaded', function () {
    // Sample data for coaching institutes (replace with your own data)
    const coachingInstitutes = [
        { name: 'Modules For Learning', website: 'https://www.bankexamstoday.com/2016/01/ibps-sbi-books-in-pdf-download-free.html' },
        { name: 'Banking Preparation Books Free', website: 'https://dexteracademy.in/bank-exam-study-material-free-pdf-download/' },
        { name: 'Previous Year papers', website: 'https://bankexamportal.com/papers' },
        { name: 'Previous Year papers', website: 'https://testbook.com/bank-exams/previous-year-question-papers' },
        { name: 'Previous Year papers', website: 'https://www.bankexamstoday.com/2015/09/bank-exams-question-papers.html' },
        { name: 'Video lectures for Banking Awareness Full Playlist', website: 'https://www.youtube.com/watch?v=jFdPg--QRIk&list=PLN7-HyA4mGr-Zf6DEbB7T1xk83NQaRfKh' },
        { name: 'Video lectures Quantitative Aptitude', website: 'https://www.youtube.com/watch?v=5qZOr0ECbMo&list=PLHN0KtJfwuedSCmWAeNyAFV1pYOKsQoxx' },
        { name: 'Video lectures English', website: 'https://www.youtube.com/watch?v=YzP76pgSoz0&list=PL4t_secZTPn7TwIA6N41Nf_V4ArdUufnf' },
        { name: 'Video lectures Maths', website: 'https://www.youtube.com/watch?v=11H3wt-HQP0&list=PL4t_secZTPn5KDE9IgPlJQ6_OE4oQFlTe&index=2' },
        { name: 'Video lectures Resoning', website: 'https://www.youtube.com/watch?v=AApIivxZ_YA&list=PL4t_secZTPn59VVBODG4IuLzLZ21IRwCZ' },
        { name: 'Video lectures Profit & Loss', website: 'https://www.youtube.com/watch?v=HzyahkSE_LM&list=PL4t_secZTPn471JPj9hkVyQ0FnfE2YwJr' },
        { name: 'Video lectures SBI PO Maths ', website: 'https://www.youtube.com/watch?v=BQpyFtoCLOs&list=PL4t_secZTPn5kVJ6GM2ebmurLeikwjabH' },
        // Add more institutes as needed
    ];

    const coachingList = document.getElementById('coachingList');

    coachingInstitutes.forEach(institute => {
        const instituteElement = document.createElement('div');
        instituteElement.className = 'coaching-institute';

        const instituteName = document.createElement('h3');
        instituteName.textContent = institute.name;

        const websiteLink = document.createElement('a');
        websiteLink.href = institute.website;
        websiteLink.textContent = 'Visit Website';

        instituteElement.appendChild(instituteName);
        instituteElement.appendChild(websiteLink);

        coachingList.appendChild(instituteElement);
    });
});
