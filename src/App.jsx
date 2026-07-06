import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import OurNetwork from "./pages/OurNetwork";
import OurClients from "./pages/OurClients";
import PreEngineering from "./pages/PreEngineering";
import MezzanineStructure from "./pages/MezzanineStructure";
import ContainerBodies from "./pages/ContainerBodies";
import GirderBridges from "./pages/Girder&Bridges";
import InsulatedPanel from "./pages/InsulatedPanel";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Career from "./pages/Career";
import Industries from "./pages/Industries";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/network" element={<OurNetwork />} />
        <Route path="/clients" element={<OurClients />} />
        <Route path="/pre-engineering" element={<PreEngineering />} />
        <Route path="/mezzanine" element={<MezzanineStructure />} />
        <Route path="/insulated-panel" element={<InsulatedPanel />} />
        <Route path="/container-bodies" element={<ContainerBodies />} />
        <Route path="/girders" element={<GirderBridges />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/career" element={<Career />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
