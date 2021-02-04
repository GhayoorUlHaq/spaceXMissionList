import {StyleSheet, Platform} from 'react-native';
import {WP, HP} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    marginVertical: HP(10),
    fontSize: 20,
  },
  missionContainer: {
    marginVertical: WP(3),
    width: WP(92),
    backgroundColor: '#f3f3f3',
    borderRadius: WP(3),
    padding: WP(2),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  missionTitle: {
    fontWeight: 'bold',
  },
  missionUrl: {
    color: 'grey',
    fontSize: 13,
  },
  missionDescription: {
    marginTop: WP(2),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
