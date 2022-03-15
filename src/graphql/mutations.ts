/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const setFood = /* GraphQL */ `
  mutation SetFood($type: String!, $ref: String!) {
    setFood(type: $type, ref: $ref) {
      id
      name {
        zh
        en
      }
      category
      rarity
      type
      basedish
      character
      ingredients {
        ref
        count
      }
    }
  }
`;
