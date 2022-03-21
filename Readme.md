# 前言

js中的数组自带了非常多的方法，而且这些都是大厂前端面试时喜欢问的，稍对这些基础不太了解，面试官就会认为你基础不牢，这样面试就很容易翻车；而且，很多笔试题也会涉及到数组的原生方法，有些题需要对数组的一些特定方法有深入了解才能写出答案。

所以在这节里，我就来带大家好好地归纳总结一些数组必知必会的知识点。

首先必须记住的是，在js中，**数组就是object**，因为它的原型链最终会链到Object.prototype上，所以，所有Object.prototype中定义的对象原型方法，在Array上也能使用。

所有对象都具有toLocaleString()，toString()和valueOf()方法。其中，调用数组的toString()方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串，valueOf()返回的还是数组，而toLocaleString()经常也返回与toString()和valueOf()方法相同的值，但也不一定总是如此。

下面这张图，是Array.prototype的打印结果，它列举出了Array的原型对象中的属性和方法。



![图片](https://mmbiz.qpic.cn/mmbiz_png/E5BU39tUSUB2SmA3erxHWcsDSlAUib7JVm2fSJ3Tr5P0gZMLdibYzKZZHbDNdwD2Hq3LYVWaPGIsibKwiaCpf0jE5A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

接下来讲讲Array中常用的操作和简单示例。





# 数组元素的添加

增加数组元素有三种方法：`unshift()` 、`push()`、 `splice()`

- `arrayObj.unshift([item1 [item2 [. . . [itemN ]]]])`将一个或多个新元素添加到数组开始位置(即**头部**)，数组中的原元素自动后移；**并返回数组新长度**。
- `arrayObj.push([item1 [item2 [. . . [itemN ]]]])`将一个或多个新元素添加到数组结尾；**并返回数组新长度**。
- `arrayObj.splice(insertPos,0,[item1[, item2[, . . . [,itemN]]]])` 将一个或多个新元素插入到数组的指定位置，插入位置的元素自动后移，返回""。

示例

```
// unshift()
var a = [1,2.5,"a","yes"];
var temp = a.unshift(-1,-2.2);
console.log(a);     //[-1, -2.2, 1, 2.5, "a", "yes"]
console.log(temp);  //6 数组的长度

// push()
var a = [1,2.5,"a","yes"];
var temp = a.push(-1,-2.2);
console.log(a);     //[1, 2.5, "a", "yes", -1, -2.2]
console.log(temp);  //6 数组的长度
  
// splice()    将数据添加到原数组结尾
var a = [1,2.5,"a","yes"];
var temp = a.splice(a.length,0, -1,-2.2);    //此将数据添加到原数组结尾，同push()
console.log(a);     //a: [1, 2.5, "a", "yes", -1, -2.2]
console.log(temp);  //[] 空数组

// splice()    将数据添加到原数组开头
var a = [1,2.5,"a","yes"];
var temp = a.splice(0,0, -1,-2.2);   //此将数据添加到原数组开头，同unshift()
console.log(a);     //a: [-1, -2.2, 1, 2.5, "a", "yes"]
console.log(temp);  //[] 空数组

// splice()    将数据添加到具体位置
var a = [1,2.5,"a","yes"];
var temp = a.splice(2,0, -1,-2.2);   //此将数据添加到第三个位置
console.log(a);     //a: [1, 2.5, -1, -2.2, "a", "yes"]
console.log(temp);  //[] 空数组
```





# 数组元素的删除

删除数组元素有三种方法：`shift() pop() splice()`

- `arayObj.shift()` 删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined
- `arrayObj.pop()` 删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined
- `arrayObj.splice(deletePos,deleteCount)` 删除从指定位置deletePos开始的指定数量deleteCount的元素，以数组形式返回所移除的元素

```
// shift()
var a = [1,2.5,"a","yes"];
var temp = a.shift();
console.log(a); //[2.5, "a", "yes"]
console.log(temp);  // 1  原数组第一项
      
// pop()
var a = [1,2.5,"a","yes"];
var temp = a.pop();
console.log(a); // [1, 2.5, "a"]
console.log(temp);  // yes  原数组最后一项

// splice()    删除指定位置开始的数据。第一个参数是指定位置，第二个参数是删除从指定位置开始的数据个数
var a = [1,2.5,"a","yes"];
var temp = a.splice(1,1);       //删除第2个位置开始的1个数据，
console.log(a); // [1, "a", "yes"]
console.log(temp);  // [2.5]  以数组形式返回移除的元素

// var temp = a.splice(1,2);       //删除第2个位置开始的2个数据，
console.log(a); // [1, "yes"]
console.log(temp);  // [2.5, "a"]  以数组形式返回移除的元素
```





# 数组的合并

将两个以上数组合并为一个数组，常用的方法是`concat()`，此方法返回一个新的数组，而参与合并的原数组不变。

举例说明：

```
var a = [1,5,2,15,6];
var b = ["You","No","a","yes"];
var temp = a.concat(b); //将b合并到a后面
var tempdata = b.concat(a);     //将a合并到b后面
console.log(temp);      // [1, 5, 2, 15, 6, "You", "No", "a", "yes"]
console.log(tempdata);      //["You", "No", "a", "yes", 1, 5, 2, 15, 6]
console.log(a)   // [1,5,2,15,6]
console.log(b)  // ["You","No","a","yes"]
```





# 数组元素的访问

获取数组元素值的方法：`按元素的索引获取元素值`和`slice()`方法。

注：一次只能返回一个元素值，不能切片分块返回，也不能从数组末尾以负数形式返回。

如果想使用切片方法和用负数取后面的值，要使用`slice(start,end)`方法。

举例说明：

```
var a = [1,2.5,"a","yes"];
var temp = a[1];
console.log(temp);  // 2.5  返回数组索引为1的元素值

//下面这两种都是错误的，无法获取想要的数据
var temp = a[1,2]; 
var temp = a[-1];  


// slice方法
console.log(a.slice(1,3)) //  [2.5, "a"]
console.log(a.slice(2,3)) //  ["a"]
console.log(a.slice(3,3)) // []
```





# 数组的建立

```
var arrayObj = new Array(); //创建一个数组 通过内置对象Array()进行创建

var arrayObj = new Array(size); //创建一个数组并指定长度，注意不是上限，是长度

var arrayObj = new Array([1,2,3]); //创建一个数组并指定长度，注意不是上限，是长度

//创建一个数组并初始化赋值
var arrayObj = new Array([element0[, element1[, ...[, elementN]]]]); 

var arrayObj = [];    //也可以创建一个数组，并已完成初始化,只不过是个空的,没有实际元素
```

注：需要说明的是，虽然第二种方法创建数组指定了长度，但实际上所有情况下数组都是变长的，也就是说即使指定了长度为5，仍然可以将元素存储在规定长度以外的，即js中的数组是动态数组。

数组是JavaScript提供的一个内部对象，它是一个标准的集合，我们可以添加(push)、删除(shift)里面元素，还可以通过for循环遍历里面的元素。





# 数组元素排序

数组的排序：是在原数组的基础上对数组元素进行整理，使得元素按照一定顺序排列，**不会生成副本**。

数组排序一般使用数组对象内置方法`sort()`。`sort()`方法用于对数组的元素进行排序。

如果调用该方法时没有传入参数，将按字母顺序对数组中的元素进行默认排序，是按照字符编码的顺序进行排序。如果想按其他标准进行排序，则需要提供比较函数，该函数比较两个值，然后返回一个数字来说明这两个值的大小。比较函数具有两个参数 a 和 b，其返回值如下：

- 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值(-1)。
- 若 a 等于 b，则返回 0。
- 若 a 大于 b，则返回一个大于 0 的值。

举例说明：

- 纯字符串排序

```
//   返回排好序的原数组 先按第一个字母排序，第一个相同则按第二个排序，以此类推。
var a = ["zhao","qian","sun","li","zhou","wu","zheng"];
var temp = a.sort();
console.log(a); 
// ["li", "qian", "sun", "wu", "zhao", "zheng", "zhou"]
console.log(temp);  
// ["li", "qian", "sun", "wu", "zhao", "zheng", "zhou"]      
```

- 字符串和数字混杂

```
var a = ["zhao","qian",1,"li","zhou","wu",2];
var temp = a.sort();
console.log(a); //[1, 2, "li", "qian", "wu", "zhao", "zhou"] 
// 先排数字，后排字符串
// 其实这的1,2排序看似正确，其实不是按照他们的大小排的，而是按照1和2的编码顺序排的。从下面这个例子可以看出。
```

- 纯数字排序(但不提供比较函数)

```
var a = [11,5,1,13,20,-1,2];
var temp = a.sort();
console.log(a);  // [-1, 1, 11, 13, 2, 20, 5] 
// 可以看出默认排序是按照字符编码顺序排的，而不是大小
```

- 纯数字正确排序(需要提供排序函数)

```
var a = [11,5,1,13,20,-1,2];

// 这才是正确的从小到大排序
function sortNumber(a,b){return a - b}

var temp = a.sort(sortNumber);
console.log(a);  // [-1, 1, 2, 5, 11, 13, 20]  


// 这是从大到小排序
function sortNumber(a,b) { return b – a}
console.log(a);  // [20, 13, 11, 5, 2, 1, -1] 这是从大到小排序结果        
```





# 数组元素裁剪

`数组的裁剪`：是在原数组基础上截取出一个小的数组，以便于使用和存放。截取的元素组成一个新的数组副本，而**原数组不发生改变**。

数组的裁剪一般使用`slice()`函数，`slice(start,end)`:返回从原数组中指定开始下标到结束下标之间的元素组成新的数组 ，若结束下标超出原数组总长，则以原数组结尾处下标为结束下标。

```
var a = [1,2.5,"a","yes",12,23];
var temp = a.slice(2,5); //裁剪下标为2到下标为5的元素；结束下标未超出数组总长
console.log(temp);  // ["a", "yes", 12]
console.log(a);     // [1, 2.5, "a", "yes", 12, 23]  原数组不发生改变 

var temp = a.slice(2,15);   //裁剪下标为2到下标为15的元素；结束下标超出数组总长
console.log(temp);  // ["a", "yes", 12, 23]  结束下标自动以原数组结尾下标为结束下标
console.log(a);     // [1, 2.5, "a", "yes", 12, 23]
```





# 数组的格式化

有时候需要将数组转化为字符串进行传参，或者进行数据存储等，那么这时候就需要将数组转化成字符串。

join() 方法用于把数组中的所有元素放入一个字符串，元素通过指定的分隔符进行分隔。

Join方法返回一个新的字符串副本，**不会对原数组进行修改**。

语法格式：arrayObject.join(separator)  返回一个字符串，该字符串是通过把 arrayObject 的每个元素转换为字符串，然后将这些字符串连接起来，在两个元素之间插入separator 字符而生成。

```
var a = [1,2.5,"a","yes",12,23];
var temp = a.join();  //默认格式化，不提供连接字符
console.log(temp); //1,2.5,a,yes,12,23
var a = [1,2.5,"a","yes",12,23];
var temp = a.join(“|”);   //提供连接字符,但连接字符必须是字符(“x”)形式
console.log(temp); // 1|2.5|a|yes|12|23
console.log(a);  // [1, 2.5, "a", "yes", 12, 23]
```





# 把Array当做栈、队列使用

- 栈

  栈顶进：push()

  栈顶出：pop()

- 队列

  队尾进：push()

  队头出：shift()

- 双向队列

  队头进：unshift()

  队头出：shift()

  队尾进：push()

  队尾出：pop()

# 改变原数组的方法

以下方法的使用会改变原数组的值，我在此做了个汇总，注意使用。

- fill() :用于将一个固定值替换数组的元素。
- pop()：删除数组最后一个元素，并返回该元素
- push()：在数组尾部添加元素，并返回更新后的数组长度
- shift()：删除数组的第一个元素，并返回该元素
- unshift()：在数组第一位添加元素，并返回更新后的数组长度
- sort()：对数组排序（按字符ASCII进行排序），也可添加回调函数按照想要的规则排序
- reverse()：数组反转
- splice(index, howmany, 新数据)：返回被删除元素所组成的数组。

如果想使用这些方法，又不想改变原数组呢？

解决方法：深拷贝

```
// 此时需要b等于a，但是改变b时，不影响a
var a = [1, 2, 3, {a:"a", b:"b"}];


// 拷贝的depth为1
//方法一，slice()
var b1 = a.slice();

//方法二，concat()
var b2 = [].concat(a);



// 完全深拷贝，即无论深度为多少，都能拷贝
// 方法一，JSON.parse(JSON.stringify())，但涉及函数、对象等时不建议用
var b3 = JSON.parse(JSON.stringify(a));

// 方法二,自己手写深拷贝
var deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
var b4 = deepCopy(a);
```





# Array.prototype中的所有内容

## concat()

通过合并（连接）现有数组来创建一个新数组。



### 定义和用法

concat() 方法用于连接两个或多个数组。

该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。



### 语法

```
arrayObject.concat(arrayX,arrayX,......,arrayX)
```

| 参数   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| arrayX | 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。 |



### 返回值

返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

### 注意点

- concat() 方法不会更改现有数组。它总是返回一个新数组。（可用来实现数组的拷贝，但是只拷贝第一层，并不属于真正的深拷贝）
- concat() 方法可以使用任意数量的数组参数：

### 实例

- 实例（合并两个数组）

```
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys
```

- 实例（合并三个数组）

```
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // 将arr1、arr2 与 arr3 连接在一起
```

concat() 方法也可以将值作为参数：

- 实例（将数组与值合并）

```
var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]); 
```





## constructor()

这个是构造函数，属于原型链上的方法，平时做题不会用到，这里不赘述了。





## copyWithin()

### 定义和用法

copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。

### 语法

```
array.copyWithin(target, start, end)
```

### 参数

| 参数   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| target | 必需。复制到指定目标索引位置。                               |
| start  | 可选。元素复制的起始位置。                                   |
| end    | 可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。 |





### 实例

复制数组的前面两个元素到后面两个元素上：

```
var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.copyWithin(2, 0);
```





```
// fruits
Banana,Orange,Banana,Orange
```





## entries()

### 定义和用法

entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。

迭代对象中数组的索引值作为 key， 数组元素作为 value。

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.entries(fruits)
[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]
```

简单说就是 Object.entries() 可以把一个对象的键值以数组的形式遍历出来，结果和 for…in 一致，但不会遍历原型属性。

### 语法

```
array.entries()
```





### 实例

- 传入对象

```
const obj = { name: 'xixixi', age: '23' }; 
console.log(Object.entries(obj));  // [['name', 'xixixi'], ['age', '23']]
```

- 数组

```
const arr1 = [1, 2, 3]; 
console.log(Object.entries(arr1));  // [['0', 1], ['1', '2'], ['2', '3']]
```

- 数组（数组中包含对象）

```
const arr1 = [{ a: 1 }, 2, 3]; 
console.log(Object.entries(arr1));  // [['0', { a: 1 }], ['1', '2'], ['2', '3']]
```

- 数组（数组中的值全部为对象）

```
const arr2 = [{ a: 1 }, { b: 2 }, { c: 3 }]; 
console.log(Object.entries(arr2));
// [[‘0’, { a: 1 }], [‘1’, { b: 2 }], [‘2’, { c: 3 }]])
```

- 字符串

```
const str1 = '123'; 
console.log(Object.entries(str1)); 
// [[‘0’, ‘1’], [‘1’, ‘2’], [‘2’, ‘3’]]
```

- 数字、浮点数

```
const num = 123; 
console.log(Object.entries(num));   // []

const float1 = 12.3; 
console.log(Object.entries(float1)); // []
```

- 将 Object 转化为 Map

new Map() 构造函数接受一个可迭代的 entries 。借助 Object.entries 方法你可以很容易的将 Object 转换为 Map。

```
const obj = { name: 'xixixi', age: '123' }; 
console.log(Object.entries(obj));  // [['name', 'xixixi'], ['age', '123']]
const map = new Map(Object.entries(obj)); 
console.log(map); // Map {'name' => 'xixixi', 'age' => '123'}
```

## every()

### 定义和用法

- every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
- every() 方法使用指定函数检测数组中的所有元素：
- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
- 如果所有元素都满足条件，则返回 true。

### 注意点

- every() 不会对空数组进行检测。

- every() 不会改变原始数组。

### 语法

```
array.every(function(currentValue,index,arr), thisValue)
```

------

### 参数说明

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述currentValue必须。当前元素的值index可选。当前元素的索引值arr可选。当前元素属于的数组对象 |
| thisValue                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined" |

### 实例

every()是对数组中每一项运行给定函数，如果该函数对数组中每一项都返回true,则最终返回true。

例如答题，有10道题目，只有在10道题全部答对时，才放行。只要答错任意一道，最终结果都是false。

```
var arr = [ 1, 2, 3, 4, 5, 6 ]; 

console.log( arr.every( function( item, index, array ){ 
    item = item + 1; console.log(arr);
    return item > 3; 
}));

// 输出 可以看出item只是一个形参，不会改变arr中的值。
[1, 2, 3, 4, 5, 6] 6次
false
```





## fill()

```
var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.fill("Runoob");

// fruits输出结果：
Runoob,Runoob,Runoob,Runoob
```

### 定义和用法

fill() 方法用于将一个固定值替换数组的元素。

### 语法

```
array.fill(value, start, end)
```

### 参数

| 参数  | 描述                                     |
| :---- | :--------------------------------------- |
| value | 必需。填充的值。                         |
| start | 可选。开始填充位置。                     |
| end   | 可选。停止填充位置 (默认为 array.length) |

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Runoob", 2, 4);
fruits输出结果：
Banana,Orange,Runoob,Runoob
```





## filter()

### 语法

```
array.filter(function(currentValue,index,arr), thisValue)
```





### 定义和用法

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。





### 注意点

- filter() 不会对空数组进行检测。

- filter() 不会改变原始数组。





### 参数说明

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述currentValue必须。当前元素的值index可选。当前元素的索引值arr可选。当前元素属于的数组对象 |
| thisValue                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined" |

### 返回值

返回数组，包含了符合条件的所有元素。如果没有符合条件的元素则返回空数组。

### 实例

- 欢迎阅读我的另一篇博文《自己动手实现一个Array.prototype.filter？》
- 过滤数组

```
var ages = [32, 33, 16, 40];

// 是否有18岁
function checkAdult(age) {
    return age >= 18;
}


ages.filter(checkAdult);

// 输出结果为:
32,33,40
```





## find()

用于查找第一个符合条件的值。

### 定义和用法

- find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
- find() 方法为数组中的每个元素都调用一次函数执行：
- 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
- 如果没有符合条件的元素返回 undefined

### 注意点

- find() 对于空数组，函数是不会执行的。
- find() 并没有改变数组的原始值。

### 语法

```
array.find(function(currentValue, index, arr),thisValue)
```

### 参数

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必需。数组每个元素需要执行的函数。函数参数:参数描述currentValue必需。当前元素index可选。当前元素的索引值arr可选。当前元素所属的数组对象 |
| thisValue                         | 可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值 |

### 实例

```
var ages = [3, 10, 18, 20];
 
function checkAdult(age) {
    return age >= 18;
}
 
console.log(ages.find(checkAdult));
// 输出18
```





## findIndex()





### 定义和用法

- findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
- findIndex() 方法为数组中的每个元素都调用一次函数执行：
- 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
- 如果没有符合条件的元素返回 -1

### 注意

- findIndex() 对于空数组，函数是不会执行的。
- findIndex() 并没有改变数组的原始值。

### 语法

```
array.findIndex(function(currentValue, index, arr), thisValue)
```

### 参数

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必须。数组每个元素需要执行的函数。函数参数:参数描述currentValue必需。当前元素index可选。当前元素的索引arr可选。当前元素所属的数组对象 |
| thisValue                         | 可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值 |

### 示例

```
var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.findIndex(checkAdult);  // 2
```



## flat()

`flat()`函数将特定深度的子阵列重新串接成为一个新的数组，即数组扁平化。



### 语法

```
var newArray = arr.flat([depth]);
```

### 参数

- `depth` 选择性。指定矩阵展开的深度，预设为1。

### 返回值

函数将会回传一个由原先数组扁平化而成的新矩阵。

### 示例

```
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```



## flatMap()

### 定义和用法

`flatMap` 方法与 `map` 方法和深度depth为1的 `flat` 几乎相同.

`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成**一个新数组**。

它与 map 连着深度值为1的 flat 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

### 语法

```
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

### 参数

- `callback`

  可以生成一个新数组中的元素的函数，可以传入三个参数：

- - `currentValue`当前正在数组中处理的元素
  - `index`可选的。数组中正在处理的当前元素的索引。
  - `array`可选的。被调用的 `map` 数组

- `thisArg`可选

  可选的。执行 `callback` 函数时 使用的`this` 值。

### 返回值

一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为1。

### 示例

- **flapMap只会自动扁平化一层**

```
var arr1 = [1, 2, 3, 4];
var arr2 = [1,2,3,4,[5,6,7,[8,9]]]   // 嵌套了3层的数组

arr1.flatMap(x=>{
    return x*2
}) 
// [2, 4, 6, 8]

arr2.flatMap(x=>{
    return x*2
})
// [2, 4, 6, 8, NaN]

arr2.flatMap(x=>{
    if(x instanceof Array){
        return x;
    }
    return x*2
})
// [2, 4, 6, 8, 5, 6, 7, [8,9]]
// 从只中可看出，flapMap只会自动扁平化一层
```





- **map() 与 flatMap()**

```
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

值得注意的是，flatMap与map()的主要区别是，前者会主动拆分矩阵，达到扁平化的效果。

```
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

- **在一个 map() 期间增加或去除一些项**

`flatMap` 能用于在map期间增删项目（也就是修改items的数量）。换句话说，它允许你遍历很多项使之成为另一些项（靠分别把它们放进去来处理），而不是总是一对一。从这个意义上讲，它的作用类似于 filter的对立面。只需返回一个1项元素数组以保留该项，返回一个多元素数组以添加项，或返回一个0项元素数组以删除该项。





## forEach()

### 定义和用法

forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。

### 注意点

- forEach() 对于空数组是不会执行回调函数的。
- forEach() 不会改变原数组的值
- forEach() 本身是不支持的 continue 与 break 语句的，我们可以通过 some 和 every 来实现。使用 **return** 语句实现 **continue** 关键字的效果
- **forEach()**: 没有返回值，本质上等同于 for 循环

### 语法

```
array.forEach(function(currentValue, index, arr), thisValue)
```

### 参数

| 参数                               | 描述                                                         |
| :--------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index, arr) | 必需。数组中每个元素需要调用的函数。函数参数:参数描述currentValue必需。当前元素index可选。当前元素的索引值。arr可选。当前元素所属的数组对象。 |
| thisValue                          | 可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值 |

