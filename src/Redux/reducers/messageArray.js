export default function(state = {
    array:[{ 
      type:"Bot", 
      opt:"initialoptions", 
      Blayout:false, 
      message:[
        "Hi! Welcome to TruJet. We are #Trulyfriendly.",
        "I am your AI powered assistant and I am glad to assist you."
    ], 
      menu:[{
        "payload": "FAQs",
        "title": "FAQs"
    }], 
      Cancellation:undefined,
      ReIssuance:undefined,
      BaggageDetails: undefined,
      seat_Tru_Standard : undefined,
      seat_Tru_Classic : undefined,
      seat_Tru_Max_Corporate : undefined,
      Fare: undefined,
      Seat:undefined
      }],
    length:0
  }, action) {
    switch (action.type) {
      case "ADD_MESSAGE": {
        return {
          ...state,
          array:action.payload.array,
          length:action.payload.length
        }
          }
      default:
        return state;
    }
  }