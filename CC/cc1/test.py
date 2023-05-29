import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write("Hello World we are at Sinhgad Academy Of Engineering")

app = webapp2.WSGIApplication([('/',MainPage)],debug=True)        
