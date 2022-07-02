//import liraries
import dayjs from 'dayjs';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {COLOR} from '../../../../assets/config';
import GStyle from '../../../GlobalStyle';

// create a component
const DetailsMetaDta = ({movie}) => {
  const {movieDetails} = useSelector(state => state.movieReducer);

  const _renderItem = ({item, index}) => {
    return (
      <View style={GStyle.genreListItem}>
        <Text style={{color: COLOR._textColor}}>{item.name}</Text>
      </View>
    );
  };

  const CustomMetaContainer = ({extraStyle, name, txt}) => {
    return (
      <View style={[{flexDirection: 'row'}, extraStyle]}>
        <Icon name={name} size={20} color={COLOR._textColor} />
        <Text style={GStyle.detailsBotttomIconTxt}>{txt}</Text>
      </View>
    );
  };

  return (
    <View style={GStyle.ph20}>
      <View style={GStyle.detailsContainer}>
        <Text style={GStyle.detailsHeader}>
          {!!movie.original_title ? movie.original_title : movie.original_name}
        </Text>
        <View style={GStyle.details4k}>
          <Text style={GStyle.details4kTxt}>4k</Text>
        </View>
      </View>

      <View style={GStyle.detailsContainer}>
        <CustomMetaContainer
          name="clock"
          txt={
            !!movieDetails && !!movieDetails.runtime
              ? `${movieDetails.runtime} Minutes`
              : '--'
          }
        />
        <CustomMetaContainer
          name="star"
          txt={
            !!movieDetails && !!movieDetails.vote_average
              ? movieDetails.vote_average
              : '--'
          }
          extraStyle={GStyle.ml20}
        />
      </View>

      <View style={GStyle.metaBottom}>
        <View style={{flex: 1}}>
          <Text style={GStyle.releaseText}>Release Date</Text>
          {!!movieDetails ? (
            <Text style={GStyle.releaseText2}>
              {!!movieDetails.release_date
                ? dayjs(movieDetails.release_date).format('DD MMMM YYYY')
                : '--'}
            </Text>
          ) : null}
        </View>
        <View style={{flex: 1}}>
          <Text style={GStyle.genreTxt}>Genre</Text>
          <View>
            {!!movieDetails && !!movieDetails.genres ? (
              <FlatList
                data={movieDetails.genres}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={(item, index) => `geneer-${index}`}
                renderItem={_renderItem}
              />
            ) : (
              <Text style={GStyle.releaseText2}>{'--'}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default DetailsMetaDta;
