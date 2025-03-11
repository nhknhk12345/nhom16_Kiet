document.addEventListener('DOMContentLoaded', () => {
    const memberLinks = document.querySelectorAll('.member-link');

    memberLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const memberPage = link.getAttribute('href');
            loadMemberProfile(memberPage);
        });
    });

    function loadMemberProfile(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('profile-container').innerHTML = html;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
});