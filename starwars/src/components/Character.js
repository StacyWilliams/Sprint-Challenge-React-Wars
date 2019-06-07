import React from 'react'

const Character = props => {


    return (
        <div className="characterContainer">
        <p className="style">Name: {props.starwarsChars[props.index].name}</p> 
        <p className="style">Birth Year: {props.starwarsChars[props.index].birth_year}</p>
        <p className="style">Created : {props.starwarsChars[props.index].created}</p>
        <p className="style">Eye Color : {props.starwarsChars[props.index].eye_color}</p>
        <p className="style">Gender : {props.starwarsChars[props.index].gender}</p>
        <p className="style">Hair Color : {props.starwarsChars[props.index].hair_color}</p>
        <p className="style">Height : {props.starwarsChars[props.index].height}</p>

        </div>
    );
  };
  export default Character;