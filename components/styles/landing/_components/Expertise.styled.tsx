import styled from 'styled-components'

export const TwoColumnsContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 6rem;
  @media (min-width: 640px) {
    grid-auto-flow: column;
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
