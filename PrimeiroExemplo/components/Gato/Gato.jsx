import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Gato = ({ nome }) => {
    const [taFaminto, setTaFaminto] = useState(true);
    return (
        <View>
            <Text>
                Eu sou o gato {nome}, e eu estou {taFaminto ? 'faminto' : 'satisfeito'}!
            </Text>
            <Button
                onPress={() => { setTaFaminto(false); }}
                disabled={!taFaminto}
                title={taFaminto ? 'Quero leite, por favor!' : 'Obrigado!'}
            />
        </View>
    );
};

export default Gato;