### 举例

```
let arr = [1,23,234,34535,234,123,1235546];
arr.forEach((x)=>{
 x = x*2;
 console.log(x);
})
// 2 46 468 69070 468 246 2471092

console.log(arr)
// [1, 23, 234, 34535, 234, 123, 1235546]  原数组未发生改变
```





## includes()

### 定义和用法

includes() 方法用于判断字符串是否包含指定的子字符串。

如果找到匹配的字符串则返回 true，否则返回 false。

### 注意点

includes() 方法区分大小写。

### 语法

```
string.includes(searchvalue, start)
```

### 参数值

| 参数        | 描述                                     |
| :---------- | :--------------------------------------- |
| searchvalue | 必需，要查找的字符串。                   |
| start       | 可选，设置从那个位置开始查找，默认为 0。 |

### 返回值

| 类型    | 描述                                            |
| :------ | :---------------------------------------------- |
| Boolean | 如果找到匹配的字符串返回 true，否则返回 false。 |

### 举例

```
var str = "world, Hello world, welcome to the Runoob, world.";
str.includes("world");  // true
str.includes("world", 12);   // true
str.includes("world", 50);  // false
```





## indexOf()

### 定义和用法

indexOf() 方法可返回数组中某个指定的元素位置。

该方法将从头到尾地检索数组，看它是否含有对应的元素。开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。如果找到一个 item，则返回 item 的第一次出现的位置。开始位置的索引为 0。

