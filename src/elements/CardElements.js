import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.detail1};
  padding: ${props => props.theme.spacings.small};
`