from datetime import datetime
import json
import random
from pytz import timezone
import pytz

from essential_generators import DocumentGenerator

gen = DocumentGenerator()

date_time = datetime.now()
my_timezone=timezone('US/Pacific')
fullDate = my_timezone.localize(date_time)
fullDate = fullDate.astimezone(my_timezone)
date = fullDate.strftime("%m_%-d_%Y")
time = fullDate.strftime("%H:%M")

article = ''

for i in range(random.randrange(3,9)):
    article += gen.paragraph() + '\n'

data = {
    "date": str(fullDate.strftime("%m/%d/%Y")),
    "time": str(time),
    "article": article,
    "author": gen.name(),
    "author-email": gen.email()
}

print(date)
with open(f"archive/article_{date}.json", "w") as outfile:
    json.dump(data, outfile)