如果在数组中没找到指定元素则返回 -1。

### 注意点

- indexOf() 方法区分大小写。
- 类似方法 lastIndexOf() 。

### 参数值

| 参数  | 描述                                                         |
| :---- | :----------------------------------------------------------- |
| item  | 必须。查找的元素。                                           |
| start | 可选的整数参数。规定在数组中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。 |

### 返回值

| 类型   | 描述                                          |
| :----- | :-------------------------------------------- |
| Number | 元素在数组中的位置，如果没有搜索到则返回 -1。 |

### 示例

```
var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
var a = fruits.indexOf("Apple",4);  // 6
var a = fruits.indexOf("Apple", 6);  // 6  
var a = fruits.indexOf("Apple", 7);  // -1 
```





## join()

### 定义和用法

join() 方法用于把数组中的所有元素放入一个字符串。

元素是通过指定的分隔符进行分隔的。

它的行为类似 toString()，但是可以规定分隔符，和python中list的join方法作用一样。

### 语法

```
arrayObject.join(separator)
```

| 参数      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| separator | 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。 |

### 返回值

返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。

### 实例

```
var fruits = ["Banana", "Orange","Apple", "Mango"];
fruits.join();// "Banana,Orange,Apple,Mango"
fruits.join(" * "); // Banana * Orange * Apple * Mango 
```





