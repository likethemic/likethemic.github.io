function makeMobileFriendly() {
	if (screen.width < screen.height) {
		document.getElementsByClassName("carousel-item").style.height = "0rem";
	}
}