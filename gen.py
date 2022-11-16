# Licensing: Apache 2.0
# Authors: Anthony Maida, Daniel VanDenEykel
# Contact: amaida@csu.fullerton.edu, d.vandeneykel@csu.fullerton.edu
#
# gen.py
# This Python script contains all the generation code for articles.
# We were able to accomplish this simple article generation with the help of
# essential_generators and simple_image_download, then we would parse some
# data into a JSON file that can be read by NodeJS.

from datetime import datetime
import json
import random
from pytz import timezone
import pytz
import shutil
import os
import names

from essential_generators import DocumentGenerator
from simple_image_download import simple_image_download as simp

gen = DocumentGenerator()

# This function will get the current date and time
def getDateAndTime(current = True):
    if current == True:
        dateTime = datetime.now()
        myTimezonezone=timezone('US/Pacific')
        fullDate = myTimezonezone.localize(dateTime)
        fullDate = fullDate.astimezone(myTimezonezone)
        date = fullDate.strftime("%m_%d_%Y")
        time = fullDate.strftime("%H:%M")

    else:
        date = "01_01_2000"
        fullDate = "01/01/2000"
        time = "00:00"

    return date,fullDate,time

def generateArticle():
    word = gen.word()
    title = gen.sentence()
    date, fullDate, time = getDateAndTime()

    article = ''

    for i in range(7):
        article += gen.paragraph() + ' '

    response = simp.simple_image_download()
    image = response.urls(word, limit=10)[-1]

    imageHeight = random.randint(290, 405)
    imageWidth = random.randint(290, 405)

    data = {
        "date": str(fullDate.strftime("%m/%d/%Y")),
        "time": str(time),
        "article": str(article),
        "title": str(title),
        "author": str(names.get_full_name()),
        "email": str(gen.email()),
        "image": image,
        "imageHeight": imageHeight,
        "imageWidth": imageWidth
    }

    return data, date

def writeToJson(file="archive/article_"):
    data, date = generateArticle()
    fileName = f"{file}{date}.json"
    with open(fileName, "w") as outfile:
        json.dump(data, outfile)

    return fileName
