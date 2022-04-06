/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
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
export const getAllFoods = /* GraphQL */ `
  query GetAllFoods($count: Int, $nextToken: String) {
    getAllFoods(count: $count, nextToken: $nextToken) {
      foods {
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
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name {
        zh
        en
      }
      description {
        zh
        en
      }
    }
  }
`;
export const getAllIngredients = /* GraphQL */ `
  query GetAllIngredients($count: Int, $nextToken: String) {
    getAllIngredients(count: $count, nextToken: $nextToken) {
      ingredients {
        id
        name {
          zh
          en
        }
      }
      nextToken
    }
  }
`;
