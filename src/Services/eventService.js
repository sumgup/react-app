export const GetEvents = function() {
    return [
        {id: 1, text: "Checkout", start: "2018-05-02T12:00:00", end: "2018-05-05T12:00:00", resource: "1", barColor: "#f1c232", barBackColor: "#f1c232" },
        {id: 2, text: "Checkin",  start: "2018-05-01T12:00:00", end: "2018-05-03T12:00:00", resource: "2", barColor: "#38761d", barBackColor: "#93c47d" },
        {id: 3, text: "Checkin",  start: "2018-05-03T12:00:00", end: "2018-05-10T12:00:00", resource: "2", barColor: "#38761d", barBackColor: "#93c47d" },
        {id: 4, text: "Checkin",  start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "3", barColor: "#38761d", barBackColor: "#93c47d" },
        {id: 5, text: "Booking",  start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "6", barColor: "#cc0000", barBackColor: "#ea9999" }
    ]
}

export const GetEventData = function() {
    return {
        guestName : "Dhananjay Kumar",
        guestEmail : "Dhananjay.dhan@gmail.com",
        guestPhone : "8050810934",
        guestAddress : "B-1001, Brigade Meadows, Bangalore - 56",
        checkinDate : "2019-04-25",
        checkoutDate : "2019-04-30",
        roomNumber : "001",
        guestCounts : 2,
        extraBed : true,
        roomRate : 800
    }
}