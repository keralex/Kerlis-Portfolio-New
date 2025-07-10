import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import { ThemeProvider } from "@/hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <Home />
    </ThemeProvider>
  );
}

export default App;
