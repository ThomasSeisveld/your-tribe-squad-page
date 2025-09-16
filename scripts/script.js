const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const target = tab.dataset.tab;

		tabs.forEach(t => t.setAttribute("aria-selected", "false"));
		tab.setAttribute("aria-selected", "true");

			panels.forEach(panel => {
				if (panel.id === target) {
					panel.classList.add("fade-in");
					panel.setAttribute("data-active", "true");
					panel.style.display = "block";
					setTimeout(() => {
						panel.classList.remove("fade-in");
					}, 350);
				} else {
					panel.setAttribute("data-active", "false");
					panel.style.display = "none";
				}
			});
// Fade-in animatie class toevoegen via CSS
	});
});

// Hide all panels except the active one on load
window.addEventListener("DOMContentLoaded", () => {
	panels.forEach(panel => {
		if (panel.getAttribute("data-active") !== "true") {
			panel.style.display = "none";
		}
	});
});