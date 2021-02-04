/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Alert, ActivityIndicator, FlatList} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getMissions} from '../../redux/actions';

const SpaceMissions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const {list} = useSelector((state) => state.missions);

  useEffect(() => {
    if (list.length > 0) {
      setData(list);
    } else {
      handleRequest();
    }
  }, [list]);

  const handleRequest = () => {
    setLoading(true);
    const cbSuccess = () => {
      setLoading(false);
    };
    const cbFailure = (error) => {
      setLoading(false);
      Alert.alert(
        'Opps!',
        error,
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {}},
        ],
        {cancelable: false},
      );
    };

    dispatch(getMissions(cbSuccess, cbFailure));
  };

  const renderItem = ({item}) => {
    return (
      <View key={item.mission_id} style={styles.missionContainer}>
        <Text style={styles.missionTitle}>{item.mission_name}</Text>
        <Text style={styles.missionUrl}>{item.website}</Text>
        <Text style={styles.missionDescription}>{item.description}</Text>
      </View>
    );
  };

  const RenderContent = () => {
    if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.mission_id}
          extraData={list}
          showsVerticalScrollIndicator={false}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Space Missions</Text>
      <RenderContent />
    </View>
  );
};

export default SpaceMissions;
