import React from 'react'
import Character from './Character'

const CharacterList = props => {
    return (

        <div className={"list-container"}>
          {props.starwarsChars.map((char, i) => {
            return (
                  <div>
                <Character starwarsChars={props.starwarsChars} index={i} />
                </div>


            );
          })}
        </div>

    );
  };

  export default CharacterList;