import React from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StatusBar,
} from "react-native";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const SearchView = styled.View`
  padding: 16px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const InfoView = styled.View`
  backgroundColor: blue;
  flex: 1;
  padding: 16px;
  flex-grow: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
        <SearchView>
          <Searchbar/>
        </SearchView>
        <InfoView>
          <RestaurantsInfoCard />
        </InfoView>
      </SafeArea>
  )
}
  