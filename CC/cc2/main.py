 import webapp2
import os
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(_file_), "index.html")
        context = {}
        self.response.out.write(template.render(path, context))

    def post(self):
        d = self.request.get("date")
        m = self.request.get("month")
        y = self.request.get("year")

        path = os.path.join(os.path.dirname(_file_), "result.html")
        context = {"date": d + ":" + m + ":" + y}

        self.response.out.write(template.render(path, context))

app = webapp2.WSGIApplication([("/", MainPage)], debug=True)