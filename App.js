
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button
} from 'react-native';
import { DraggableGrid } from './components/draggable-grid';
import ImageContainer from './components/ImageContainer';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Require cycle:']);

const origdata = [
  { url: 'http://cdn-www.dailypuppy.com/dog-images/sydney-the-australian-cattle-dog-8_48158_2010-07-22_w450.jpg', key: 0 },
  { url: 'http://henryharveybooks.com/wp-content/uploads/2015/02/aaa-dog-crying.jpg', key: 1 },
  { url: 'http://www.urdogs.com/wp-content/uploads/2016/02/growling-dog.jpg', key: 2 },
  { url: 'http://4.bp.blogspot.com/-SARBu3n-qmU/Uc2ZAItG9TI/AAAAAAAAAuk/3s62ZBMJv0s/s490/Mutt+Dog+17.jpg', key: 3 },
  { url: 'https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg', key: 4 },
  { url: 'https://www.smalldogplace.com/images/AngryDog.jpg', key: 5 },
];

export default class MyTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ...origdata
      ],
      show: true,
    };
  }

  deletePhoto = (item) => {
    let pics = [...this.state.data];
    pics = pics.filter( (pic) => pic.url !== item.url);

    this.setState( (state) => ({data: pics}));
  }

  render_item = (item) => {
    let pic = null
    return (
      <View
        key={item.key}
      >
        <ImageContainer
          addPhoto={() => console.log("Add photo")}
          deletePhoto={this.deletePhoto}
          source={item}
        />
      </View>
    );
  }

  render() {
    return (
      this.state.show  ? 
      <View style={styles.wrapper}>
        <DraggableGrid
          numColumns={3}
          renderItem={this.render_item}
          data={this.state.data}
          onItemPress={(data) => console.log(data)}
          onDragRelease={(data) => this.setState({ data: data })}
        />
        <View>
          <Button
            title={"Reset"}
            onPress={() => {
              this.setState( (state) => ({data: origdata}));
              }}
          />
          <Button
            title={"Log Images in State"}
            onPress={() => console.log(this.state.data)}
          />
        </View>
      </View>
      :
      <View style={styles.wrapper}>
        <Text>Nothing to see here</Text>
        <Button
            style={{backgroundColor: red}}
            title={"Reset"}
            onPress={() => {
              this.setState( (state) => ({data: origdata}));
              }}
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 100,
    backgroundColor: 'blue',
  },
  wrapper: {
    paddingTop: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_text: {
    fontSize: 40,
    color: '#FFFFFF',
  },
});

