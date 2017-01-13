import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ListView,
  Alert,
  TouchableHighlight,
} from 'react-native';

import styles from '../../styles'
import loremListData from '../../seedData/alertListSeedData'
import AlertDetailsView from '../AlertDetailsView/AlertDetailsView'

export default class AlertListView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(loremListData)
    };
  }

  onListItemPress = (actData) => {
    // Alert.alert('Button has been pressed!');
    this.props.navigator.push({
      title: 'Details',
      component: AlertDetailsView,
      passProps: {actionData: actData}
    });
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight
              onPress={() => this.onListItemPress(rowData)}
            >
            <View
              style={styles.container}
              >
              <Text style={styles.steelBlue}>
                {rowData['organizer']}
              </Text>
              <Text style={styles.title}>
                {rowData['title']}
              </Text>
              <Text style={styles.steelBlue}>
                {rowData['description']}
              </Text>
            </View>
          </TouchableHighlight>
          }
        />
      </ScrollView>
    );
  }
}
