import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stops `next dev` writing AGENTS.md / CLAUDE.md into the project root.
  agentRules: false,
};

export default nextConfig;
