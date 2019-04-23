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
      event : {
        id : 1,
        name : "Checkin",
        checkinDate : "2019-04-27",
        checkoutDate : "2019-04-30",
        roomRate : 800,               
        discount : 5
      },
      guest : {
        id : 1,
        name : "Dhananjay Kumar",
        email : "Dhananjay.dhan@gmail.com",
        phone : "8050810934",
        address : "B-1001, Brigade Meadows, Bangalore - 56"
      },
      room : {
        id : 1,
        number : "001",
        guestCounts : 2      
      },
      payments : [
        {
          id : 1,
          mode: "Cash",
          amount: 100,
          notes: "abc"
        },
        {
          id : 2,
          mode: "Check",
          amount: 200,
          notes: "SBI -3536377288"
        }
      ]
    }
}

export const ComputeCharge = function(rootRate, discount, checkinDate, checkoutDate, payments)
  {
      let cgstPercentage = 0;
      let sgstPercentage = 0;
      let cgstAmount = 0;
      let sgstAmount = 0;
      let roomCharges  = 0;
      let discountAmount  = 0;
      let totalAmount  = 0;
      let dueAmount  = 0;

      const amounts = payments.map(o=> o.amount);
      const paidAmount = amounts.reduce(function(p, c) { return p + c; }, 0);

      let discountedRate = rootRate - (rootRate * discount / 100);
      if(discountedRate < 1000)
      {
        cgstPercentage = 0;
        sgstPercentage = 0;
      }
      else if(discountedRate >= 1000 && discountedRate < 2500)
      {
        cgstPercentage = 6;
        sgstPercentage = 6;
      }
      else
      {
        cgstPercentage = 9;
        sgstPercentage = 9;
      }
      let daysCount = date_diff_indays(checkinDate, checkoutDate);
      roomCharges = rootRate * daysCount;
      discountAmount = rootRate * daysCount * discount / 100;
      cgstAmount = (roomCharges - discountAmount) * cgstPercentage / 100;
      sgstAmount = (roomCharges - discountAmount) * sgstPercentage / 100;
      totalAmount = roomCharges - discountAmount + cgstAmount + totalAmount;
      dueAmount = totalAmount - paidAmount;
      
      return {
        roomCharges: roomCharges,
        discountAmount: discountAmount,
        cgstAmount: cgstAmount,
        sgstAmount: sgstAmount,
        totalAmount: totalAmount,
        cgstPercentage: cgstPercentage,
        sgstPercentage: sgstPercentage,
        paidAmount: paidAmount,
        dueAmount: dueAmount
      }
  }

  var date_diff_indays = function(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  }