// ^ - Match the beginning of the line
// ( - Start capture group 1
// ((?!(/|\\s))) - Negative lookahead assertion for / or \\s(empty space)
// . - Match any char
// ) - End capture group 1
// * - Match 0 or more of capture group 1
// $ - Match the end of the line
export const OBJECT_NAME_REGEX = '^((?!(/|\\s)).)*$';
export const DELETE_CONFIRMATION_STRING = 'DELETE';
export const DEFAULT_ERROR_MESSAGE =
  'There was an unexpected error, please refresh the page or try again.';
