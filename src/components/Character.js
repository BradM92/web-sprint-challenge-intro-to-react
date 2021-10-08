// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;

  p {
    color: ${pr => pr.theme.tertiaryColor};
  }

  h3 {
    color: ${pr => pr.theme.primaryColor};
  }
`


export default function Character(){
    const [character, setCharacter] = useState(null);
    useEffect ( () => {
        axios.get('https://swapi.dev/api/people')
        .then( res => {
            console.log(res);
            setCharacter(res.data);
            console.log(character[1].homeworld)
        }).catch(err => console.error(err));
    },[])
        return(
            character &&
            <StyledDetails>
            <div className ="StarWarsCard">
                <div className ="StarWarsContainer">
            {character.map((character) =>
                <div className = "StarWarsInfo">
                <h3 className="NameCard">{character.name}</h3>
                <h4 className = "TagCard">{character.birth_year}</h4>
                </div>
            )}
            </div>
        </div>
        </StyledDetails>
        )
    }