## keys()

### 定义和用法

keys() 方法用于从数组创建一个包含数组键的可迭代对象。

如果对象是数组返回 true，否则返回 false。

### 语法

```
array.keys()
```

没有参数。

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.keys();  // Array Iterator {}
keys.next() // {value: 0, done: false}
keys.next() //  {value: 1, done: false}
```





## lastIndexOf()

### 定义和用法

lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置，从该字符串的后面向前查找。

如果要检索的元素没有出现，则该方法返回 -1。

该方法将从尾到头地检索数组中指定元素 item。开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时）。如果找到一个 item，则返回 item 从尾向前检索第一个次出现在数组的位置。数组的索引开始位置是从 0 开始的。

如果在数组中没找到指定元素则返回 -1。

**提示：** 如果你想查找数组首次出现的位置，请使用 indexOf() 方法。

### 语法

array.lastIndexOf(item,start)

| 参数  | 描述                                                         |
| :---- | :----------------------------------------------------------- |
| item  | 必需。规定需检索的字符串值。                                 |
| start | 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。 |

### 返回值

| Type   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| Number | 如果在 stringObject 中的 fromindex 位置之前存在 searchvalue，则返回的是出现的最后一个 searchvalue 的位置。 |

### 实例

```
var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
var a = fruits.lastIndexOf("Apple");  
a // 6
var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
var a = fruits.lastIndexOf("Apple",4);
a // 2
```

## length

这个没啥好说的，就是数组的长度，对原数组元素的增加和删除都会改变这一值。

值得注意的事，可以直接改写数组的length的长度，以此删除元素和增加空元素。删除元素时，只会保留前length项。

```
let arr = [1,23,234,34535,234,123,1235546]
arr.length = 2
arr //  [1, 23]
arr.length = 10
arr //  [1, 23, empty × 8]
```





## map()

### 定义和用法

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

### 注意点

- map() 不会对空数组进行检测。
- map() 不会改变原始数组。

### 语法

```
array.map(function(currentValue,index,arr), thisValue)
```

------

### 参数说明

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述currentValue必须。当前元素的值index可选。当前元素的索引值arr可选。当前元素属于的数组对象 |
| thisValue                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。 |

### 示例

```
var numbers = [65, 44, 12, 4];
numbers.map(x=>x*2) // [130, 88, 24, 8]
```





## pop()

### 定义和用法

pop() 方法用于删除并返回数组的最后一个元素。

### 语法

```
arrayObject.pop()
```

### 返回值

arrayObject 的最后一个元素。

### 说明

pop() 方法将删除 arrayObject 的最后一个元素，**把数组长度减 1**，并且返回它删除的元素的值。

如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();   // "Mango"
// fruits  ["Banana", "Orange", "Apple"]
```





