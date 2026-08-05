import type { ReactNode } from "react";

export interface ProjectorStat {
  value: string;
  label: string;
}

export interface ProjectorProps {
  description: ReactNode;
  stats: [ProjectorStat, ProjectorStat];
  className?: string;
}
