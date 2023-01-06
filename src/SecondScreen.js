import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

import { Text, View } from "react-native";

const SecondScreen = () => {
    const route = useRoute();
    const h = route.params.result;
    console.log(route.params.result, 'h');
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{ color:!h?'red':'#000',alignSelf:'center' }}>
                {h ? `Result: ${h}` : 'Enter some Data to calculate'}
            </Text>
        </View>
    )
}

export default SecondScreen;