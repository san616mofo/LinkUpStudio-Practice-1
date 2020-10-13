function moveToSelected(element) {
    const divs = document.getElementById('carousel').children;
    const mass = [...divs];
    let index = mass.indexOf(document.querySelector(".current"));

    if (element == "next") {
        if(index == mass.length - 1)
        {
            hide(mass);
            mass[mass.length - 2].className = 'leftHide';
            mass[mass.length - 1].className = 'prev';
            mass[0].className = 'current';
            mass[1].className = 'next';
            mass[2].className = 'rightHide'
            return;
        }
        else if(index == mass.length - 2)
        {
            hide(mass);
            mass[mass.length - 3].className = 'leftHide';
            mass[mass.length - 2].className = 'prev';
            mass[mass.length - 1].className = 'current';
            mass[0].className = 'next';
            mass[1].className = 'rightHide'
            return;
        }
        else if(index == 0)
        {
            hide(mass);
            mass[3].className = 'rightHide'
            mass[mass.length-1].className = 'leftHide';
            mass[index+1].className = 'current';
            mass[index].className = 'prev';
            mass[index+2].className = 'next';
            mass[index+3].className = 'rightHide';
            return;
        }
        else if(index == mass.length-3)
        {
            hide(mass);
            mass[mass.length - 4].className = 'leftHide';
            mass[mass.length - 3].className = 'prev';
            mass[mass.length - 2].className = 'current';
            mass[mass.length - 1].className = 'next';
            mass[0].className = 'rightHide'
            return;
        }
        else{
            console.log('5th');
            no_hide(mass);
            mass[index-1].className = 'leftHide';
            mass[index+1].className = 'current';
            mass[index].className = 'prev';
            mass[index+2].className = 'next';
            mass[index+3].className = 'rightHide';
        }
    }else if(element == "prev"){
        if(index == mass.length - 1)
        {
            hide(mass);
            mass[0].className = 'rightHide'
            mass[index-3].className = 'leftHide';
            mass[index].className = 'next';
            mass[index-2].className = 'prev';
            mass[index-1].className = 'current';
            return;
        }
        else if(index == 0)
        {
            hide(mass);
            mass[index+1].className = 'rightHide'
            mass[index].className = 'next';
            mass[mass.length-1].className = 'current';
            mass[mass.length-2].className = 'prev';
            mass[mass.length-3].className = 'leftHide';
            return;
        }
        else if(index == 1)
        {
            hide(mass);
            mass[index+1].className = 'rightHide'
            mass[index].className = 'next';
            mass[index-1].className = 'current';
            mass[mass.length-1].className = 'prev';
            mass[mass.length-2].className = 'leftHide';
            return;
        }
        else if(index == 2)
        {
            hide(mass);
            mass[index+1].className = 'rightHide'
            mass[index].className = 'next';
            mass[index-1].className = 'current';
            mass[index-2].className = 'prev';
            mass[mass.length-1].className = 'leftHide';
            return;
        }
        else{
            no_hide(mass);
            mass[index+1].className = 'rightHide'
            mass[index-3].className = 'leftHide';
            mass[index].className = 'next';
            mass[index-2].className = 'prev';
            mass[index-1].className = 'current';
        }
    }
}

const hide = (mass) => { 
    mass.forEach(element => {
    element.className='hide';
    });
}
const no_hide = (mass) => { 
    mass.forEach(element => {
        if(element.className != 'prev' && element.className != 'next'){
            element.className='hide';
        }
    });
}

function prev_click() 
{
    moveToSelected('prev');
};

function next_click() 
{
    moveToSelected('next');
};