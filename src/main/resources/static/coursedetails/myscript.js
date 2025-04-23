function showcourse(){
fetch("http://localhost:8080/course")
.then((response) => response.json())
.then((courses)=>{
const datatable=document.getElementById("coursetable")
courses.forEach(course=>{
    var row=`<tr>
        <td>${course.id}</td>
        <td>${course.name}</td>
        <td>${course.courses}</td>
        <td>${course.duration}</td>
   
    </tr>`
    datatable.innerHTML+=row;
});

});


}
function enrolledcourse(){
    fetch("http://localhost:8080/enroll")
    .then((response) => response.json())
    .then((stu)=>{
    const datatable=document.getElementById("enrolltable")
    stu.forEach(stu=>{
        var row=`<tr>
            <td>${stu.name}</td>
            <td>${stu.emailid}</td>
            <td>${stu.coursename}</td>
       
        </tr>`
        enrolltable.innerHTML+=row;
    });
    
    });
}