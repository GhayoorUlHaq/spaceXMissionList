import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../actions/types';
import Api from '../../utils/api';
export function* getMissions() {
  yield takeLatest(types.SPACE_API_REQUEST, getAllMissions);
}
function* getAllMissions(params) {
  try {
    let response = yield Api.getAxios(
      'https://api.spacexdata.com/v3/missions',
      null,
    );
    if (response.status === 200) {
      params.cbSuccess();
      yield put({type: types.SPACE_API_SUCCESS, data: response.data});
    } else {
      params.cbFailure('Fail to get missions');
    }
  } catch (error) {
    params.cbFailure('Fail to get missions');
  }
}
