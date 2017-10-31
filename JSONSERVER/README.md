// 获取所有用户信息
http://localhost:3000/users

// 获取id为1的用户信息
http://localhost:3000/users/1

// 获取公司的所有信息
http://localhost:3000/companies

// 获取单个公司的信息
http://localhost:3000/companies/1

// 获取所有公司id为3的用户
http://localhost:3000/companies/3/users

// 根据公司名字获取信息
http://localhost:3000/companies?name=Microsoft

// 根据多个名字获取公司信息
http://localhost:3000/companies?name=Microsoft&name=Apple

// 获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

// 升序排序 asc升序 desc降序
http://localhost:3000/companies?_sort=name&_order=asc

// 获取年龄30及以上的
http://localhost:3000/users?age_gte=30

// 获取年龄在30到40之间
http://localhost:3000/users?age_gte=30&age_lte=40

// 搜索用户信息
http://localhost:3000/users?q=h


### 步骤
cd ~
sudo cnpm install -g json-server	全局
cd 文件夹
npm init --yes					package.json
cnpm install json-server --save		本地
cnpm run json:server    配置package.json的scripts(json:server)后 运行

### postman
先输入网址
get			查询      输入网址
post      	添加      设置header(key:Content-Type;value:application/json)和body(raw),写完后点击send
delete		删除		 网址后加上要删除的id
patch   	修改		 网址后加上要修改的id,设置header和body,下面写上要修改的信息