const initial_state = {
    userProfile: {
        profileImage: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        username: 'Usman Faisal'
    }
}

export default (state = initial_state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}