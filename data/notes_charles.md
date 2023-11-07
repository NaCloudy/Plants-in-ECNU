#### charles使用教程

- 破解方法：https://www.bilibili.com/read/cv18697749



（1）在电脑上安装root证书

Help -> SSL Proxying -> Install Charles Root Certificate

-> 安装证书 ->本地计算机 -> 将所有的证书都放入下列存储 -> 受信任的根证书颁发机构

（2）在手机上配置网络代理

Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Device

在手机连接的Wi-Fi下配置`服务器`和`端口`

（3）配置网络代理

Proxy -> SSL Proxy Setting

--> Enable SSL Proxying

（4）在手机上打开需要爬取的页面，查看charles，找到想要的信息



#### charles获取的url

- 获取所有植物的信息（不含template中大段文字描述的部分）：https://tree.sjtusv.com/trees

- 获取id为1390的植物的信息（含template中大段文字描述的部分）：https://tree.sjtusv.com/trees/1390



