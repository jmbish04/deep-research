// src/utils/escapeHtml.ts
export function escapeHtml(input: string): string {
	if (input == null) return "";
	return String(input)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
