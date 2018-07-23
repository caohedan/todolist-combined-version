**参考文献**
#OOCL-Todo List Backend API Server
Java Based API Server:
Download Link: https://pan.baidu.com/s/1e1POsmQsydwo5Vd6keaIIg
Execute Command（Require：Java Version 8）:
    java -jar todo-list-rest-api-0.1.0.jar
Rest API Method Calling Example
Resource Structure Example:

{
    "id": 1,
    "content": "Remove unused imports", 
    "status": "active"
}
**注意：** status="active"/"completed"
Call API Example:

Get All Todos:(已经在数据库中初始化了几条数据)
GET: http://localhost:8080/api/todos
注：获取数据以后，todos数组是返回对象的一个属性，需要在代码中拿到以后使用

Add a Todo:
POST: http://localhost:8080/api/todos
Get Todos By Status:
GET ALL: http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active
GET active: http://localhost:8080/api/todos/search/statusOfTodos?status=active
GET completed: http://localhost:8080/api/todos/search/statusOfTodos?status=completed
Toggle The Status of Todo
PATCH http://localhost:8080/api/todos/5
body:
{
    "status" : "completed"
}
Update The Content of Todo
PATCH http://localhost:8080/api/todos/5
body:
{
    "content" : "updated new content"
}
 