## push()

### 定义和用法

push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

### 语法

```
arrayObject.push(newelement1,newelement2,....,newelementX)
```

| 参数        | 描述                             |
| :---------- | :------------------------------- |
| newelement1 | 必需。要添加到数组的第一个元素。 |
| newelement2 | 可选。要添加到数组的第二个元素。 |
| newelementX | 可选。可添加多个元素。           |

### 返回值

把指定的值添加到数组后的新长度。

### 说明

- push() 方法可把它的参数顺序添加到 arrayObject 的尾部。
- **它直接修改 arrayObject**，而不是创建一个新的数组。
- push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。

### 实例

```
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

console.log(arr) // ["George", "John", "Thomas"]

arr.push("我进来啦")
console.log(arr)   // ["George", "John", "Thomas", "我进来啦"]
```





## reduce()

reduce，可以按照字面意思理解一下，相当于是一个降维的操作。

建议来看我另外两篇博文，相信看完后，对reduce相关的内容就了如指掌了。

《一文带你彻底搞懂js的Array.prototype.reduce()方法！》

《自己动手实现一个Array.prototype.reduce?》

### 定义和用法

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

reduce() 可以作为一个高阶函数，用于函数的 compose。

### 注意点

- reduce() 对于空数组是不会执行回调函数的。
- reduce()不会改变数组的值。

