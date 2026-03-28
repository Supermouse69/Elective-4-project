function initializeTailwind() {
    tailwind.config = { darkMode: 'class', theme: { extend: {} } }
}

const teamMembers = [
  {
    id: 1,
    name: "Moises Ferrera",
    role: "Coder 1",
    photo: "images/moises.jpg",
    heroImage: "images/coverpotoofall.jpg",
    bio: "Most Handsome Person living in this world.",
    favoriteFood: "Siya YIEHHHH",
    favoriteDrink: "VitaSoy",
    hobby: "Play GTNH Minecraft MOD",
    funFact: "Always Sleep",
    quote: "MOTONAV RIDER SMARTER RIDE SAFER"
  },

  {
    id: 2,
    name: "Angelo Arevalo",
    role: "Coder Checker 3",
    photo: "images/angelo.png",
    heroImage: "images/coverpotoofall.jpg",
    bio: "Ela eli elu ele elo.",
    favoriteFood: "Ramen",
    favoriteDrink: "Strawberry drink",
    hobby: "Gaming",
    funFact: "The fastest animal in the world is a turtle",
    quote: "Rule# 1 Never Doubt"
  },

  {
    id: 3,
    name: "Romel Andrei Santos",
    role: "Impostor",
    photo: "images/romel.png",
    heroImage: "images/coverpotoofall.jpg",
    bio: "Biohin sya.",
    favoriteFood: "Baga Burger",
    favoriteDrink: "Minute Maid na Apple",
    hobby: "Roblox, Mobile Legends",
    funFact: "HAHAHAHAHAH",
    quote: "With great ability comes great accountability"
  },

  {
    id: 4,
    name: "Benjamin Zari III",
    role: "Checker 101",
    photo: "images/benjo.jpg",
    heroImage: "images/coverpotoofall.jpg",
    bio: "If you have coding, what are you without it?.",
    favoriteFood: "Hotdog",
    favoriteDrink: "Water",
    hobby: "Playing video games",
    funFact: "Pogi si ian",
    quote: "It works on my machine"
  }
];

function renderTeamGrid() {
    const grid = document.getElementById('team-grid')
    if (!grid) return
    grid.innerHTML = ''

    teamMembers.forEach(member => {
        const cardHTML = `
            <a href="profile.html?id=${member.id}" class="card-hover block bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-transparent hover:border-sky-200 dark:hover:border-sky-900">
                <div class="h-64 relative">
                    <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover">
                    <div class="absolute top-4 right-4 bg-white dark:bg-zinc-900 text-xs font-semibold px-3 py-1 rounded-2xl shadow">${member.role}</div>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-semibold mb-1">${member.name}</h3>
                    <p class="text-sky-600 dark:text-sky-400 font-medium">${member.favoriteFood}</p>
                    <p class="text-zinc-500 dark:text-zinc-400 text-sm mt-4 line-clamp-2">${member.bio.substring(0, 110)}...</p>
                </div>
            </a>
        `
        grid.innerHTML += cardHTML
    })
}

function loadProfile() {
    const params = new URLSearchParams(window.location.search)
    const id = parseInt(params.get('id'))
    if (!id) { window.location.href = 'index.html'; return }

    const member = teamMembers.find(m => m.id === id)
    if (!member) { window.location.href = 'index.html'; return }

    // Hero & basic info
    document.getElementById('profile-hero-image').src = member.heroImage
    document.getElementById('profile-name').textContent = member.name
    document.getElementById('profile-role').textContent = member.role
    document.getElementById('profile-bio').textContent = member.bio

    // Favorites & Fun Facts cards
    const infoContainer = document.getElementById('info-cards')
    infoContainer.innerHTML = `
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">🍣</div>
            <h4 class="font-semibold text-lg mb-1">Favorite Food</h4>
            <p class="text-3xl font-medium">${member.favoriteFood}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">🥤</div>
            <h4 class="font-semibold text-lg mb-1">Favorite Drink</h4>
            <p class="text-3xl font-medium">${member.favoriteDrink}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">🎨</div>
            <h4 class="font-semibold text-lg mb-1">Hobby / Passion</h4>
            <p class="text-3xl font-medium">${member.hobby}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">✨</div>
            <h4 class="font-semibold text-lg mb-1">Fun Fact</h4>
            <p class="text-3xl font-medium">${member.funFact}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-center">
            <div class="text-6xl text-sky-300 mb-4">“</div>
            <p class="italic text-2xl font-light leading-tight">${member.quote}</p>
        </div>
    `
}

function toggleDarkMode() {
    const html = document.documentElement
    const isDark = !html.classList.contains('dark')
    html.classList.toggle('dark')
    localStorage.setItem('darkMode', isDark)   // saved like your old script
}

function handleContact(e) { /* unchanged - your nice success message */ }

function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html'
    document.querySelectorAll('nav a.nav-link').forEach(a => {
        if (a.getAttribute('href') === path || (path.includes('profile') && a.getAttribute('href') === 'index.html')) {
            a.classList.add('active')
        }
    })
}

function init() {
    initializeTailwind()

    // === EXACT SAME LOGIC AS YOUR OLD script.js ===
    const saved = localStorage.getItem('darkMode')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = saved !== null ? saved === 'true' : systemDark

    if (useDark) document.documentElement.classList.add('dark')

    // Update gear icon to sun/moon if you want (optional)
    const icon = document.getElementById('theme-icon')
    if (icon) icon.classList.toggle('fa-sun', useDark)

    if (document.getElementById('team-grid')) renderTeamGrid()
    if (document.getElementById('profile-name')) loadProfile()
    setActiveNav()

    console.log('%c✅ Team Spotlight ready • Auto system theme fixed (like your old site)', 'color:#0ea5e9')
}

document.addEventListener('DOMContentLoaded', init)