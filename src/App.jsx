import { ConfigProvider, theme } from "antd";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const sharedTokens = {
  colorPrimary: "#1677ff",
  borderRadius: 8,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

function AppInner() {
  const { isDark } = useTheme();

  const themeConfig = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: sharedTokens,
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
