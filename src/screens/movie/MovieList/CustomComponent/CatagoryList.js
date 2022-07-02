import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SIZES} from '../../../../assets/config';
import {handelSelectedCatagory} from '../../../../redux';
import {uppFirstWord} from '../../../../utils/_uppercase';
import GStyle from '../../../GlobalStyle';

const CatagoryList = () => {
  const dispatch = useDispatch();

  const {catagories, selectedCatagory} = useSelector(
    state => state.movieReducer,
  );

  const _key = (_, index) => `cat-${index}`;
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{paddingLeft: index == 0 ? 0 : SIZES.spacer}}
        disabled={selectedCatagory == item}
        onPress={() => {
          dispatch(handelSelectedCatagory(item));
        }}>
        <Text
          style={{
            fontSize: SIZES.regular * 1.5,
            color: selectedCatagory == item ? 'salmon' : '#333',
          }}>
          {uppFirstWord(item)}
        </Text>
        {selectedCatagory == item ? (
          <View style={GStyle.selectedMarked} />
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        style={{height: 40}}
        contentContainerStyle={{paddingHorizontal: SIZES.spacer}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={catagories}
        key={_key}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default CatagoryList;
