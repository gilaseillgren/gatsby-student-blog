import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
    background-color: ${props => props.theme.colors.main1};
    color: ${props => props.theme.colors.light1};
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 0.875rem;
    width: fit-content;
    transition: filter 0.3s ease;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
        filter: brightness(110%);
                
    }
    
`
