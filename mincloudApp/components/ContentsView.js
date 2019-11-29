import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContentsDetail from './ContentsDetail'
import { getCoinIconUri } from '../constants/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ContentsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      isLoading: false,
    };

    // TODO: Toggle the state every second

  }

  componentDidMount() { // After component mounted
    this._getCoinData(10);

    setInterval(() => {
      this._getCoinData(10);
      console.log('toggled!');
    }, 10000);
  }

  _getCoinData = async (limit) => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
      const responseJson = await response.json();

      const date = new Date();
      const now = date.toLocaleString()

      if (this.props.refreshDate != null) {
        this.props.refreshDate(now); // Run func type props
      }

      await this.setState({
        coinData: responseJson,
        isLoading: false,
      });
    } catch(error) {
      console.error('_getCoinData', error);
    }
  }

  render () {
    let detailCells = this.state.coinData.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
      return (
        <TouchableOpacity onPress={() => this.props.navigation && this.props.navigation.push('Youtube', {title: name})}>
          <ContentsDetail
            key={index}
            rank={rank}
            name={name}
            price={price_usd}
            volume={market_cap_usd}
            iconUri={getCoinIconUri(name)}
          />
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView style={this.props.style}>
        {detailCells}
      </ScrollView >
    );
  }
}

export default ContentsView;