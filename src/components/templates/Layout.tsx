import { Navigation } from "../../components/organisms/Navigation";
import { Footer } from "../../components/organisms/Footer";
import { ThemeProvider } from "../../hooks/useTheme";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div >
    </ThemeProvider>
  );
}

export { Layout };
