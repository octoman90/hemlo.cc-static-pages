[...document.querySelectorAll(".card")].forEach((card) => {
	card.onmousedown = (e) => {
		if (e.button > 1) return

		const link = card.querySelector("a")
		link.target = e.button ? "_blank" : ""
		link.click()
	}
})
