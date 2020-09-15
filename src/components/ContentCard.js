import React from "react"
import { CardWrapper, P, H1, ButtonWrapper } from "../elements"

export const ContentCard = ( {date, title, excerpt, slug}) => {
    return (
      <CardWrapper>
        <P size="xSmall">
            {date}
        </P>
        <H1>
            {title}
        </H1>
        <P size="xSmall">
            {excerpt}
        </P>
      <ButtonWrapper href={slug}>Read more</ButtonWrapper>
      </CardWrapper>
    )
  }