import React from 'react'

const Character = props => {


    return (
        <div className="character-container">
        <div className='style' >Name: {props.starwarsChars[props.index].name} </div> 
        <div className='style' >Birth Year: {props.starwarsChars[props.index].birth_year}</div>
        <div className='style' >Created : {props.starwarsChars[props.index].created}</div>
        <div className='style' >Eye Color: {props.starwarsChars[props.index].eye_color}</div>
        <div className='style' >Gender: {props.starwarsChars[props.index].gender}</div>
        <div className='style' >Hair Color: {props.starwarsChars[props.index].hair_color }</div>
        <div className='style'>Height: {props.starwarsChars[props.index].height }</div>

        </div>
    );
  };


  export default Character;