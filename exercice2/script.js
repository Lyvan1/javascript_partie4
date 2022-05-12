function styling (item){
    

    if(item == 'color')
    {
      document.getElementById('main').style.color=('red');
    }
    else if(item == 'bold')
    {
       document.getElementById('main').style.fontWeight=('bold');
    }
    else(item == 'upSize')
    {
        document.getElementById('main').style.fontSize= ('1.5em');
    }
}

// item=document.getElementById(element);
// document.getElementById(item).addEventListener('click',styling('color'));

    document.getElementById('color').addEventListener('click',function(element){
        element.preventDefault();
    element=document.getElementById('main');
    styling('color');
    })

    document.getElementById('bold').addEventListener('click',function(element){
        element.preventDefault();
    element=document.getElementById('main');
    styling('bold');
    })

    document.getElementById('upSize').addEventListener('click',function(element){
        element.preventDefault();
    element=document.getElementById('main');
    styling('upSize');
    })






