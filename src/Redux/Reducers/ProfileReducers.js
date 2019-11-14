const initial_state = {
    userProfile: {
        profileImage: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        username: 'Usman Faisal',
        phone: 973204037402,
        cnic: 87348723982211,
        license: '92ue90293-8400q-09',
        iqama: 4832472889
    }
}

export default (state = initial_state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}