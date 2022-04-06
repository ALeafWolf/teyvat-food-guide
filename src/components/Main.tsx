import { useEffect, useState } from 'react';
import { View, useTheme, Card, Flex, Grid, Image, ScrollView, Text } from '@aws-amplify/ui-react';
import styled from 'styled-components';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import ListSection from './ListSection';
import DetailSection from './DetailSection';

function Main() {
  const { tokens } = useTheme();
  const [fdata, setFData] = useState([]);
  const [idata, setIData] = useState([]);
  const [filteredFData, setFilteredFData] = useState([]);
  const [filteredIData, setFilteredIData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const fetchFoodData = async () => {
    try {
      const results: any = await API.graphql({ query: queries.getAllFoods });
      setFData(results.data.getAllFoods.foods);
      setFilteredFData(results.data.getAllFoods.foods);
    } catch (err) {
      console.log(err)
    }
  }

  const fetchIngredientData = async () => {
    try {
      const results: any = await API.graphql({ query: queries.getAllIngredients });
      setIData(results.data.getAllIngredients.ingredients);
      setFilteredIData(results.data.getAllIngredients.ingredients);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchFoodData()
    fetchIngredientData();
    setIsLoaded(true);
  }, []);

  return (
    <Container
      backgroundColor={tokens.colors.background.tertiary}
      paddingTop={tokens.space.xxxl}>
      <ContentContainer
        direction={{ base: 'column', large: 'row' }}
        justifyContent='center'
        alignItems='center'
        gap='0'
      >
        <Section
          width={{ base: '90%', large: '45%' }}
          margin={{ base: '2.5%', large: '0 2.5%' }}
          backgroundColor={tokens.colors.background.secondary}
          color={tokens.colors.font.primary}
        >
          <ScrollView width='100%' height='100%' orientation="vertical">
            <ListSection fdata={filteredFData} idata={filteredIData} setSelectedItem={setSelectedItem} setSelectedType={setSelectedType} isLoaded={isLoaded} />
          </ScrollView>
        </Section>
        <Section
          width={{ base: '90%', large: '45%' }}
          margin={{ base: '2.5%', large: '0 2.5%' }}
          backgroundColor={tokens.colors.background.secondary}
          color={tokens.colors.font.primary}
        >
          <DetailSection selectedID={selectedItem} setSelectedID={setSelectedItem
          } selectedType={selectedType} setSelectedType={setSelectedType}/>
        </Section>
      </ContentContainer>
    </Container>
  );

}

const Container = styled(View)`
  width: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled(Flex)`
  min-height: 100%;
`;

const Section = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vmin;
`;

export default Main;
