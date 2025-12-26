// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const weddingForm = document.getElementById('weddingForm');
    
    if (weddingForm) {
        weddingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const weddingDate = document.getElementById('weddingDate').value;
            
            if (!name || !phone || !email || !weddingDate) {
                alert('Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը (*)');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Խնդրում ենք մուտքագրել վավեր էլեկտրոնային հասցե');
                return;
            }
            
            // Phone validation (simple Armenian format)
            const phoneRegex = /^\+374\d{8}$/;
            if (!phoneRegex.test(phone) && !/^0\d{8}$/.test(phone)) {
                alert('Խնդրում ենք մուտքագրել վավեր հեռախոսահամար (+374XXXXXXXX կամ 0XXXXXXXX)');
                return;
            }
            
            // Collect form data
            const formData = {
                name: name,
                phone: phone,
                email: email,
                weddingDate: weddingDate,
                guests: document.getElementById('guests').value,
                message: document.getElementById('message').value,
                newsletter: document.querySelector('input[name="newsletter"]').checked
            };
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Շնորհակալություն։ Ձեր հարցումը հաջողությամբ ուղարկվել է։ Մենք կկապնվենք ձեզ հետ 24 ժամվա ընթացքում։');
            
            // Reset form
            weddingForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
    
    // Gallery image click handler
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Create modal for image viewing
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
            modal.style.zIndex = '2000';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.objectFit = 'contain';
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // Close modal on click
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
    
    // Set minimum date for wedding date input
    const weddingDateInput = document.getElementById('weddingDate');
    if (weddingDateInput) {
        const today = new Date().toISOString().split('T')[0];
        weddingDateInput.min = today;
    }
    
    // Add active class to current nav link
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Audio player enhancement
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
        audioPlayer.addEventListener('play', function() {
            console.log('Հարսանեկան երաժշտությունը նվագում է');
        });
        
        audioPlayer.addEventListener('pause', function() {
            console.log('Երաժշտությունը դադարեցված է');
        });
    }
    
    // Form field focus effects
    const formInputs = document.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});