### 语法

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

### 参数

| 参数                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| function(total,currentValue, index,arr) | 必需。用于执行每个数组元素的函数。函数参数:参数描述total必需。初始值, 或者计算结束后的返回值。currentValue必需。当前元素currentIndex可选。当前元素的索引arr可选。当前元素所属的数组对象。 |
| initialValue                            | 可选。传递给函数的初始值                                     |





### 实例

1、求数组中所有元素的值的和

```
const arr01 = [10,20,30]
const result01 = arr01.reduce((total, currentValue)=>{
    currentValue = currentValue*2;
    return total + currentValue
}, 0)

console.log(result01)  // 120
console.log(arr01) // [10,20,30]
```

2、求对象数组中指定属性值的和

```
const arr02 = [
    {x:10}, {x:20}, {x:30}
]

const result02 = arr02.reduce((total, currentValue)=>{
    return total + currentValue.x
}, 0)

console.log(result02)  // 60
```

这个reduce比较强大，可以实现很多骚功能，具体可以看我上面的两篇文章哟。

## reduceRight()

### 定义和用法

reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。

### 注意点

- reduceRight() 对于空数组是不会执行回调函数的。
- reduceRight()不会改变数组的值。

### 语法

```
array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
```

### 参数

| 参数                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| function(total,currentValue, index,arr) | 必需。用于执行每个数组元素的函数。函数参数:参数描述total必需。初始值, 或者计算结束后的返回值。currentValue必需。当前元素currentIndex可选。当前元素的索引arr可选。当前元素所属的数组对象。 |
| initialValue                            | 可选。传递给函数的初始值                                     |

