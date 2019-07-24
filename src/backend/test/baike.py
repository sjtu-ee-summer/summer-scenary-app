# coding=utf-8
import urllib.request
import re
from bs4 import BeautifulSoup
from distutils.filelist import findall
import sys



#print(sys.stdout.encoding)

#print (sys.getdefaultencoding())
# keyword='天安门'
keyword=sys.argv[1]
key=urllib.request.quote(keyword)
page = urllib.request.urlopen("https://baike.baidu.com/item/"+key)


contents = page.read()
#print(contents)
#获得了整个网页的内容也就是源代码

soup = BeautifulSoup(contents,"html.parser")
tag=soup.head
str = tag.find_all('meta')[3]['content']

print ("%s" % str)
#print(soup.head)
#print(soup.head.contents[1])
#tag = soup.find('div', class_='info')
# m_descript = tag.find('meta',name_='description').getcontent()
# print(m_descript)
   # print tag  
#    m_name = tag.find('span', class_='title').get_text()        
#    m_rating_score = float(tag.find('span',class_='rating_num').get_text())          
#    m_people = tag.find('div',class_="star")  
#    m_span = m_people.findAll('span')  
#    m_peoplecount = m_span[3].contents[0]  
#    m_url=tag.find('a').get('href')  
