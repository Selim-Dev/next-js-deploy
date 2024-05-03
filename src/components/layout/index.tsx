import { Footer, Navbar } from "@/src/components";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      {children}
      </main>
      <Footer />
    </div>
  );
};
