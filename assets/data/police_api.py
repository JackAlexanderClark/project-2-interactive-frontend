# API call from https://data.police.uk/docs/method/crime-street/
# police API documentation: -> https://police-api-client-python.readthedocs.io/en/latest/reference/police_api.html#:~:text=Police%20API%20%C2%B6%20class%20police_api.PoliceAPI%28%2A%2Aconfig%29%20%C2%B6%20%3E%3E%3E%20from,all%20police%20forces.%20Uses%20the%20forces%20API%20call.
# need to rewrite into javascript
# could make player make an api call to evaluate percentages of crime stats
# XMLHttprequst

import requests
from police_api import PoliceAPI
api = PoliceAPI(user_agent='cops-and-robbers/9.9.9', timeout=60)

print(api)
 
url = "https://jgentes-crime-data-v1.p.rapidapi.com/crime"
querystring = {"lat":"37.757815","long":"-122.5076392","startdate":"9/19/2015","enddate":"9/25/2015"}
headers = {
    'x-rapidapi-key': "cJvLRNK0GfdM9WSMbQe3inU7REn8JVy5",
    'x-rapidapi-host': "jgentes-Crime-Data-v1.p.rapidapi.com"
    }
response = requests.request("GET", url, headers=headers, params=querystring)
print(response.text)

