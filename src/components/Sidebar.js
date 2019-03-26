import React, { Component } from "react";
import Barna from "../templates/Barna";
import Søsken from "../templates/Søsken";
import type from "../templates/type";
import DelAv from "../templates/DelAv";
import Relasjoner from "../templates//Relasjoner";
import SidebarStaticElements from "./SidebarStaticElements";

class Sidebar extends Component {

  render() {
    const { tittel,type } = this.props;

    return (
        <ul className="sibebar_link_menu">
            <DelAv overordnede={type.overordnet} />           
            <Søsken søsken={type.søsken} nåværende={tittel} barn={type.barn}/>
            <Relasjoner relasjoner={type.graf} />
            <SidebarStaticElements tittel={ tittel} type={type}/>
            
                
        </ul>
    );
  } 
}

export default Sidebar;
