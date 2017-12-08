FB.api(
  '/me',
  'GET',
  {"fields":"id,name"},
  function(response) {
      // Insert your code here
      console.log(response);
  }
);