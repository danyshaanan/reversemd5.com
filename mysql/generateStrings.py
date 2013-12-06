#!/bin/python
import hashlib

def calc(str):
  m = hashlib.md5()
  m.update(str)
  m.digest()
  return m.hexdigest()

def generateStrings(charSet,maxLength,string = ''):
  temp = [string]
  if len(string) < maxLength:
    for char in charSet:
      temp += generateStrings(charSet,maxLength,string + char)
  return temp

def calcArray(array):
  sets = ["'" + string + "','" + calc(string) + "'" for string in array]
  return 'INSERT IGNORE INTO md5 (str,md5) VALUES(' + '),('.join(sets) + ');'

print calcArray(generateStrings('0123456789',6))

