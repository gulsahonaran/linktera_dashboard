import React from 'react';
import Main from "./MainComponent/Main";
import LeftBar from "./NavigationComponents/SideBarComponents/LeftBar";

import "../assets/stylesheets/application.sass";

function App() {
  return (
    <div className="linktera-dashboard">
        <LeftBar/>
        <Main />
    </div>
  );
}

export default App;
