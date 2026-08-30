/**
 * Proof-point numbers for the stats band.
 *
 * Confirmed by the client (Aug 2026). Re-confirm before reusing these in paid
 * advertising — postage savings and annual volume are claims that can be held
 * against the business.
 */

export interface Stat {
  /** Numeric portion, kept separate so it can be count-up animated. */
  value: number;
  /** Rendered before the value, e.g. "$". */
  prefix?: string;
  /** Rendered after the value, e.g. "M+", "%", "hrs". */
  suffix?: string;
  label: string;
  /** Optional clarifying line under the label. */
  description?: string;
}

export const stats: Stat[] = [
  { value: 38, suffix: "+", label: "Years in Business" },
  { value: 12, suffix: "M", label: "Pieces Mailed Annually" },
  { value: 22, suffix: "%", label: "Average Postage Savings" },
  { value: 5, label: "Day Standard Turnaround" },
];
