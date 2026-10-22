/**
 * Formats any amount into South Asian / Nepali currency format with 'NPR' prefix and 2 decimal places.
 * Examples:
 *   22200 -> "NPR 22,200.00"
 *   244500 -> "NPR 2,44,500.00"
 *   "22200.00" -> "NPR 22,200.00"
 *   "2,44,500" -> "NPR 2,44,500.00"
 */
export const formatCurrency = (amount, prefix = "NPR ") => {
  if (amount === null || amount === undefined || amount === "") return "";

  // Strip non-numeric characters except minus and decimal point
  const cleaned = String(amount).replace(/[^0-9.-]+/g, "");
  const num = parseFloat(cleaned);

  if (isNaN(num)) return amount;

  const formatted = num.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${prefix}${formatted}`;
};

export default formatCurrency;
