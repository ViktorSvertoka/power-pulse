import { NotResultOrangeText, NotResultOrangeTextBlock, NotResultText, NotResultWrapper } from "./SearchNotResult.styles"

export const SearchNotResult = () => {
  return (
    <NotResultWrapper >
      <NotResultText>
        <NotResultOrangeText>
          Sorry, no results were found
        </NotResultOrangeText>{" "}
        for the product filters you selected. You may want to consider other search options to find
        the product you want. Our range is wide and you have the opportunity to find more options
        that suit your needs.
      </NotResultText>
      <NotResultOrangeTextBlock>Try changing the search parameters.</NotResultOrangeTextBlock>
    </NotResultWrapper>
  )
}