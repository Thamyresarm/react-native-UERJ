import { Text, View } from "react-native";
import Gato from "../Gato/Gato";

const MeuAnimais = () => {
    return (
        <View>
            <Text>Apresentando meus Componentes com props e state!</Text>
            <Gato nome='Tom' />
        </View>
    );
};
export default MeuAnimais;