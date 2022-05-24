function popupToggle(){
	const popup = document.getElementById('popup');
	popup.classList.toggle('active')
}
window.onload = function() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		emailjs.sendForm('service_wd2s6pq', 'template_s124xnt', this)
		
		const contentAfter = document.getElementById('contentAfter');
		contentAfter.classList.toggle('active')
		const contents = document.getElementById('contents');
		contents.classList.toggle('active')
	}
															);
}
