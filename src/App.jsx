import { useState, useRef } from "react";
import "./App.css";
import { useScroll, motion, useTransform } from "framer-motion";
import Landing from "./Pages/Landing/Landing";
import Footer from "./Pages/Footer/Footer";
import Menu from "./Pages/Menu/Menu";
function App() {
  const [count, setCount] = useState(0);
  const mainRef = useRef();

  const { scrollYProgress } = useScroll({
    target: mainRef,
  });

  const logoColor = useTransform(
    scrollYProgress,
    [0.26, 0.29, 0.42, 0.42, 0.85, 0.86],
    [
      "var(--deep-blue)",
      "var(--cream)",
      "var(--cream)",
      "var(--deep-blue)",
      "var(--deep-blue)",
      "var(--cream)",
    ]
  );

  return (
    <motion.div className="main-container" ref={mainRef}>
      <Menu logoColor={logoColor} />
      <Landing />
      <Footer />
    </motion.div>
  );
}

export default App;
