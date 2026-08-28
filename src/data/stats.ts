/**
 * Proof-point numbers for the stats band.
 *
 * TODO: confirm real numbers with client. These are placeholders drawn from
 * marketing copy, not from production reporting — every figure below needs to
 * be verified before this site goes live. Postage savings and annual volume in
 * particular are claims a client can be held to.
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
  // TODO: confirm real numbers with client
  { value: 38, suffix: "+", label: "Years in Business" },
  // TODO: confirm real numbers with client
  { value: 12, suffix: "M", label: "Pieces Mailed Annually" },
  // TODO: confirm real numbers with client
  { value: 22, suffix: "%", label: "Average Postage Savings" },
  // TODO: confirm real numbers with client
  { value: 5, label: "Day Standard Turnaround" },
];
