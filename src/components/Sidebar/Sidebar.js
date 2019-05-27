import React, { Component } from "react";
import AlleBarna from "./Søsken";
import DelAv from "./DelAv";
import SidebarStaticElements from "./SidebarStaticElements";
import Relasjoner from "../../templates/Relasjoner";

class Sidebar extends Component {
  render() {
    const { tittel, type } = this.props;
    return (
      <ul className="sibebar_link_menu">
        <DelAv overordnede={type.overordnet} />
        <AlleBarna søsken={type.søsken} nåværende={tittel} barn={type.barn} />
        {type.graf && type.graf.length > 0 && (
          <>
            <h3>Koblinger</h3>
            <Relasjoner relasjoner={type.graf} />
          </>
        )}
        <SidebarStaticElements tittel={tittel} type={type} />
      </ul>
    );
  }
}

export default Sidebar;
