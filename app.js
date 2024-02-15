const BASE_URL = 'https://dummyapi.io/data/v1';
const API_KEY = '65ccdc7ae6775c40d10ade57';

async function fetchPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/post`, {
      headers: { 'app-id': API_KEY }
    });
    const posts = response.data.data;
    const postGrid = document.querySelector('.grid');
    posts.forEach(post => {
      const postItem = document.createElement('div');
      postItem.classList.add('border', 'border-gray-300', 'rounded-md', 'overflow-hidden');
      const image = post.image ? `<img src="${post.image}" class="w-full h-40 object-cover" alt="Post Image">` : '';
      const textPreview = post.text.length > 50 ? post.text.substring(0, 50) + '...' : post.text;
      postItem.innerHTML = `
                    ${image}
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">${textPreview}</h3>
                        <p class="text-sm text-gray-500">${post.owner.firstName} ${post.owner.lastName}</p>
                        <a href="details.html?id=${post.id}" class="text-blue-500">View Details</a>
                    </div>
                `;
      postGrid.appendChild(postItem);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

fetchPosts();


// night mode and dark mode
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {


    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');


    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }


    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});






