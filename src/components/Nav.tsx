import * as React from 'react';
import { View, Flex, Button, useTheme, ColorMode } from '@aws-amplify/ui-react';
import styled from 'styled-components';
import {
  IconPerson,
  ToggleButton,
  ToggleButtonGroup,
  Card
} from '@aws-amplify/ui-react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type NavProps = {
  colorMode: ColorMode,
  setColorMode: (colorMode: any) => void
}

function Nav({ colorMode, setColorMode }: NavProps) {
  const { tokens } = useTheme();
  return (
    <NavBar>
      <Flex
        justifyContent="flex-end"
      >
        <Card
          color={tokens.colors.font.primary}
          backgroundColor={tokens.colors.background.tertiary}
          display='flex'
        >
          <ToggleButtonGroup
            value={colorMode}
            isExclusive
            onChange={(value) => setColorMode(value)}
          >
            <ToggleButton
              border='none'
              value="light"
            >
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton
              border='none'
              value="dark"
            >
              <DarkModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <Button>
            <IconPerson />
          </Button>
        </Card>
      </Flex>
    </NavBar>

  );
}

const NavBar = styled(View)`
  position: fixed;
  top: 0;
  width: 100%;
`;

export default Nav;
