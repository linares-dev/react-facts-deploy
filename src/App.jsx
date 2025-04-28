/**
 * Application 
 * Aggregate components
 *  
 */

import Header from '/src/components/Header.jsx';
import Navigation from '/src/components/Navbar.jsx';
import Main from '/src/components/Main.jsx';
import Footer from '/src/components/Footer.jsx';

export default function App(){
  /**
   * Fragment - a container that does not add an extra node to the DOM
   * import { Fragment } from 'react';
   * Usage: <Fragment> ...code goes in here... </Fragment>
   * Shortcut: <> ...code goes in here... </>
   * Please note: JSX Compiler recognizes the empty tag as a fragment, so need to import Fragment
  */
  return(
    <> 
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </>
  )
}