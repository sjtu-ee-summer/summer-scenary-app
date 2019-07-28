import requests
from bs4 import BeautifulSoup

url = input("Input poi url: ")  # 获取detail页面url
# e.g: http://api.map.baidu.com/place/detail?uid=5ce2637d55831550ae31e51b&output=html&source=placeapi_v2
url = url.replace(' ', '')  # 因为命令行输入必须多打一个空格才能按回车

# 获取图片URL
str_html = requests.get(url)
soup = BeautifulSoup(str_html.text, 'lxml')
data = soup.select('#newbasicinfo > div.baseinfo.clearfix > div.carousel > div > a > img')
# print(data)
for item in data:
    result = {
        'src': item.get('src')
    }
if(len(result) == 0):
    result = {'src': 'http://pv18mucav.bkt.clouddn.com/food.png'}
print(result['src'])


# 下载图片代码
# print('正在下载图片，图片地址:' + result['src'])
# try:
#     pic = requests.get(result['src'], timeout=10)
# except requests.exceptions.ConnectionError:
#     print('【错误】当前图片无法下载')
# storage_dir = './images/' + 'testid' + '.jpg' # testid换成特定标识符(id)
# fp = open(storage_dir, 'wb')
# fp.write(pic.content)
# fp.close()
#
