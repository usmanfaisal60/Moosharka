import axios from 'axios';
import constants from '../../constants';

export const setCarCredential = (type, payload) => {
    return {
        type,
        payload
    }
}

export const submitCar = (title, year, location_id, map_lat, map_lng, price, max_people, banner_image, gallery, callbackSuccess, callbackFailure) => {
    return async dispatch => {

        try {
            const formData = createCarFormData({
                title,
                year,
                location_id,
                map_lat,
                map_lng,
                price,
                max_people,
                banner_image,
                gallery
            });
            console.log(constants.token);
            const result = await axios.post(
                constants.url + '/user/cars/create', formData,
                {
                    headers: {
                        'Authorization': 'Bearer ' + constants.token,
                        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                    }
                });
            console.log(result);
            callbackSuccess();
        } catch (e) {
            console.log(e)
            callbackFailure();
        }
    }
}

const createCarFormData = obj => {
    const data = new FormData();

    for (let key in obj) {
        if (key === 'gallery') {
            if (obj[key]) {
                obj[key].forEach(el => {
                    data.append('gallery[]', {
                        name: el.fileName,
                        type: el.type,
                        uri: Platform.OS === "android" ? el.uri : el.uri.replace("file://", "")
                    });
                });
            }
        } else {
            if (typeof (obj[key]) === 'object' && obj[key]) {
                data.append(key, {
                    name: obj[key].fileName,
                    type: obj[key].type,
                    uri: Platform.OS === "android" ? obj[key].uri : obj[key].uri.replace("file://", "")
                });
            } else data.append(key, obj[key]);
        }
    }

    return data;
}


const createImageFormData = (photo, docName = 'avatar') => {
    const data = new FormData();

    data.append(docName, {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    return data;
};