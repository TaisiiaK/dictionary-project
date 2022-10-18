import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong>
            {definition.definition}
            <br />
            <em>
              <Example example={definition.example} />
            </em>
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
