import { View, useTheme, Card, Flex, Grid, Image, Text, ToggleButton, ToggleButtonGroup } from '@aws-amplify/ui-react';
import styled from 'styled-components';
import { useState } from 'react';

type LSProps = {
  fdata: any[];
  idata: any[];
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
  setSelectedType: React.Dispatch<React.SetStateAction<any>>;
  isLoaded: boolean;
}
function ListSection(props: LSProps) {
  const { tokens } = useTheme();
  const [selectedTab, setSelectedTab] = useState('food');
  if (props.isLoaded == true) {
    return (
      <View>
        <ToggleButtonGroup
          value={selectedTab}
          isExclusive
          onChange={(value: any) => setSelectedTab(value)}
          width='100%'
          justifyContent='center'
          marginBottom={tokens.space.small}
        >
          <ToggleButton
            border='none'
            value="food"
          >
            <Text>Food</Text>
          </ToggleButton>
          <ToggleButton
            border='none'
            value="ingredient"
          >
            <Text>Ingredient</Text>
          </ToggleButton>
        </ToggleButtonGroup>
        <Grid
          display={selectedTab=='food'?'grid':'none'}
          templateColumns={{ base: "1fr 1fr", medium: "1fr 1fr 1fr", large: "1fr 1fr 1fr 1fr" }}
          gap={tokens.space.small}
        >
          {props.fdata.map((n: any) => {
            return (
              <Card key={n.id.toString()} onClick={()=>{props.setSelectedItem(n.id); props.setSelectedType('food');}}>
                {n.name.en}
              </Card>
            )
          })}
        </Grid>
        <Grid
          display={selectedTab=='ingredient'?'grid':'none'}
          templateColumns={{ base: "1fr 1fr", medium: "1fr 1fr 1fr", large: "1fr 1fr 1fr 1fr" }}
          gap={tokens.space.small}
        >
          {props.idata.map((n: any) => {
            return (
              <Card key={n.id.toString()} onClick={()=>{props.setSelectedItem(n.id); props.setSelectedType('ingredient');}}>
                {n.name.en}
              </Card>
            )
          })}
        </Grid>
      </View>
    );
  } else {
    return (
      <Text>Loading</Text>
    );
  }
}
export default ListSection;
