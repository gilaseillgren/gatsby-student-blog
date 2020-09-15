import React from "react"
import { CardWrapper, P, H1 } from "../elements"

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
      </CardWrapper>
    )
  }