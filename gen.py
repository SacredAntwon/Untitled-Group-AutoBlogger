import datetime
import json
import random

from essential_generators import DocumentGenerator

gen = DocumentGenerator()

date_time = datetime.datetime.now(datetime.timezone.utc)
date = date_time.date()
time = date_time.time()
article = ''

for i in range(random.randrange(3,9)):
    article += gen.paragraph() + '\n'

data = {
    "date": str(date),
    "time": str(time),
    "article": article,
    "author": gen.name(),
    "author-email": gen.email()
}

with open(f"archive/article_{date}.json", "w") as outfile:
    json.dump(data, outfile)
