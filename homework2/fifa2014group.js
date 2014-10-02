//takes use argument then uses the kimono api to get a group that the user chose
//then returns the group in order of group ranking


var request = require("request");


var apikey="H5KHBD8rdv859QBLzGNswxxKOUIDdg5o"

if((process.argv[2].length>=2)||(/[^A-H]/).test(process.argv[2])){
	console.log("Need just one commandline argument, A...H")
	process.exit()
}


request("http://worldcup.kimonolabs.com/api/teams?apikey="+apikey+"&group="+process.argv[2]+"&fields=name,groupRank,wins,losses,draws&sort=groupRank", 
  function(err,response, body) {
  if (!err && response.statusCode == 200) {
	  	var group = JSON.parse(body);
	  	console.log("Name                    W | D | L")
	  	for(var i = 0; i < group.length; i++) {

		console.log(group[i]["name"]+"            "+group[i]["wins"]+"   "+group[i]["draws"]+"   "+group[i]["losses"]);
	}
 }   
});
