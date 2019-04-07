import http.server
import socketserver
import os

PORT = 8000
os.chdir("./markdown/.vuepress/dist")
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
