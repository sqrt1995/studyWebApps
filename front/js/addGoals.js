const addGoals = document.getElementById('addGolas');
const week = document.getElementById('week');
let n = 2;

addGoals.addEventListener('click', function(event){

    let br1 = document.createElement('br');

    const label1 = document.createElement('label');
    const labelText1 = document.createTextNode('何を');
    label1.setAttribute('for', 'what'+n);
    label1.appendChild(labelText1);
    
    const input1 = document.createElement("input");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'what'+n);
    input1.setAttribute('name', 'what'+n);

    const label2 = document.createElement('label');
    const labelText2 = document.createTextNode('どのくらい');
    label2.setAttribute('for', 'how'+n);
    label2.appendChild(labelText2);
    
    const input2 = document.createElement("input");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'how'+n);
    input2.setAttribute('name', 'how'+n);

    week.appendChild(label1);
    week.appendChild(input1);

    week.appendChild(label2);
    week.appendChild(input2);

    n++;
});