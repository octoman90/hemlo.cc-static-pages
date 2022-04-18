[...document.querySelectorAll(".card")].forEach((card) => {
	card.onclick = () => {
		card.querySelector("a").click()
	}
})
