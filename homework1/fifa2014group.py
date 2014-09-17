#Daniel Levine, Flanders Lorton

# Given the letter of a group, uses the API to find the standings of that group
import sys,requests,json

   
try: 
   results = requests.get("http://worldcup.kimonolabs.com/api/teams?apikey=H5KHBD8rdv859QBLzGNswxxKOUIDdg5o&group="+sys.argv[1]+"&fields=name,groupRank,wins,losses,draws")
   results= results.json()
   results=sorted(results, key = lambda group: (group['groupRank']))
   print "Team".ljust(17),"W".ljust(2),"D".ljust(2),"L".ljust(2)
   for team in results:
   	   print team['name'].ljust(17),repr(team['wins']).ljust(2),repr(team['draws']).ljust(2),repr(team['losses']).ljust(2)
except:
	print "Need just one commandline argument, A...H"