### 实例

```
const arr01 = [10,20,30]
const result01 = arr01.reduce((total, currentValue)=>{
    currentValue = new String(currentValue*2);
    return total + currentValue;   
    },new String('')
)

const result02 = arr01.reduceRight((total, currentValue)=>{
    currentValue = new String(currentValue*2);
    return total + currentValue;   
    },new String('')
)

result01  // "204060"
result02  // "604020"
arr01 // [10,20,30]
```





## reverse()

### 定义和用法

reverse() 方法用于颠倒数组中元素的顺序。

### 语法

```
arrayObject.reverse()
```

### 提示

- 该方法会改变原来的数组，而不会创建新的数组。

### 语法

array.reverse()

### 返回值

| 类型  | 描述             |
| :---- | :--------------- |
| Array | 颠倒顺序后的数组 |

### 实例

```
let arr01 = [1,2,3,4,5,6]
arr01.reverse() // [6, 5, 4, 3, 2, 1]
arr01  //   [6, 5, 4, 3, 2, 1]
```





## shift()

### 定义和用法

位移与弹出等同，但处理首个元素而不是最后一个。

shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引，并返回第一个元素的值。

### 语法

```
arrayObject.shift()
```

### 返回值

数组原来的第一个元素的值。

### 说明

如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。

### 提示

**注释：**该方法会改变数组的长度。

**提示：**要删除并返回数组的最后一个元素，请使用 pop() 方法。

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // 返回"Banana"，从 fruits 删除第一个元素 "Banana"
fruits  // ["Orange", "Apple", "Mango"]
```





## slice()

### 定义和用法

slice() 方法可从已有的数组中返回选定的元素。

slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

### 提示

- slice() 方法不会改变原始数组。

### 语法

array.slice(start, end)

| 参数  | 描述                                                         |
| :---- | :----------------------------------------------------------- |
| start | 可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。 |
| end   | 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。 |

### 返回值

| Type  | 描述                                                         |
| :---- | :----------------------------------------------------------- |
| Array | 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。 |

### 实例

```
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3,-1); // 截取倒数第三个（包含）到倒数第一个（不包含）的两个元素  ["Lemon", "Apple"]
var myBest = fruits.slice(-3);  // 截取最后三个元素  ["Lemon", "Apple", "Mango"]
```





## some()

### 定义和用法

some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法会依次执行数组的每个元素：

- 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回false。

### 提示

- some() 不会对空数组进行检测。
- some() 不会改变原始数组。

### 语法

```
array.some(function(currentValue,index,arr),thisValue)
```

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述currentValue必须。当前元素的值index可选。当前元素的索引值arr可选。当前元素属于的数组对象 |
| thisValue                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined" |

### 实例

```
var ages = [4, 12, 16, 20];
ages.some(age=> age > 18);   //true
ages.some(age=> age > 20);  // false
```





## sort()

### 定义和用法

sort() 方法用于对数组的元素进行排序。

### 语法

```
arrayObject.sort(sortby)
```

| 参数   | 描述                             |
| :----- | :------------------------------- |
| sortby | 可选。规定排序顺序。必须是函数。 |

### 返回值

对数组的引用。请注意，数组在原数组上进行排序，不生成副本。

### 注意点

- **会改变原数组**

如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

- 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
- 若 a 等于 b，则返回 0。
- 若 a 大于 b，则返回一个大于 0 的值。

### 实例

```
let arr = [1,3,2,6,4,5,234,78,54,2,4, 11, 111]
arr.sort()   // [1, 11, 111, 2, 2, 234, 3, 4, 4, 5, 54, 6, 78]
arr // [1, 11, 111, 2, 2, 234, 3, 4, 4, 5, 54, 6, 78]

arr.sort((a,b)=> (a-b))  // [1, 2, 2, 3, 4, 4, 5, 6, 11, 54, 78, 111, 234]
arr.sort((a,b)=> (b-a))  //  [234, 111, 78, 54, 11, 6, 5, 4, 4, 3, 2, 2, 1]

