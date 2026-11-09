import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stop `next dev` from writing AGENTS.md / CLAUDE.md into the project root
  // when it detects an AI coding tool. Those files are not part of the site.
  agentRules: false,
};

export default nextConfig;
