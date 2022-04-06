/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Food = {
  __typename: "Food",
  id: string,
  name: MultiLangInfo,
  category: string,
  rarity: number,
  type: FoodType,
  basedish?: string | null,
  character?: string | null,
  details?:  Array<FoodDetail | null > | null,
  ingredients?:  Array<IngredientCount | null > | null,
};

export type MultiLangInfo = {
  __typename: "MultiLangInfo",
  zh?: string | null,
  en?: string | null,
};

export enum FoodType {
  NORMAL = "NORMAL",
  SPECIALTY = "SPECIALTY",
}


export type FoodDetail = {
  __typename: "FoodDetail",
  description: MultiLangInfo,
  effect: MultiLangInfo,
};

export type IngredientCount = {
  __typename: "IngredientCount",
  ref: string,
  count: number,
};

export type PaginatedFoods = {
  __typename: "PaginatedFoods",
  foods:  Array<Food >,
  nextToken?: string | null,
};

export type Ingredient = {
  __typename: "Ingredient",
  id: string,
  name?: MultiLangInfo | null,
  description?: MultiLangInfo | null,
};

export type PaginatedIngredients = {
  __typename: "PaginatedIngredients",
  ingredients:  Array<Ingredient >,
  nextToken?: string | null,
};

export type SetFoodMutationVariables = {
  type: string,
  ref: string,
};

export type SetFoodMutation = {
  setFood?:  {
    __typename: "Food",
    id: string,
    name:  {
      __typename: "MultiLangInfo",
      zh?: string | null,
      en?: string | null,
    },
    category: string,
    rarity: number,
    type: FoodType,
    basedish?: string | null,
    character?: string | null,
    ingredients?:  Array< {
      __typename: "IngredientCount",
      ref: string,
      count: number,
    } | null > | null,
  } | null,
};

export type GetFoodQueryVariables = {
  id: string,
};

export type GetFoodQuery = {
  getFood?:  {
    __typename: "Food",
    id: string,
    name:  {
      __typename: "MultiLangInfo",
      zh?: string | null,
      en?: string | null,
    },
    category: string,
    rarity: number,
    type: FoodType,
    basedish?: string | null,
    character?: string | null,
    ingredients?:  Array< {
      __typename: "IngredientCount",
      ref: string,
      count: number,
    } | null > | null,
  } | null,
};

export type GetAllFoodsQueryVariables = {
  count?: number | null,
  nextToken?: string | null,
};

export type GetAllFoodsQuery = {
  getAllFoods:  {
    __typename: "PaginatedFoods",
    foods:  Array< {
      __typename: "Food",
      id: string,
      category: string,
      rarity: number,
      type: FoodType,
      basedish?: string | null,
      character?: string | null,
    } >,
    nextToken?: string | null,
  },
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  // getFoodsByType(foodtype: FoodType!): Food
  // # getFoodsByCategory(category: String!, count: Int, nextToken: String): PaginatedFoods!
  getIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?:  {
      __typename: "MultiLangInfo",
      zh?: string | null,
      en?: string | null,
    } | null,
    description?:  {
      __typename: "MultiLangInfo",
      zh?: string | null,
      en?: string | null,
    } | null,
  } | null,
};

export type GetAllIngredientsQueryVariables = {
  count?: number | null,
  nextToken?: string | null,
};

export type GetAllIngredientsQuery = {
  getAllIngredients:  {
    __typename: "PaginatedIngredients",
    ingredients:  Array< {
      __typename: "Ingredient",
      id: string,
    } >,
    nextToken?: string | null,
  },
};
