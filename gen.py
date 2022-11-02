from datetime import datetime
import json
import random
from pytz import timezone
import pytz
import shutil
import os

from essential_generators import DocumentGenerator
from simple_image_download import simple_image_download as simp

gen = DocumentGenerator()

date_time = datetime.now()
my_timezone=timezone('US/Pacific')
fullDate = my_timezone.localize(date_time)
fullDate = fullDate.astimezone(my_timezone)
date = fullDate.strftime("%m_%-d_%Y")
time = fullDate.strftime("%H:%M")

word = gen.word()
title = gen.sentence()

article = ''

for i in range(7):
    article += gen.paragraph() + ' '

data = {
    "date": str(fullDate.strftime("%m/%d/%Y")),
    "time": str(time),
    "article": str(article),
    "title": str(title),
    "author": str(gen.name()),
    "email": str(gen.email()),
    "image": ('img/'+word+'/'+word+'_8.jpg')
}

with open(f"archive/article_{date}.json", "w") as outfile:
    json.dump(data, outfile)

response = simp.simple_image_download()
response.download(word, limit=10)
original = 'simple_images/'+word+'/'
#original = 'simple_images/'+word+'/'+word+'_7.jpg'
target = 'public/img/'
shutil.move(original, target)
