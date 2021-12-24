import React from 'react';
import Web from "./Web";
import Header from "./Header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTop";
import Page from 'react-page-loading'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Management from "./Dashboard/Management/Management";
import Rocket from "./rocket/Rocket";
import Addnewcall from "./Addnewcall";
import Addfastcall from "./Addfastcall";
import EditPage from "./Dashboard/Management/EditPage";
import EditPageAudio from "./Dashboard/Management/EditPageAudio";
import Login from './Dashboard/Log-in/Login';
import Register from './Dashboard/Log-in/Register';


var isLoggedIn = localStorage.getItem("token");


const Home = () => (
  <div>
    <Page duration={1} loader={"bubble"} color={"#af0505"} size={10}>
      <div Width="100%">
        <ChakraProvider>
          <Header />
        </ChakraProvider>
        <Web />
        <Footer />
        <ScrollToTopBtn />
      </div>
    </Page>
  </div>
);

const AppOntimePage = () => (
  <div>
    <Page duration={1} loader={"bubble"} color={"#af0505"} size={10}>
      <div Width="100%">
        <ChakraProvider>
          <Header />
        </ChakraProvider>
        <Rocket />
        <Footer />
        <ScrollToTopBtn />
      </div>
    </Page>
  </div>
);

const AddNewCall = () => (
  <div>
    <Page duration={1} loader={"bubble"} color={"#af0505"} size={10}>
      <div Width="100%">
        <ChakraProvider>
          <Header />
        </ChakraProvider>
        <Addnewcall />
        <Footer />
        <ScrollToTopBtn />
      </div>
    </Page>
  </div>
);

const AddFastCall = () => (
  <div>
    <Page duration={1} loader={"bubble"} color={"#af0505"} size={10}>
      <div Width="100%">
        <ChakraProvider>
          <Header />
        </ChakraProvider>
        <Addfastcall />
        <Footer />
        <ScrollToTopBtn />
      </div>
    </Page>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/RedAlertLive" component={AppOntimePage} />
        <Route exact path="/New-Call" component={AddNewCall} />
        <Route exact path="/Fast-Call" component={AddFastCall} />
        <Route exact path="/edit/:id" component={EditPage} />
        <Route exact path="/editaudio/:id" component={EditPageAudio} />
      </Switch>
      <Switch>
        <Route path="/Login" exact component={isLoggedIn ? Management : Login} />
        <Route exact path='/Management' component={Management} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>



  )
}


export default App;