// 不能用bool值
arr.sort((a,b)=> (a>b))  // [1, 3, 2, 6, 4, 5, 234, 78, 54, 2, 4, 11, 111]
arr.sort((a,b)=> (a<b))  // [1, 3, 2, 6, 4, 5, 234, 78, 54, 2, 4, 11, 111]
```

- 纯字符串排序

```
//   返回排好序的原数组 先按第一个字母排序，第一个相同则按第二个排序，以此类推。
var a = ["zhao","qian","sun","li","zhou","wu","zheng"];
var temp = a.sort();
console.log(a); 
// ["li", "qian", "sun", "wu", "zhao", "zheng", "zhou"]
console.log(temp);  
// ["li", "qian", "sun", "wu", "zhao", "zheng", "zhou"]      
```

- 字符串和数字混杂

```
var a = ["zhao","qian",1,"li","zhou","wu",2];
var temp = a.sort();
console.log(a); //[1, 2, "li", "qian", "wu", "zhao", "zhou"] 
// 先排数字，后排字符串
// 其实这的1,2排序看似正确，其实不是按照他们的大小排的，而是按照1和2的编码顺序排的。从下面这个例子可以看出。
```

- 纯数字排序(但不提供比较函数)

```
var a = [11,5,1,13,20,-1,2];
var temp = a.sort();
console.log(a);  // [-1, 1, 11, 13, 2, 20, 5] 
// 可以看出默认排序是按照字符编码顺序排的，而不是大小
```

- 纯数字正确排序(需要提供排序函数)

```
var a = [11,5,1,13,20,-1,2];

// 这才是正确的从小到大排序
function sortNumber(a,b){return a - b}

var temp = a.sort(sortNumber);
console.log(a);  // [-1, 1, 2, 5, 11, 13, 20]  


// 这是从大到小排序
function sortNumber(a,b) { return b – a}
console.log(a);  // [20, 13, 11, 5, 2, 1, -1] 这是从大到小排序结果        
```





## splice()

### 定义和用法

splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

### 提示

- **该方法会改变原始数组。**

- splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。

  如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。

### 语法

```
arrayObject.splice(index,howmany,item1,.....,itemX)
```

| 参数              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| index             | 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。 |
| howmany           | 必需。要删除的项目数量。如果设置为 0，则不会删除项目。       |
| item1, ..., itemX | 可选。向数组添加的新项目。                                   |

### 返回值

| 类型  | 描述                                 |
| :---- | :----------------------------------- |
| Array | 包含被删除项目的新数组，如果有的话。 |

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // []
fruits // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");  // ["Apple", "Mango"]
fruits //  ["Banana", "Orange", "Lemon", "Kiwi"]


// 使用 splice() 来删除元素
// 通过聪明的参数设定，您能够使用 splice() 在数组中不留“空洞”的情况下移除元素：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // 删除 fruits 中的第一个元素
// 第一个参数（0）定义新元素应该被*添加*（接入）的位置。
// 第二个参数（1）定义应该*删除多个*元素。
// 其余参数被省略。没有新元素将被添加。
```



## toLocaleString()

### 定义和用法

Array使用toLocaleString()数组转化为字符串。

首先调用每个数组元素的 toLocaleString() 方法,然后使用地区特定的分隔符把生成的字符串连接起来,形成一个字符串

### 语法

```
array.toLocaleString();
```

### 返回值

返回表示数组元素的字符串。

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"]; // 
fruits.toLocaleString();  // Banana,Orange,Apple,Mango
```





## toString()

### 定义和用法

JavaScript 方法 toString() 把数组转换为数组值（逗号分隔）的字符串。

### 语法

```
array.toLocaleString();
```

### 返回值

返回表示数组元素的字符串。

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();  // Banana,Orange,Apple,Mango
```





## unshift()

### 定义和用法

unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。即（在开头）向数组添加新元素，并“反向位移”旧元素。类比双端队列中，往队列头假数据的pushleft()方法。

### 提示

- 该方法将改变数组的数目。
- 将新项添加到数组末尾，请使用 push() 方法。

### 语法

array.unshift(item1,item2, ..., itemX)

| 参数                    | 描述                                       |
| :---------------------- | :----------------------------------------- |
| item1,item2, ..., itemX | 可选。向数组起始位置添加一个或者多个元素。 |

### 返回值

整数，Number 数组新长度

### 实例

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // 向 fruits 添加新元素 "Lemon"，返回值为5（添加后的数组的长度）
fruits // ["Lemon","Banana", "Orange", "Apple", "Mango"];
```





## values()

### 定义和用法

values()方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。

### 语法

```
arrayObj.values()
```

### 返回值

一个新的 `Array` 迭代对象。

### 实例

- 使用 for...of 循环进行迭代

```
let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr.values();

for (let letter of eArr) {
  console.log(letter);
} //"w" "y "k" "o" "p"
```

**Array.prototype.values** 是 **Array.prototype[Symbol.iterator]** 的默认实现。

```
Array.prototype.values === Array.prototype[Symbol.iterator]  // true 
```

- 使用 .next() 迭代

```
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true }
iteraroe.next().value;         // undefined
```

一次性：数组迭代器是一次性的，或者说临时对象

# Symbol()

Symbol是属于ES 6 引入的一个新的数据类型。

Symbol 可以创建一个独一无二的值（但并不是字符串）。

# `__proto__`

隐式原型链，这里主要是原型链相关的知识，这里就不介绍了。







