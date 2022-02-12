import React from 'react';
import { StyleSheet, View } from 'react-native';
import Plotly from 'react-native-plotly';

const upData = {
    values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
};


export default class Example extends React.Component {
  state = {
    data: [upData],
    layout: { title: 'Plotly.js rung in React Native!' , height: 300,
    width: 400}
  };



  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.chartRow}>
          <Plotly
            data={this.state.data}
            layout={this.state.layout}
            
            onLoad={() => console.log('loaded')}
            debug
            enableFullPlotly
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent:'center'

  },
  chartRow: {
    flex: 1,
    width: '100%',
    justifyContent:"center",
    overflow:'hidden'
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});