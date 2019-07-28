import requests
import re

url = input("Input poi url: ")  # 获取detail页面url
# e.g: http://api.map.baidu.com/place/detail?uid=5ce2637d55831550ae31e51b&output=html&source=placeapi_v2
url = url.replace(' ', '')  # 因为命令行输入必须多打一个空格才能按回车

# url = 'http://api.map.baidu.com/place/detail?uid=f78439045cc8bdd7d4851fca&output=html&source=placeapi_v2'
# 获取图片URL
str_html = requests.get(url)
# print(11)
pic_url = re.findall('&src=(.*?)",', str_html.text, re.S)
# print('找到关键词:' + keyword + '的图片，现在开始下载图片...')
if len(pic_url) == 0 :
    pic_url.append('http://pv18mucav.bkt.clouddn.com/hotel.png')
print(pic_url[0].replace('\\', ''))