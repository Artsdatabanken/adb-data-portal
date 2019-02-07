import React, { Component } from "react";
import Projeksjon from "./Projeksjon";

class OpenApi extends Component {
  render() {
    const { tittel } = this.props;
    const formater = [
      {
        tittel: "OGC WMS",
        url:
          "https://nintest.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
        projeksjon: 32633,
        beskrivelse: "Web Map Service"
      },
      {
        tittel: "OGC WFS",
        url:
          "https://nintest.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
        projeksjon: 32633,
        beskrivelse: "Web Feature Service"
      },
      {
        tittel: "Vector tiles",
        url: "./polygon.3857/",
        projeksjon: 3857,
        beskrivelse:
          "Kartfliser i vektorformat for bruk i web-løsninger. Attributter: navn, kode & areal"
      },
      {
        tittel: "Raster tiles",
        url: "./gradient.3857/",
        projeksjon: 3857,
        beskrivelse:
          "Kartfliser i rasterformat for bruk i web-løsninger. Attributter: navn, kode & areal"
      },
      {
        tittel: "Egenskaper",
        url: "metadata.json",
        projeksjon: "4326",
        beskrivelse: `Alle tilgjengelige egenskaper knyttet til ${tittel}, i maskinlesbar form`
      }
    ];

    return (
      <div style={{ display: "inline-block" }}>
        <h3>Åpne tjenester</h3>
        <table
          style={{
            display: "grid",
            gridTemplateColumns: "max-content max-content max-content",
            gridGap: "0.3em",
            alignItems: "center"
          }}
        >
          <th style={{}}>Tittel</th>
          <th style={{}}>Projeksjon</th>
          <th style={{}}>Beskrivelse</th>
          {formater.map(e => (
            <Api key={e.tittel} {...e} />
          ))}
        </table>
      </div>
    );
  }
}

const Api = ({ tittel, url, projeksjon, beskrivelse }) => {
  return (
    <React.Fragment>
      <div style={{}}>
        <a href={url}>{tittel}</a>
      </div>
      <Projeksjon epsg={projeksjon} />
      <div style={{}}>{beskrivelse}</div>
    </React.Fragment>
  );
};
export default OpenApi;
