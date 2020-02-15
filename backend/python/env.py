import http.server
import socketserver
from urllib import parse
import os
import json 
# import hanging__threads__
import firebase_admin



from firebase_admin import credentials
from firebase_admin import db

with open(os.environ['AF_AUTH']) as s:
    os.environ['AF_AUTH']= s.read()


lb = json.loads(os.environ['AF_AUTH'])
cred = credentials.Certificate(lb)
apps = firebase_admin.initialize_app(cred)


ref = db.reference(path='/messages',app=apps,url=lb['database_url'])
print(ref.get())




class my_base_handler(http.server.BaseHTTPRequestHandler):
    server_version = 'Apache/2.0'
    sys_version= 'Java/Spring'
    directory = 'none'    

    # def setup(self):
    #     http.server.BaseHTTPRequestHandler.setup(self)
    #     self.request.settimeout(10)
    
    def do_POST(self):    
        if(   self.path == '/env'):
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            if content_length != 0:
                post_data = self.rfile.read(content_length) # <--- Gets the data itself    
            elif (content_length == 0):
                post_data = None                 
            # a = self.rfile.readlines()
            # self.rfile.close()
            stuff = dict(
                [
                        # ('AF_AUTH',os.environ['AF_AUTH'])
                    ]            
            )                
            self.send_response(200)
            self.send_header('Content-Type',
                            'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin',
                             '*')
            self.end_headers()
            self.wfile.write(  json.dumps(stuff).encode('utf-8'))

class MyTCPHandler(socketserver.BaseRequestHandler):
    """
    The request handler class for our server.

    It is instantiated once per connection to the server, and must
    override the handle() method to implement communication to the
    client.
    """

    def handle(self):
        # self.request is the TCP socket connected to the client
        self.data = self.request.recv(10240).strip()
        # print("{} wrote:".format(self.client_address[0]))
        print(self.data)
        # just send back the same data, but upper-cased
        self.request.sendall(self.data.upper())


Handler =  my_base_handler
# Handler =  MyTCPHandler

if __name__ == "__main__":
    with http.server.HTTPServer(("",  int(os.environ['AF_AU'])), Handler) as httpd:
        print("serving at port")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
        httpd.server_close()



