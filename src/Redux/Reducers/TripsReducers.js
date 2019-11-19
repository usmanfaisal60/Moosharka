import constants from "../../constants"

const initial_state = {
    activity: [{ title: '', message: '' }],
    booked: [{ title: '', message: '' }],
    history: {
        "paginate": {
            "current_page": 1,
            "total_result": 1,
            "last_page": 1
        },
        "result": [
            {
                "id": 11,
                "code": "2d629ffe1d1cede552e68f9cd8f78c9b",
                "vendor_id": 1,
                "customer_id": 56,
                "payment_id": null,
                "gateway": "offline_payment",
                "object_id": 19,
                "object_model": "tour",
                "start_date": "2019-11-11 00:00:00",
                "end_date": "2019-11-11 02:00:00",
                "total": "2100.00",
                "total_guests": 1,
                "currency": null,
                "status": "processing",
                "deposit": null,
                "deposit_type": null,
                "commission": 600,
                "commission_type": { amount: 30, type: 'percent' },
                "email": "mkmughal17@mail.com",
                "first_name": "kashif",
                "last_name": "mughal",
                "phone": "03142031414",
                "address": "test",
                "address2": "test2",
                "city": "Karachi",
                "state": "Sindh",
                "zip_code": "74600",
                "country": null,
                "customer_notes": null,
                "create_user": 56,
                "update_user": 56,
                "deleted_at": null,
                "created_at": "2019-11-11 21:13:48",
                "updated_at": "2019-11-11 21:14:02",
                "total_before_fees": "2000.00",
                "paid_vendor": null
            }
        ]
    }
}

const {
    set_trips
} = constants.red_types;

const tripsReducers = (state = initial_state, action) => {
    switch (action.type) {
        case set_trips:
            return {
                ...state, trips: action.payload
            }
        default:
            return state;
    }
}

export default tripsReducers;