import { View, useTheme, Card, Flex, Grid, Image, Heading, Text, ToggleButton, ToggleButtonGroup } from '@aws-amplify/ui-react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

type DSProps = {
  selectedID: string;
  setSelectedID: React.Dispatch<React.SetStateAction<any>>;
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<any>>;
}

type FDProps = {
  food: any
}

type IDProps = {
  ingredient: any
}
function FoodDetail(props: FDProps) {
  const { tokens } = useTheme();
  const [foodTab, setFoodTab] = useState('normal');

  return (
    <Flex>
      <ToggleButtonGroup
        value={foodTab}
        isExclusive
        onChange={(value: any) => setFoodTab(value)}
        width='100%'
        justifyContent='center'
        marginBottom={tokens.space.small}
      >
        <ToggleButton
          border='none'
          value="normal"
        >
          <Text>Normal</Text>
        </ToggleButton>
        <ToggleButton
          border='none'
          value="delicious"
        >
          <Text>Delicious</Text>
        </ToggleButton>
        <ToggleButton
          border='none'
          value="suspicious"
        >
          <Text>Suspicious</Text>
        </ToggleButton>
      </ToggleButtonGroup>
    </Flex>
  );
}

function IngredientDetail(props: IDProps) {

  return (
    <Flex>
      <Heading>{}</Heading>
    </Flex>
  );
}

export default function DetailSection(props: DSProps) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchFood = async () => {
    try {
      const result: any = await API.graphql({ query: queries.getFood, variables: { id: props.selectedID } });
      setData(result.data.getFood);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchIngredient = async () => {
    try {
      const result: any = await API.graphql({ query: queries.getIngredient, variables: { id: props.selectedID } });
      setData(result.data.getIngredient);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (props.selectedType == 'food') {
      setIsLoaded(false);
      fetchFood();
      setIsLoaded(true);
    } else if (props.selectedType == 'ingredient') {
      setIsLoaded(false);
      fetchIngredient();
      setIsLoaded(true);
    }
  }, [props.selectedID]);

  if (isLoaded) {
    return (
      <View width='100%' height='100%'>
        {props.selectedType == 'food' ?
          <FoodDetail food={data} />
          :
          <IngredientDetail ingredient={data} />
        }
      </View>
    );
  } else {
    return (
      <Text>Loading</Text>
    );
  }
}

