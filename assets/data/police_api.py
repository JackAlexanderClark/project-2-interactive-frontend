# API call from https://data.police.uk/docs/method/crime-street/
# police API documentation: -> https://police-api-client-python.readthedocs.io/en/latest/reference/police_api.html#:~:text=Police%20API%20%C2%B6%20class%20police_api.PoliceAPI%28%2A%2Aconfig%29%20%C2%B6%20%3E%3E%3E%20from,all%20police%20forces.%20Uses%20the%20forces%20API%20call.
# need to rewrite into javascript
# could make player make an api call to evaluate percentages of crime stats
# XMLHttprequst

from police_api import PoliceAPI
api = PoliceAPI(user_agent='cops-and-robbers/9.9.9', timeout=60)

print(api)

