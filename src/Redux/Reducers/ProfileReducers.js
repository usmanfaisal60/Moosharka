import constants from "../../constants";

const initial_state = {
    // userProfile: {
    //     profileImage: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    //     username: 'Usman Faisal',
    //     phone: 973204037402,
    //     cnic: 87348723982211,
    //     license: '92ue90293-8400q-09',
    //     iqama: 4832472889,
    //     docs: [
    //         { title: 'License', url: 'https://img.freepik.com/free-vector/vector-car-driving-licence_53562-2978.jpg?size=626&ext=jpg' },
    //         { title: 'ID', url: 'https://www.pngrepo.com/download/178096/id-card-business.png' },
    //         { title: 'Iqama', url: 'https://checkiqama.info/wp-content/uploads/2019/04/Iqama-sample.jpg', varified: true }
    //     ]
    // }

    userProfile: null,
    userFavourites: null
}
const {
    set_user_profile,
    set_user_favourites
} = constants.red_types;

export default (state = initial_state, action) => {
    switch (action.type) {
        case set_user_profile:
            return {
                ...state, userProfile: action.payload
            }
        case set_user_favourites:
            return {
                ...state, userFavourites: action.payload
            }
        default:
            return state;
    }
}