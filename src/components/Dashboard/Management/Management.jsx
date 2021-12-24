import React from "react";
import TableAudio from "./TableAudio";
import TableRed from "./TableRed";
import Header from "./Header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../Footer";
import ScrollToTopBtn from "../../ScrollToTop";
import Page from 'react-page-loading'
import "../styles.css"

function App() {
  return (
    <Page duration={1} loader={"bubble"} color={"#af0505"} size={10}>
      <div Width="100%">
        <ChakraProvider>
          <Header />
        </ChakraProvider>
        <TableRed />
        <TableAudio />
        <ScrollToTopBtn />
        <Footer />
      </div>
    </Page>
  );
}

export default App;
