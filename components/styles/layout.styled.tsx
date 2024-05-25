import styled from 'styled-components'

export const HeadingOne = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  line-height: 1.625;
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1.2;
  }
`
export const HeadingTwo = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  line-height: 1.625;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
export const TwoColumnsContainer = styled.div`
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
