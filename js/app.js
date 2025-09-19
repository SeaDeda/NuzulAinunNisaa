// Netflix Clone JavaScript
alert('');
class NetflixClone {
	constructor() {
		this.init();
	}

	init() {
		this.setupEventListeners();
		this.initializeCarousels();
		this.loadSampleContent();
		this.setupScrollEffects();
	}

	setupEventListeners() {
		// Mobile navigation toggle
		const navToggle = document.querySelector('.nav-toggle');
		const navList = document.querySelector('.nav-list');
		
		if (navToggle && navList) {
			navToggle.addEventListener('click', () => {
				const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
				navToggle.setAttribute('aria-expanded', !isExpanded);
				navList.classList.toggle('active');
			});
		}

		// Close mobile menu when clicking outside
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.nav') && navList?.classList.contains('active')) {
				navList.classList.remove('active');
				navToggle?.setAttribute('aria-expanded', 'false');
			}
		});

		// Hero CTA form
		const heroForm = document.querySelector('.hero-cta');
		if (heroForm) {
			heroForm.addEventListener('submit', (e) => {
				e.preventDefault();
				const email = heroForm.querySelector('input[type="email"]').value;
				if (email) {
					alert(`Terima kasih! Kami akan menghubungi Anda di ${email}`);
				}
			});
		}

		// Search functionality
		const searchInput = document.querySelector('.search-input');
		if (searchInput) {
			searchInput.addEventListener('input', (e) => {
				this.handleSearch(e.target.value);
			});
		}
	}

	setupScrollEffects() {
		const header = document.querySelector('.site-header');
		
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				header?.classList.add('scrolled');
			} else {
				header?.classList.remove('scrolled');
			}
		});
	}

	initializeCarousels() {
		const carousels = document.querySelectorAll('.row-carousel');
		
		carousels.forEach(carousel => {
			const track = carousel.querySelector('.row-track');
			const prevBtn = carousel.parentElement.querySelector('.row-btn.prev');
			const nextBtn = carousel.parentElement.querySelector('.row-btn.next');
			
			if (track && prevBtn && nextBtn) {
				this.setupCarouselControls(track, prevBtn, nextBtn);
			}
		});
	}

	setupCarouselControls(track, prevBtn, nextBtn) {
		let currentPosition = 0;
		const cardWidth = 200; // Width of each movie card
		const gap = 8; // Gap between cards
		const visibleCards = Math.floor(track.parentElement.offsetWidth / (cardWidth + gap));
		
		const updateButtons = () => {
			prevBtn.disabled = currentPosition === 0;
			nextBtn.disabled = currentPosition >= track.children.length - visibleCards;
		};

		prevBtn.addEventListener('click', () => {
			if (currentPosition > 0) {
				currentPosition--;
				track.style.transform = `translateX(-${currentPosition * (cardWidth + gap)}px)`;
				updateButtons();
			}
		});

		nextBtn.addEventListener('click', () => {
			if (currentPosition < track.children.length - visibleCards) {
				currentPosition++;
				track.style.transform = `translateX(-${currentPosition * (cardWidth + gap)}px)`;
				updateButtons();
			}
		});

		// Initial button state
		updateButtons();

		// Update on window resize
		window.addEventListener('resize', () => {
			const newVisibleCards = Math.floor(track.parentElement.offsetWidth / (cardWidth + gap));
			if (currentPosition >= track.children.length - newVisibleCards) {
				currentPosition = Math.max(0, track.children.length - newVisibleCards);
				track.style.transform = `translateX(-${currentPosition * (cardWidth + gap)}px)`;
			}
			updateButtons();
		});
	}

	loadSampleContent() {
		// Sample movie data for different categories
		const trendingMovies = [
			{
				title: 'Stranger Things',
				year: '2024',
				rating: 'TV-14',
				image: 'assets/1.jpg',
				description: 'Ingat perkataanku walau bulan banyak lubang cantiknya memancari terang kata siapa kau tak sempurna binar matamu merona sungguh kau berharga',
				audio: 'assets/N.mp3'
			},
			{
				title: 'Wednesday',
				year: '2023',
				rating: 'TV-14',
				image: 'assets/2.jpg',
				description: 'Mungkin dalam kamu menjalani dunia banyak hal yang buat kamu minder/insecure dengan diri kamu sendiri, tapi lagu ini bisa mengingatkan kamu bahwa diri kamu sudah berhasil melewati semuanya hingga detik ini maka pesanku jangan lupa untuk menghargai dan berterima kasih pada diri sendiri :)',
				audio: 'assets/diri.mp3'
				
			},
			{
				title: 'The Witcher',
				year: '2023',
				rating: 'TV-MA',
				image: 'assets/11.jpg',
				description: 'Ratusan hari ku mengenalmu ratusan alasan kamu berharga ratusan hari ku bersamamu ratusan alasan kamu cahaya semampuku kau akrab dengan senyum dan tawa semampuku tak perlu lagi takut cinta',
				audio: 'assets/cahaya.mp3'
			},
			{
				title: 'Bridgerton',
				year: '2024',
				rating: 'TV-MA',
				image: 'assets/4.jpg',
				description: 'Sadarkah dirimu indah? tak cukup sekali ku pikirkan mu salahkah meski kau banyak hati yang memuja sadar tak begitu mudah kau bintangnya di setiap mata apakah milikimu hanya angan semata?',
				audio: 'assets/dirimu indah.mp3'
			},
			{
				title: 'Money Heist',
				year: '2023',
				rating: 'TV-MA',
				image: 'assets/5.jpg',
				description: 'Bersandar padaku taruh di bahuku relakan semua bebas semaumu percayalah ini sayang terlewatkan kusampaikan dalam nyanyian bergema sampai selamanya, dunia pasti ada akhirnya bintang bintang pun ada umurnya maka tenang saja kita disini berdua.. nikmati sementara yang ada',
				audio: 'assets/bergema sampai selamanya.mp3'
			}
		];

		const popularMovies = [
			{
				title: 'Dark',
				year: '2022',
				rating: 'TV-MA',
				image: 'assets/13.jpg',
				description: 'Dahulu pernah aku merayu menjamu hasrat jiwa yang tumbuh denganmu waktu, tak ingin cepat berlalu saatku berada didekatmu dan bila ada bintang yang jatuh mengalir harapanku bersamamu tak ada ragu coba menata dan meramu merangkai cinta terindah untukmu Tuhan berikan dia untukku yang memikat erat hatiku terlalu indah kau di mataku erjebak aku dibuatmu di senyum yang manis itu',
				audio: 'assets/memikat.mp3'
			},
			{
				title: 'The Crown',
				year: '2023',
				rating: 'TV-MA',
				image: 'assets/7.jpg',
				description: 'For you there is no caption needed You, reason my body got heated oh mine now you become my new obsession Girl, you are a limited edition all I want is vitamin u, oh you because all I want is vitamin u all I want is vitamin u',
				audio: 'assets/vitamin u.mp3'
			},
			{
				title: 'Ozark',
				year: '2022',
				rating: 'TV-MA',
				image: 'assets/8.jpg',
				description: "i just wanna see how beautiful you are you know that i see it i know you're a star where you go i'll follow no matter how far if life is a movie know you re the best part",
				audio: 'assets/bestpart.mp3'
			},
			{
				title: 'Narcos',
				year: '2021',
				rating: 'TV-MA',
				image: 'assets/9.jpg',
				description: 'Maukan lagi kau mengulang ragu dan sendu yang lama dia yang dulu pernah bersamamu memahat kecewa atau kau inginkan yang baru(Aku) sungguh menyayangimu aku ingin dirimu yang menjadi milikku bersamaku mulai hari ini hilang ruang untuk cinta yang lain',
				audio: 'assets/adu rayu.mp3'
			},
			{
				title: 'House of Cards',
				year: '2020',
				rating: 'TV-MA',
				image: 'assets/10.jpg',
				description: 'Udah cape ngetik zull wkwk',
				audio: 'assets/beautiful.mp3'
			}
		];

		const tvShows = [
			{
				title: 'Breaking Bad',
				year: '2023',
				rating: 'TV-MA',
				image: 'assets/3.jpg',
				description: 'Nnti di magelang gaboleh takut, ada ambon wkwk',
				audio: 'assets/gaboleh.mp3'
			},
			{
				title: 'Better Call Saul',
				year: '2022',
				rating: 'TV-MA',
				image: 'assets/12.jpg',
				description: ''
			},
			{
				title: 'The Walking Dead',
				year: '2021',
				rating: 'TV-MA',
				image: 'assets/6.jpg',
				description: 'Aku habis bikin nugget nih ka'
			},
			{
				title: 'Game of Thrones',
				year: '2020',
				rating: 'TV-MA',
				image: 'assets/14.jpg',
				description: ''
			},
			{
				title: 'Westworld',
				year: '2019',
				rating: 'TV-MA',
				image: 'assets/15.jpg',
				description: ''
			}
		];

		// Populate carousels with different content based on data-row attribute
		const carousels = document.querySelectorAll('.row-carousel');
		
		carousels.forEach(carousel => {
			const track = carousel.querySelector('.row-track');
			const rowType = carousel.getAttribute('data-row');
			
			if (track) {
				let moviesToShow = [];
				
				switch(rowType) {
					case 'trending':
						moviesToShow = trendingMovies;
						break;
					case 'movies':
						moviesToShow = popularMovies;
						break;
					case 'tv':
						moviesToShow = tvShows;
						break;
					default:
						moviesToShow = trendingMovies;
				}
				
				moviesToShow.forEach(movie => {
					const card = this.createMovieCard(movie);
					track.appendChild(card);
				});
			}
		});
	}

	createMovieCard(movie) {
		const card = document.createElement('div');
		card.className = 'movie-card fade-in';
		
		card.innerHTML = `
			<img src="${movie.image}" alt="${movie.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 300\'><rect width=\'100%\' height=\'100%\' fill=\'%23333\'/><text x=\'50%\' y=\'50%\' text-anchor=\'middle\' fill=\'%23fff\' font-size=\'16\'>${movie.title}</text></svg>'">
			<div class="movie-info">
				<div class="movie-title">${movie.title}</div>
				<div class="movie-meta">${movie.year} • ${movie.rating}</div>
			</div>
		`;

		// Add click event for movie cards
		card.addEventListener('click', () => {
			this.showMovieDetails(movie);
		});

		return card;
	}



	showMovieDetails(movie) {
		document.getElementById('musikTombol').pause();
		// Create a simple modal for movie details
		const modal = document.createElement('div');
		modal.className = 'movie-modal';
		modal.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0,0,0,0.9);
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2000;
			padding: 20px;
		`;
	
		modal.innerHTML = `
			<div style="background: #333; padding: 2rem; border-radius: 8px; max-width: 500px; text-align: center;">
				<img src="${movie.image}" alt="${movie.title}" style="width: 200px; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;" onerror="this.style.display='none'">
				<h3 style="margin-bottom: 1rem;">${movie.title}</h3>
				<p style="margin-bottom: 1rem;">${movie.year} • ${movie.rating}</p>
				<p style="margin-bottom: 2rem;">${movie.description || ''}</p>
				<button class="btn btn-primary" id="playBtn">Play</button>
				<button class="btn btn-primary" id="closeBtn">Tutup</button>
			</div>
		`;
	
		// Tambahkan audio instance khusus untuk modal ini
		const audio = movie.audio ? new Audio(movie.audio) : null;
	
		// Event listener Play
		modal.querySelector("#playBtn").addEventListener("click", () => {
			if (audio) {
				audio.currentTime = 0;
				audio.play();
			}
		});
	
		// Event listener Tutup
		modal.querySelector("#closeBtn").addEventListener("click", () => {
			if (audio) {
				audio.pause();
				audio.currentTime = 0;
			}
			document.getElementById('musikTombol').play();
			modal.remove();
		});
	
		// Close modal kalau klik di luar konten
		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				if (audio) {
					audio.pause();
					audio.currentTime = 0;
				}
				modal.remove();
			}
		});
	
		document.body.appendChild(modal);
	}
	

	handleSearch(query) {
		if (query.length < 2) return;

		// Simple search functionality
		const cards = document.querySelectorAll('.movie-card');
		cards.forEach(card => {
			const title = card.querySelector('.movie-title').textContent.toLowerCase();
			const isMatch = title.includes(query.toLowerCase());
			card.style.display = isMatch ? 'block' : 'none';
		});
	}
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	new NetflixClone();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
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

// Add loading animation for better UX
window.addEventListener('load', () => {
	document.body.classList.add('loaded');
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
	const cards = document.querySelectorAll('.movie-card');
	cards.forEach(card => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		
		if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
			card.style.transform = 'scale(1.05)';
		} else {
			card.style.transform = 'scale(1)';
		}
	});
});

