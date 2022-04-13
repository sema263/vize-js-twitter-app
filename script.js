var database = [
	{
		username: "furkan",
		password: "webmaster",
		friends: ["abdullah", "yeşim"]
	},
	{
		username: "abdullah",
		password: "123",
		friends: ["furkan", "yeşim"]
	},
	{
		username: "yeşim",
		password: "777",
		friends: ["abdullah", "furkan"]
	}
];
var newsFeed = [
	{
		username: "abdullah",
		tweet: "Bilet fiyatları uçtu uçtu!!!"
	},
	{
		username: "yeşim",
		tweet: "şarjım bitti :("
	}
	,
	{
		username: "furkan",
		tweet: "Javascript bir harika"
	}
];



// Kullanıcı Girişi
var userNamePrompt = prompt("Kullanıcı adınızı giriniz!");
var passwordPrompt = prompt("Şifrenizi giriniz!");

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
	for (var i = 0; i < newsFeed.length; i++) {
		if (user === newsFeed[i].username) {
		  console.log(newsFeed[i].tweet)
		}
	  }
	}else{

		console.log("hata!!!");
	}
}


signIn(userNamePrompt, passwordPrompt);