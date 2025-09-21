import { describe, test, expect } from "vitest";
import { formatCurrency } from "./format.helper";

describe("formatCurrency", () => {
  test("should format number to USD currency", () => {
    const result = formatCurrency(1234.56);

    expect(result).toBe("$1,234.56");
  });
  test("should format number to EUR currency for de-DE locale", () => {
    const result = formatCurrency(1234.56, "de-DE");

    expect(result).toBe("1.234,56 $");
  });
  test("should format negative number to USD currency", () => {
    const result = formatCurrency(-1234.56);

    expect(result).toBe("-$1,234.56");
  });
  test("should format zero to USD currency", () => {
    const result = formatCurrency(0);

    expect(result).toBe("$0.00");
  });
  test("should format large number to USD currency", () => {
    const result = formatCurrency(123456789.99);

    expect(result).toBe("$123,456,789.99");
  });
  test("should format euro currency for es-ES locale", () => {
    const result = formatCurrency(1234.56, "es-ES", "EUR");
    expect(result).toBe("1234,56 €");
  });
});
