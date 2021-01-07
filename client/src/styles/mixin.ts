import { css } from 'styled-components';
import { breakpoint } from '../constants/breakPoint';

export const respondTo = Object.keys(breakpoint).reduce(
  // [ 'mobile', 'tablet', 'desktop' ]
  (accumulator: { [key: string]: any }, label: string) => {
    accumulator[label as keyof typeof accumulator] = (
      literals: TemplateStringsArray
    ) => css`
      @media (min-width: ${breakpoint[label]}) {
        ${css(literals)};
      }
    `;
    return accumulator;
  },
  {} // initial value
);
