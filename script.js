document.addEventListener('DOMContentLoaded', function() {
    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sample job data
    const jobs = [
        {
            id: 1,
            title: "Construction Helper",
            company: "BuildRight Construction",
            location: "Chennai, Tamil Nadu",
            salary: "₹500/day",
            type: "construction",
            tags: ["Physical Work", "Daily Wage", "Training Provided"]
        },
        {
            id: 2,
            title: "Farm Worker",
            company: "Green Fields Farm",
            location: "Coimbatore, Tamil Nadu",
            salary: "₹450/day",
            type: "agriculture",
            tags: ["Agriculture", "Seasonal", "Meals Included"]
        },
        {
            id: 3,
            title: "House Cleaning",
            company: "SparkleHome Services",
            location: "Madurai, Tamil Nadu",
            salary: "₹400/day",
            type: "domestic",
            tags: ["Domestic", "Flexible Hours", "Weekly Pay"]
        },
        {
            id: 4,
            title: "Delivery Executive",
            company: "QuickDeliver",
            location: "Salem, Tamil Nadu",
            salary: "₹600/day",
            type: "delivery",
            tags: ["Bike Required", "Flexible", "Incentives"]
        },
        {
            id: 5,
            title: "Mason",
            company: "BuildRight Construction",
            location: "Trichy, Tamil Nadu",
            salary: "₹700/day",
            type: "construction",
            tags: ["Skilled", "Long Term", "Advance Available"]
        },
        {
            id: 6,
            title: "Rice Field Worker",
            company: "Paddy Farms Cooperative",
            location: "Thanjavur, Tamil Nadu",
            salary: "₹420/day",
            type: "agriculture",
            tags: ["Seasonal", "Group Work", "Transport"]
        }
    ];

    // Render jobs
    const jobsGrid = document.getElementById('jobsGrid');

    function renderJobs(filter = 'all') {
        const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.type === filter);

        jobsGrid.innerHTML = filteredJobs.map(job => `
            <div class="job-card" data-type="${job.type}">
                <div class="job-header">
                    <h3 class="job-title">${job.title}</h3>
                    <span class="job-salary">${job.salary}</span>
                </div>
                <p class="job-company">${job.company}</p>
                <p class="job-location">📍 ${job.location}</p>
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-primary job-apply" onclick="applyJob(${job.id})">Apply via SMS</button>
            </div>
        `).join('');
    }

    renderJobs();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderJobs(btn.dataset.filter);
        });
    });

    // Apply job function
    window.applyJob = function(jobId) {
        const job = jobs.find(j => j.id === jobId);
        const smsText = `Hi, I want to apply for ${job.title} at ${job.company}. Location: ${job.location}`;
        alert(`To apply, send this SMS to 55555:\n\n"${smsText}"`);
    };

    // Registration form
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;
        const workType = document.getElementById('workType').value;

        const smsText = `JOB REGISTER Name: ${name}, Phone: ${phone}, Location: ${location}, Work: ${workType}`;

        alert(`Thank you for registering!\n\nTo complete registration, send this SMS to 55555:\n\n"${smsText}"`);

        registerForm.reset();
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
