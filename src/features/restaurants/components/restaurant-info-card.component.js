import React from "react";
import styled from "styled-components";
import { Card } from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
`;

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 16px;
    background-color: white;
`;

export const RestaurantsInfoCard = ({restaurant = {}}) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://cdn.wynnresorts.com/q_auto,f_auto,w_1600/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Sinatra/318_Sinatra_Interior_Barbara_Kraft"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    )
};
