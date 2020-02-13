import http.server
import socketserver
from urllib import parse
import os
import json 

PORT = 8000



class my_base_handler(http.server.BaseHTTPRequestHandler):
    server_version = 'Apache/2.0'
    sys_version= 'Java/Spring'
    directory = 'none'    


    def do_GET(self):
        stuff = dict(
            [
                ('AF_APIKEY',os.environ['AF_APIKEY']),
                ('AF_APPID',os.environ['AF_APPID']),
                ('AF_AUTHDOMAIN',os.environ['AF_AUTHDOMAIN']),
                ('AF_DATABASEURL',os.environ['AF_DATABASEURL']),
                ('AF_GCM_SENDER_ID',os.environ['AF_GCM_SENDER_ID']),
                ('AF_PROJECTID',os.environ['AF_PROJECTID']),
                ('AF_STORAGEBUCKET',os.environ['AF_STORAGEBUCKET']),
            ]            
        )        
        if(   self.path == '/env'):
            message_parts.append('')
            message = '\r\n'.join(message_parts)
            self.send_response(200)
            self.send_header('Content-Type',
                            'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin',
                             '*')
            self.end_headers()
            self.wfile.write(  json.dumps(stuff).encode('utf-8'))


Handler =  my_base_handler

with http.server.HTTPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()

