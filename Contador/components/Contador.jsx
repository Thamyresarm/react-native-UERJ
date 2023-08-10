import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Contador = () => {
    const [contador, setContador] = useState(10);
    return (
        <View>
            <Text>{contador}</Text>
            <Button title="clique aqui" onPress={() => setContador(contador + 1)} />
        </View>
    );
};

export default Contador;