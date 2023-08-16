
var button=document.getElementById('button');
button.addEventListener('click',function(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var dep=document.getElementById('dep').value;
    if(name==""){
        alert('Enter name please');
    }
    else if(email==""){
        alert('Enter email please');
    }
    else if(dep==""){
        alert('Enter department please');
    }
    else{
        var tbody=document.getElementById('tbody');
        var tr=document.createElement('tr');
        var tdname=document.createElement('td');
        tdname.innerHTML=name;
        tr.appendChild(tdname);
        tbody.appendChild(tr);

        var tdemail=document.createElement('td');
        tdemail.innerHTML=email;
        tr.appendChild(tdemail);
      

        var tddep=document.createElement('td');
        tddep.innerHTML=dep;
        tr.appendChild(tddep);

        
        var dele=document.createElement('button');
        dele.innerHTML= "delete";
        tr.appendChild(dele);
        
        dele.onclick=deleteTasks;

        function deleteTasks(){
            var inputs= this.parentNode; //catch the parent
            var parent=inputs.parentNode; // yes parent is caught..
            parent.removeChild(inputs);
        }

        name="";
        email="";
        dep="";
        
    }

})









