import styled from "styled-components";

// styled-components
 const Container = styled.div`
  padding: 2rem;
  background: url("wallpaper.png");  
  background-size: cover;
  background-position: center;
  
`
 
const Title = styled.h1`
  font-size: 3rem;  
`;

const Description = styled.h2`
  font-size: 1.5rem;  
`;

interface IButton {
  favorite?: boolean
}

const Button = styled.button<IButton>`
  margin-right: 2rem;    
  border: none;  
  color: ${(props) => (props.favorite ? "#242424" : "#dbdbdb")};
  background-color: ${({favorite}) => (favorite ? "#dbdbdb" : "#242424")};
  &:hover{
    filter: invert(1)
  }
`;



const Banner = () => {
  return (
      
     <Container> 

      <Title>Rick and Morty</Title>
       <Description>
          Rick and Morty es una serie animada para adultos de ciencia
          ficción y comedia estadounidense creada por Justin Roiland y
          Dan Harmon para el bloque de programación nocturna Adult Swim,
          transmitido en el canal Cartoon Network.
      </Description>
      <Button>Ver el trailer</Button>
      <Button favorite>Guardar en favoritos</Button>
    </Container> 
     
  );
};

export default Banner;
