/*selection de la balise section qui a la class hidden*/
const $section = document.querySelector(".hidden");
/* sélection de la balise a qui a l'id show-link */
const $linkShow = document.querySelector("#show-link");

/* ajout d'un écouteur d'événement 'click' sur le lien sélectionné */
$linkShow.addEventListener("click", event => {
	/* neutralisation du comportement par défaut de cet événement (refresh page)*/
	event.preventDefault();
	//ajout/retrait de la class 'hidden' sur la section
	$section.classList.toggle("hidden");
});
