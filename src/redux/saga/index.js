import {fork} from 'redux-saga/effects';
import {getMissions} from './getSpaceMissions';
export function* rootSaga() {
  yield fork(getMissions);
}
