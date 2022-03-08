import * as React from 'react';
import { View, useTheme, Card, Flex } from '@aws-amplify/ui-react';
import styled from 'styled-components';
import { IconPerson } from '@aws-amplify/ui-react';
function Main() {
  const { tokens } = useTheme();
  return (
    <Container
      backgroundColor={tokens.colors.background.tertiary}>
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
          A
        </Section>
        <Section
          width={{ base: '90%', large: '45%' }}
          margin={{ base: '2.5%', large: '0 2.5%' }}
          backgroundColor={tokens.colors.background.secondary}
          color={tokens.colors.font.primary}
        >
          B
        </Section>
      </ContentContainer>
    </Container>
  );
}

const Container = styled(View)`
  width: 100%;
  height: 100vh;
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
