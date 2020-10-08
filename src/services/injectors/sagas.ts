import { fork, all } from "redux-saga/effects";
import mySaga from '../../modules/saga'
export default function* rootSaga() {
    yield all([fork(mySaga)]);
}
