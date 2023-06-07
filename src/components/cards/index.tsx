import { useState, useEffect } from "react";


import styled from "styled-components";

// styled-components
const Section = styled.section` 
  padding: 1rem ;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Article = styled.article`
  border: 1px solid #bdbdbd;
  flex-grow: 1;
  text-align: center;
  border-radius: 1rem;
  padding-top: 1rem;
`;

const Image = styled.img`
  border-radius: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-left: 1rem;
  
  
`;

/* interface IH4 {
  gender? : string
} */

const H4 = styled.h4<{gender:string}>` 
 color: ${(props) => props.gender === "Male" ? "blue" : "red"}
`;

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}


const Character = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((json) => {
          setCharacter(json.results);
        });
    fetchCharacter();
  }, []);

  return (
    <>
      <Subtitle>Algunos personajes de la serie</Subtitle>
      <Section>
        {character.map((data: CharacterProps) => {
          const {id,image, name, gender} = data
          return (
            <Article key={id}>
              <Image src={image} alt={name} />
              <div>
                <h2>{name}</h2>
                <H4 gender={gender}>{gender}</H4>
              </div>
            </Article>
          );
        })}
      </Section>
    </>
  );
};

export default Character;
