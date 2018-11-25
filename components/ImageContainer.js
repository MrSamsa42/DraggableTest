import React, { Component } from 'react'
import { Dimensions, StyleSheet, View, Platform, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';
import _ from 'lodash/core';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Require cycle:']);

const { width, height } = Dimensions.get('window');

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>

            <View>
              <Image
                style={{ width: width / 3.3, height: 112, borderRadius: 4 }}
                source={{uri: this.props.source.url}}
              />
            </View>

          </View>
          <View style={styles.addButtonLayout}>
            <View style={styles.addButton}>
              {
                (this.props.source.url !== 'null' && this.props.source.url !== 'http://meddle.co/images/logo.png') ?
                  <TouchableOpacity testID="removePhoto"
                    onPress={() => this.props.deletePhoto(this.props.source)}
                  >
                    <Icon name="md-close" style={styles.icon} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity testID="addPhoto"
                    onPress={() => this.props.addPhoto(this.props.position)}
                  >
                    <Icon name="md-add" style={styles.icon} />
                  </TouchableOpacity>
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    // flex:1,
    height: 116,
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
    width: width / 3.2
  },
  boxContainer: {
    flex: 1,
    marginBottom: (Platform.OS === 'android') ? 5 : undefined,
    marginRight: (Platform.OS === 'android') ? 5 : undefined
  },
  box: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 4,
  },
  addButtonLayout: {
    backgroundColor: '#5DC1CF',
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    bottom: -5,
    right: -5,
    borderWidth: 3,
    borderColor: 'white'
  },
  addButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2
  },
  icon: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center'
  }
}
