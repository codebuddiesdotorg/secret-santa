import './questionnaire.html';


Template.questionnaire.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.questionnaire.events({
  "click #submit": function(event, template){
    event.preventDefault();

     var categories = [];// checked item will be stored in here

     $('input[name=things]:checked').each(function() {
       categories.push($(this).val());
     });
     var firstname = template.find('#firstname').value;
     var lastname = template.find('#lastname').value;
     var introduction = template.find('#introduction').value;
     var preference =  $('input:radio[name=preference]:checked').val();
     var shippingAddress = '';

     if ($.trim(firstname) == '') {
       Bert.alert("firstname", 'warning', 'growl-top-right' );
       return;
     }

     if ($.trim(lastname) == '') {
       Bert.alert("lastname", 'warning', 'growl-top-right' );
       return;
     }

     if (categories.length < 2) {
       Bert.alert("At least select 3 things ", 'warning', 'growl-top-right' );
       return;
     }

     if ($.trim(introduction) == '') {
       Bert.alert("Introduction ", 'warning', 'growl-top-right' );
       return;
     }

     if (preference === "physical") {
       shippingAddress = template.find('#shippingAddress').value;
       if ($.trim(shippingAddress) == '') {
         Bert.alert("shipping address ", 'warning', 'growl-top-right' );
         return;
       }
     }

     const data = {
       firstname: firstname,
       lastname: lastname,
       introduction: introduction,
       preference: preference,
       categories: categories,
       shippingAddress: shippingAddress,
     }

     Meteor.call("createNewQuestionnaire", data, function(error, result){
       if(error){
         Bert.alert(error.error, 'danger', 'growl-top-right' );
       }
       if(result){
          Bert.alert("Success", 'success', 'growl-top-right' );
       }
     });


  },
  "click #preference": function(event, template){
    var shippingAddressBox = '<div class="form-group"> <label for="comment">Shipping address :</label> <textarea class="form-control" rows="5" id="shippingAddress"></textarea> </div>';
    var preference =  $('input:radio[name=preference]:checked').val();

    if (preference === "physical") {
      $("#shippingAddressBox").append(shippingAddressBox);
    }else {
      $("#shippingAddressBox").empty();
    }

  }
});
