// src/utils/escapeHtml.ts
export function escapeHtml(input: string | null | undefined): string {
	if (input == null) return "";

	const htmlEscapes: Record<string, string> = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#039;",
	};

	return input.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}
