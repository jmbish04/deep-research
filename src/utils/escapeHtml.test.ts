import { describe, expect, it } from "vitest";
import { escapeHtml } from "./escapeHtml";

describe("escapeHtml", () => {
	it("escapes the 5 critical characters", () => {
		const input = `& < > " '`;
		const out = escapeHtml(input);
		expect(out).toBe("&amp; &lt; &gt; &quot; &#039;");
	});

	it("handles null/undefined gracefully", () => {
		// @ts-expect-error intentional
		expect(escapeHtml(null)).toBe("");
		// @ts-expect-error intentional
		expect(escapeHtml(undefined)).toBe("");
	});

	it("passes through safe text unchanged", () => {
		const input = "Deep Research Report";
		expect(escapeHtml(input)).toBe("Deep Research Report");
	});
});
