// TODO:
// This would be better as a single lib
// So that the actual hooks that the user employs would just be a POJO:

// {
//   "Page View": function(payload) {
//     mixpanel.increments["page views"];
//   }
// }


// This would turn into a container object traker:registry
export default Ember.Object.extend({

  hooks: {
    "Page View": function(paylaod) {
      console.log("Hook is incrementing a people property in mixpanel");
    }
  }

});