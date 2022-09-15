import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components";
import { Card } from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
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
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cardCover} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </Card>
    )
};

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    cardCover: {
        padding: 16,
        backgroundColor: "white",
    },
});