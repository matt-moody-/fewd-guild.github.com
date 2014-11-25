$(document).on('click', '.faq-question', faqClick);

function faqClick(e) {
	$self = $(e.target);
	$self.parent().toggleClass('open');
}
