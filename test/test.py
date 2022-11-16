# test.py, by Anthony Maida and Daniel VanDenEykel
#
# This is the unit testing program.

import unittest
import os
import sys
import pathlib as pl
sys.path.append('..')

import gen

class TestStringMethods(unittest.TestCase):

    # Test if we generate fake dates by passing 'False'
    def testDates(self):
        print("Testing format for the times.")
        articleDate, date, time = gen.getDateAndTime(False)
        self.assertEqual(articleDate, '01_01_2000', "Date Failed")
        self.assertEqual(date, '01/01/2000')
        self.assertEqual(time, '00:00')

    # Test to see if the json file exists
    def testFile(self):
        print("Testing to see if the file "
        "exists after generating the article.")
        fileName = gen.writeToJson("../archive/article_")
        path = pl.Path(fileName)
        self.assertEqual((str(path), path.is_file()), (str(path), True))

    # Test to ensure character length is over a certain amount
    def testArticleParagraph(self):
        testLength = 2000
        print("Testing to see if the character length "
        f"of the article is over {testLength}.")
        data = gen.generateArticle()
        article = data[0]['article']
        self.assertGreater(len(article), testLength, "Article is too short")



if __name__ == '__main__':
    unittest.main()
