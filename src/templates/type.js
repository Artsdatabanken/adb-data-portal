import React from "react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Kart from "./Nin/Kart";
import OpenData from "./OpenData";
import OpenApi from "./OpenApi";
import OpenEgenskap from "./OpenEgenskap";
import Barna from "./Barna";
import Bilde from "./Bilde";
import DelAv from "./DelAv";
import DataBlokk from "./DataBlokk";
import Relasjoner from "./Relasjoner";
import Statistikk from "./Statistikk";
import "./table.css";
import "./style.css";

export default props => {
  const {
    pageContext: { type }
  } = props;
  const tittel = Object.values(type.tittel)[0];
  return (
    <div className="page_padding">
      <Header/>
      <Seo pageMeta={type} tittel={tittel} />
      <div>
        <h1>{tittel}</h1>
        <div className="contentContainer">
          <div className="sideContent">
           
            <div>
              <ul className="sibebar_link_menu">
                <DelAv overordnede={type.overordnet} />
                <li className="sidebar_link sidebar_active_child">{tittel}</li>
                <Barna barn={type.barn}/>
                <Relasjoner relasjoner={type.graf} />
                <a href="https://artsdatabanken.no/Pages/233748?Key=1435226523">
                  <li className="sidebar_link">Data fra artskart</li>
                </a>

                <a href="https://www.artsdatabanken.no/navn/sokhentnavn">
                  <li className="sidebar_link">Data fra artsnavn</li>
                </a>

                <a href="https://www.artsdatabanken.no/hentdata/rodlistetearter">
                  <li className="sidebar_link">Data om rødlistete arter</li>
                </a>

                <a href="https://www.artsdatabanken.no/Article/Article/133529">
                  <li className="sidebar_link">Data om rødlistete naturtyper</li>
                </a>

                <a href="https://www.artsdatabanken.no/hentdata/fremmedearter">
                  <li className="sidebar_link">Data om fremmede arter</li>
                </a>
                
              </ul>
              
            </div>
          </div>
          <div className="mainContent">
           
            <div>
              <Bilde {...type.foto.forside} alt={"Foto av " + tittel.toLowerCase()} />
              <Statistikk tittel={tittel} {...type.stats} />
                {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
            </div>

            <OpenApi api={type.api} tittel={tittel} />
            <DataBlokk api={type.api} tittel={tittel} kartformater={type.kartformat} />

            <OpenEgenskap api={type.api} tittel={tittel} />
            <DataBlokk api={type.api} tittel={tittel} kartformater={type.kartformat} />


            <OpenData kartformater={type.kartformat} />
            <Kart url={type.url} />
            <small>
              Oppdatert {new Date().toISOString()} -{" "}
              <a href="https://github.com/Artsdatabanken/adb-data-portal/">
                Github
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};
