import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import Plotly from 'react-native-plotly';

const upData = {
    values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
};


export default class BarchartSimple extends React.Component {
  state = {
    data: [{type: "pie",

    showlegend: false,

    hole: 0.1,
    insidetextfont: { size: this.props.fontSizeTextPie },

    rotation: 90,
    values: this.props.values,
    text: this.props.name,
    direction: 'clockwise',
    textinfo: "text",
    textfont: {
      color: "black",
      family: "Gravitas"
    },
    textposition: "inside",
    insidetextorientation: 'radial',
    // insidetextorientation: "horizontal" | "radial" | "tangential" | "auto" ),

    marker: {
      colors: this.props.color,
      line: {
        color: "black",
        width: this.props.border
      }
    },
    }],
    layout: {
        title: {
          text: this.props.title,
          //pad:{t:100},
          pad: { t: '500px' },
          font:
          {
            size: this.props.fontSizeTitlePie,
            family: "Courier Sans", color: "black"
          }
        },
        width: this.props.widthPlanche, height: this.props.heightPlanche,
        margin: { t: 200 },
        hovermode: false,
}
  };



  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.chartRow}>
          <Text style={styles.signature}>fait avec planchespendules.com</Text>
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
    overflow:'hidden',
    position:'relative'
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signature :{
    position:'absolute',
    // width:"50%",
    fontStyle:'italic',
    height:20,
    color:'grey',
    //backgroundColor:'pink',
    top:360,
    zIndex:2222222222222222222222222,
    left:240
  }
});