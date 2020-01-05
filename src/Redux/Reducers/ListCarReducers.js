import constants from "../../constants";

const initial_state = {
    carName: null,
    carManufacturingYear: null,
    carModel: null,
    carLocation: null,
    carCity: null,
    carPrice: null,
    maxPeople: null,
    minPeople: null,
    carImage: null,
    galleryImages: null,
}
const {
    set_car_name,
    set_car_manufacturing_year,
    set_car_model,
    set_car_location,
    set_car_city,
    set_car_price,
    set_max_peopel,
    set_minimum_people,
    set_car_image,
    set_gallery_images,
    reset_car_credentials
} = constants.red_types;

export default (state = initial_state, action) => {
    switch (action.type) {
        case set_car_name:
            return {
                ...state, carName: action.payload
            }
        case set_car_manufacturing_year:
            return {
                ...state, carManufacturingYear: action.payload
            }
        case set_car_model:
            return {
                ...state, carModel: action.payload
            }
        case set_car_location:
            return {
                ...state, carLocation: action.payload
            }
        case set_car_city:
            return {
                ...state, carCity: action.payload
            }
        case set_car_price:
            return {
                ...state, carPrice: action.payload
            }
        case set_max_peopel:
            return {
                ...state, maxPeople: action.payload
            }
        case set_minimum_people:
            return {
                ...state, minPeople: action.payload
            }
        case set_car_image:
            return {
                ...state, carImage: action.payload
            }
        case set_gallery_images:
            return {
                ...state, galleryImages: action.payload
            }
        case reset_car_credentials:
            return { ...initial_state };
        default:
            return state;
    }
}