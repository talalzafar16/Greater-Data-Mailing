export interface Stat {
  /** Plain number only (it animates); put symbols in prefix/suffix. */
  value: number;
  /** Rendered before the value, e.g. "$". */
  prefix?: string;
  /** Rendered after the value, e.g. "M+", "%", "hrs". */
  suffix?: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  { value: 38, suffix: "+", label: "Years in Business" },
  { value: 12, suffix: "M", label: "Pieces Mailed Annually" },
  { value: 22, suffix: "%", label: "Average Postage Savings" },
  { value: 5, label: "Day Standard Turnaround" },
];
