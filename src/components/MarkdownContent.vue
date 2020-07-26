<template>
    <div class="markdown" v-html="htm" v-highlight>

    </div>
</template>

<script>

    export default {
        name: "MarkdownContent",
        data(){
            return {
                htm : "",
                md : `# 关于数据库主键的细节
* 对主键的要求，最关键的一点是：记录一旦插入到表中，主键最好不要再修改，因为主键是用来唯一定位记录的，修改了主键，会造成一系列的影响。
* **所以，选取主键的一个基本原则是：不使用任何业务相关的字段作为主键。(例如像身份证，手机号，邮箱地址这类与业务相关的字段都不适合作为主键）**



# SQL语法
[廖雪峰官方网站](https://www.liaoxuefeng.com/wiki/1177760294764384/1179610544539040)
* 查询数据库表的数据。
* 使用SELECT关键字。
\`\`\`SQL
SELECT * FROM <表名> --查询表中所有的数据，*可以写某一个或某几个列的名称。
\`\`\`

## 条件查询
* **关键字WHERE(where)**
* 语法如下
\`\`\`SQL
SELECT * FROM <表名> WHERE <条件表达式>
--例子
SELECT * FROM student WHERE score >= 90; --查询student表中分数大于90的所有记录。
\`\`\`

* **条件表达式可以有多个条件组合，组合逻辑有与(AND),或(OR),非(NOT)**，基本来说，语法和普通的变成语言还是很类似的。
* 除开括号，这三种组合逻辑的优先级为 NOT > AND > OR

* **在条件表达式里，不等于是<>，而不是!=,这个要注意一下。**


## 投影查询
* **定义:只希望查询的结果集中只包含几个列的数据，可以用某种手段达成这种效果。这种操作称为投影查询。**
* 查询结构如下。
\`\`\`SQL
SELECT <name1>,<name2>,<name3> ... FROM ---这样可以达到投影查询的效果。
\`\`\`
* 投影查询可以更改列的顺序和名称，顺序是在查询时自定义的顺序(如上述的name1,name2,name3)。
* 改名结构如下(以逗号为分界线，前面是原表列名，后是对应新名)
\`\`\`SQL
SELECT id, score points, name FROM students;
\`\`\`

![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E6%8A%95%E5%BD%B1%E6%9F%A5%E8%AF%A2%E6%9B%B4%E5%90%8D.png)


* 同样也可以把投影查询和条件查询结合在一起。

\`\`\`SQL
SELECT id, score points, name FROM students WHERE gender = 'M';
\`\`\`

![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E6%8A%95%E5%BD%B1%E6%9F%A5%E8%AF%A2%E5%8A%A0%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2.png)


## 排序
* 默认结构查询的结构都是根据主键来排序的结构，但有时候我们希望结果是依据其他列属性来排列的，可以使用**OEDER BY**子句来实现，下面例子是根据分数大小来对查询结构来进行排序的。
\`\`\`SQL
SELECT score, name, gender, id FROM students ORDER BY score;
\`\`\`
![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E6%8E%92%E5%BA%8F.png)

* **默认是从小到大进行排序的，在后面加上关键字DESC则表示倒叙。**

* 注意OEDER BY子句要放到WHERE子句后面。
\`\`\`SQL
SELECT id, name, gender, score
FROM students
WHERE class_id = 1
ORDER BY score DESC;
\`\`\`
![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E5%AD%90%E5%8F%A5%E9%A1%BA%E5%BA%8F.png)


# 分页处理
* 分页关键词 LIMIT x OFFSET y
* **x为每页大小，y为从第几记录开始展示。(记录计数是从0开始)**
\`\`\`SQL
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 9; --每页3个，从第九个记录开始展示，一直到本页结束。(即9，10，11这三个记录)
\`\`\`
* **设页大小为pageSize，页索引为pageIndex，则LIMIT = pageSize， OFFSET = (pageIndex - 1） * (pageSize)**


# 聚合查询
* 对于统计总数、平均数这类计算，SQL提供了专门的聚合函数，使用聚合函数进行查询，就是聚合查询，它可以快速获得结果。
1. count(\\<name>) 计数
2. sum(\\<name>) 计算某一列的合计值，该列必须为数值类型
3. avg(\\<name>) 计算某一列的平均值，该列必须为数值类型
4. max(\\<name>) 计算某一列的最大值
5. min(\\<name>) 计算某一列的最小值

* 例如下面是查询students数据库的记录数。
\`\`\`SQL
SELECT count(*) num from students
\`\`\`
![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E8%81%9A%E5%90%88%E6%9F%A5%E8%AF%A2.png)

* **需要注意的是，输出的本身也是个二维结构表，只不过只有一行一列，并且列名为count(*)，只不过这里改成了num。所有的聚合查询都是这个原理。**

# 分组
* 关键字GROUP BY，提供分组聚合的目的，指定一个或者多个列名来实现自动分组操作。
* **例如下例按照班级来统计每个班的人数。**
\`\`\`SQL
SELECT class_id, COUNT(*) num
FROM students
GROUP BY class_id;
\`\`\`
![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E5%88%86%E7%BB%841.png)

* $\\color{red}{练习题: 请使用一条SELECT查询查出每个班级男生和女生的平均分：}$

\`\`\`SQL
select class_id , gender , round(avg(score),2)  averageScore  --round作用为保留两位小数
from students
group by class_id,gender
order by gender
\`\`\`
* 结果如下。
![](https://photo-1258955954.cos.ap-chengdu.myqcloud.com/SQL/%E5%88%86%E7%BB%842.png)
`
            }
        },
        mounted() {
            var that = this;
            setTimeout(() => {
                var converter = new showdown.Converter();
                this.htm = converter.makeHtml(that.md)
            },1000)

        }
    }
</script>

<style scoped>
.markdown{
    width: 40%;
    line-height: 50px;
    min-width: 400px;
}


</style>