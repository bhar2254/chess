/**
 * worker.ts
 * A Cloudflare edge hosted Worker for Bootstrap UI development.
 */

//  Import modules
import { Hono } from 'hono';
import { Page } from './@bhar2254/bs-dom'
import index from './routes/index';

const version = '0.0.0'

const BASE_NAV =  [{
	text: 'About',
	links: [{
		text: 'Developer',
		link: '/developer'
	}, {
		text: 'Other Projects',
		link: '/projects'
	}],
}, {
	text: 'Intro',
	links: [{
		text: 'Terminology',
		link: `/intro`
	}],
}, {
	text: 'Guides',
	links: [{
		text: 'Openings',
		link: '/openings'
	},{
		text: 'Mid Game',
		link: '/mid'
	},{
		text: 'Endings',
		link: '/endings'
	}],
}, {
	text: 'FEN',
	link: '/position',
}, {
	text: 'Play!',
	link: '/play',
}]

var ENV = {
	version: version,
	siteTitle: 'Chess | BlaineHarper.com',
	brand: `Harper Chess`,
	copyright: 'Blaine Harper',
	navbar: BASE_NAV
}

// 	set application default's for page generation
//	Page will use this as the default contents for <head></head> unless overwritten with Page.header
const _headerDef = `
	<meta name='viewport' content='width=device-width,initial-scale=1'/>
	<link rel='icon' type='image/x-icon' href='https://blaineharper.com/assets/favicon.ico'>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.css">
	<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/color-square.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/wiki.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/team-color.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/f1/popup.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/bs.add.css'>
	<link rel='stylesheet' href='https://bhar2254.github.io/src/css/bs.add.blue.css'>

	<script src='https://kit.fontawesome.com/5496aaa581.js' crossorigin='anonymous'><\/script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.12.0/chess.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.js"></script>

	<style>
		body {
			background-repeat: no-repeat;
			background-attachment: fixed;

			/* Full height */
			height: 100%;

			/* Center and scale the image nicely */
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			background-image: url('https://bhar2254.github.io/src/img/wallpapers/gato/lolz.png');
			font-family: 'Gotham Narrow', sans-serif;
		}
	</style>`

const _copyright = `
	<span id = 'footerText'><span id='year'></span> © <a href="https://blaineharper.com">${ENV.copyright}</a></span>
	<script>document.getElementById('year').innerHTML = new Date().getFullYear()</script>`

const _footerDef = `
	<div class='mx-auto'>
		<div id='footer_motto' class='col-lg-3 col-md-6 col-sm-9 col-xs-11 mx-auto bh-left-bar p-3 shadow-lg bg-glass-dark bg-glass-dark-5 bg-gradient text-center panel rounded-0' style='margin-bottom:7.5rem;'>
			<i>This project was created to showcase the power of Cloudflare Workers for easing workflow and improving speed and reliability. Start your own Cloudflare worker site <a href='https://github.com/bhar2254/Cloudflare-Workers-Starter'>here!</a></i>
		</div>
	</div>
	<button onclick="topFunction()" id="topButton" title="Go to top" style="display:block;">Top</button> 
	<!-- Bootstrap Modal -->
	<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content bg-transparent border-0">
				<img style="min-height:60%;min-width:60%;max-height:60%;max-width:60%" src="" alt="Enlarged Image" class="img-fluid" id="modalImage">
			</div>
		</div>
	</div>


	<footer id='mainFooter' class='mx-auto shadow-lg p-2 text-center bg-glass-dark-5 bg-glass-dark sticky-footer'>
		${_copyright}
	</footer>
	
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

	<script>
		let buttonToTop = document.getElementById("topButton")

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				buttonToTop.style.display = "block";
			} else {
				buttonToTop.style.display = "none";
			}
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
			
		$(document).ready(function() {
			// Event listener for all images with the class 'popup-img'
			$('.popup-img').on('click', function() {
				const imgSrc = $(this).attr('src');  // Get the source of the clicked image
				$('#modalImage').attr('src', imgSrc);  // Set modal image source
				$('#imageModal').modal('show');  // Show the modal
			});
		});
	</script>	`

const app = new Hono();

app.use( async (c, next) => {
	const navbar = BASE_NAV

	c.set('env', {
		...ENV,
		theme: 'dark',
		header: _headerDef,
		footer: _footerDef,
		navbar
	})

	Page.setDefs({
		...ENV,
		theme: 'dark',
		header: _headerDef,
		footer: _footerDef,
		navbar
	})
	await next()
})

app.route('/', index);

export default app;