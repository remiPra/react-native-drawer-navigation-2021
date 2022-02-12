import { View, Text } from 'react-native';

import Plotly from 'react-native-plotly';

const Plotly1 = () => {
    const data = {
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 3, 4, 8],
        type: 'scatter',
    };
    const layout = { title: 'My cool chart!' };
    return (
        <View>
            <Plotly
                data={data}
                layout={layout}
            />
            <Text>hellodear</Text>
        </View>
    );
};

export default Plotly1;

