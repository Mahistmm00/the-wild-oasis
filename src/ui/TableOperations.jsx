import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export default TableOperations;
