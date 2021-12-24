import React from "react";
import Header from "./Header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../Footer";
import ScrollToTopBtn from "../../ScrollToTop";
import Page from 'react-page-loading';
import "../styles.css";
import EditAudio from "./EditAudio";

function App() {
  return (
    <Page duration={1} loader={"bubble"} color={"#af0505"} size={10}>
      <div Width="100%">
        <ChakraProvider>
          <Header />
        </ChakraProvider>
        <EditAudio />
        <ScrollToTopBtn />
        <Footer />
      </div>
    </Page>
  );
}

export default App;
