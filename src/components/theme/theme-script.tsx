const themeInitScript = `(function(){try{var k="cx-theme";var t=localStorage.getItem(k);var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=d?"dark":"light";document.documentElement.classList.toggle("dark",d);document.documentElement.dataset.theme=r}catch(e){}})();`;

export function ThemeScript() {
	return (
		<script
			// biome-ignore lint/security/noDangerouslySetInnerHtml: blocking theme init before paint
			dangerouslySetInnerHTML={{ __html: themeInitScript }}
		/>
	);
}
