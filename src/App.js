import './App.css';
import 'antd/dist/antd.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from './component/header';
import { Footer } from './component/footer';
import { Home } from './component/home';
import { About } from './component/about';
import { Corporate } from './component/corporate';
import { Map } from './component/map';
import { Contact } from './component/contact';
import { Phenyl } from './component/phenyl';
import { Toilet } from './component/toilet';
import { Glass } from './component/glass';
import { Handwash } from './component/handwash';
import { Floor } from './component/floor';
import { Bleaching  } from './component/bleaching ';
import { Dishwash } from './component/dishwash';
import { Detergent } from './component/detergent';
import { Vinegar } from './component/vinegar';
import { Naphthalene } from './component/naphthalene';

 
function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Header />
      </Layout>

      <Layout className="main">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/corporate">
            <Corporate />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/phenyl">
            <Phenyl />
          </Route>
          <Route path="/toilet">
            <Toilet />
          </Route>
          <Route path="/glass">
            <Glass />
          </Route>
          <Route path="/handwash">
            <Handwash />
          </Route>
          <Route path="/floor">
            <Floor />
          </Route>
          <Route path="/bleaching">
            <Bleaching  />
          </Route>
          <Route path="/dishwash">
            <Dishwash />
          </Route>
          <Route path="/detergent">
            <Detergent />
          </Route>
          <Route path="/vinegar">
            <Vinegar />
          </Route>
          <Route path="/naphthalene">
            <Naphthalene />
          </Route>
          

        </Switch>
      </Layout>

      <Layout>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
