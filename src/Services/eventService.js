export const GetEvents = function() {
    let detailedEvents  = GetDetailedEvents();
    return detailedEvents.map(o=> {
      let barColor = "#f1c232";
      let barBackColor = "#f1c232";
      if(o.event.name === "Checkin")
      {
        barColor = "#38761d";
        barBackColor = "#93c47d";
      }
      if(o.event.name === "Booking")
      {
        barColor = "#cc0000";
        barBackColor = "#ea9999";
      }
      return {
        id: o.event.id,
        text: o.event.name,
        start: o.event.checkinDate,
        end: o.event.checkoutDate,
        resource: o.room.id.toString(),
        barColor: barColor,
        barBackColor : barBackColor
      }
    });
}

export const GetEventData = function(eventId) {
  let detailedEvents  = GetDetailedEvents();
  return detailedEvents.filter(o=> o.event.id === eventId)[0];
}

export const GetDetailedEvents = function() {
  return [
    {
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
    },
    {
      event : {
        id : 2,
        name : "Booking",
        checkinDate : "2019-04-27",
        checkoutDate : "2019-04-30",
        roomRate : 800,               
        discount : 5
      },
      guest : {
        id : 2,
        name : "Manav Kumar",
        email : "Manav.dhan@gmail.com",
        phone : "8050810934",
        address : "B-1001, Brigade Meadows, Bangalore - 56"
      },
      room : {
        id : 2,
        number : "002",
        guestCounts : 1     
      },
      payments : [
        {
          id : 3,
          mode: "Cash",
          amount: 1000,
          notes: "abc"
        },
        {
          id : 4,
          mode: "Check",
          amount: 200,
          notes: "SBI -3536377288"
        }
      ]
    },
    {
      event : {
        id : 3,
        name : "Checkin",
        checkinDate : "2019-04-15",
        checkoutDate : "2019-04-30",
        roomRate : 1200,               
        discount : 5
      },
      guest : {
        id : 1,
        name : "Divakar Manjhi",
        email : "Dhananjay.dhan@gmail.com",
        phone : "8050810934",
        address : "B-1001, Brigade Meadows, Bangalore - 56"
      },
      room : {
        id : 5,
        number : "102",
        guestCounts : 2      
      },
      payments : [
        {
          id : 5,
          mode: "Cash",
          amount: 100,
          notes: "abc"
        }
      ]
    },
    {
      event : {
        id : 4,
        name : "Checkout",
        checkinDate : "2019-04-05",
        checkoutDate : "2019-04-08",
        roomRate : 1800,               
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
        id : 8,
        number : "105",
        guestCounts : 2      
      },
      payments : []
    },
    {
      event : {
        id : 5,
        name : "Checkin",
        checkinDate : "2019-04-22",
        checkoutDate : "2019-04-25",
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
  ]
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