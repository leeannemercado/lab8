function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);

  }
}

function changeUser(response){


  console.log(response);

  var name= response['name'];
  var photo= response['picture'];

console.log(photo);

  $('#name').html(name);
  $('#photo').attr('src', 'https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/15027485_1276946402342659_8382193966895419414_n.jpg?oh=273c1e1683bcc86ed6b3811a79d217f3&oe=59701CD9');

}