const themeInitScript = `(function(){try{document.documentElement.classList.add("dark");document.documentElement.dataset.theme="dark";localStorage.setItem("cx-theme","dark")}catch(e){}})();`;

export function ThemeScript() {
	return (
		<script
			// biome-ignore lint/security/noDangerouslySetInnerHtml: blocking theme init before paint
			dangerouslySetInnerHTML={{ __html: themeInitScript }}
		/>
	);
}
