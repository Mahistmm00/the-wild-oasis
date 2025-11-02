import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  
  @media (max-width: 720px) {
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
  }
`;

export default ButtonGroup;
