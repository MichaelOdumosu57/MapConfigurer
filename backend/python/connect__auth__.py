import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

apps = firebase_admin.initialize_app(cred)



print(ref.get())