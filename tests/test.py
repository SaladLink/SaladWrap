import requests

session = requests.Session()

auth = 'https://app-api.salad.io/api/v2/authentication-sessions'
auth_payload = {
    "email": str(input("Enter email: ")),
    "termsAccepted": True
}

session.post(auth, json=auth_payload)

auth_verification = 'https://app-api.salad.io/api/v2/authentication-sessions/verification'
auth_verification_payload = {
    "passcode": str(input("Enter passcode from email: "))
}

profile = 'https://app-api.salad.io/api/v1/profile'

profile_data = session.get(profile)

print(profile_data.content)