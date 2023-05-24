import { fetchImages } from "../api/request";
import {call,put,take,select,all} from 'redux-saga/effects'
import { GalleryActions } from "./Gallery.slice";


export function* loadImages(){
    try {
        const images = yield call(fetchImages);
        yield put(GalleryActions.setImages(images));
        yield put(GalleryActions.setSelected(images[0]));
    } catch (error) {
        yield put({type:'IMAGE_LOAD_FAILURE'})
    }
}

// function* watchForLoadImages(){
//     while(true){
//         yield fork(loadImages)
//     }
// }

function* watchAndLog(){
    while(true){
        const action = yield take('*');
        const state = yield select();

        console.log('action',action);
        console.log('state after',state)
    }
}

export default function* rootSaga(){
    yield all([
        loadImages(),
        watchAndLog()
    ])
}