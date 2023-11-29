import { ReactNode } from "react";
import { Header, Footer } from "..";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}