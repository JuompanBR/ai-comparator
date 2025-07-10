import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <section id="app_section">
    { children }
  </section>
);
