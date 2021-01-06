import { css } from 'styled-components';
import { breakpoints } from '../constants/breakPoints';

export const respondTo = Object.keys(breakpoints).reduce(
  // [ 'mobile', 'tablet', 'desktop' ]
  (accumulator: { [key: string]: any }, label: string) => {
    accumulator[label as keyof typeof accumulator] = (
      literals: TemplateStringsArray
    ) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(literals)};
      }
    `;
    return accumulator;
  },
  {} // initial value
);
