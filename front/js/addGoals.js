const addGoals = document.getElementById('addGolas');
const goals = document.getElementById('goals');
let n = 2;

addGoals.addEventListener('click', function (event) {

    const divWeek = document.createElement('div');
    divWeek.setAttribute('id', 'week' + n);
    divWeek.classList.add('row');

    const div1 = document.createElement('div');
    div1.classList.add('col-sm');

    const div2 = document.createElement('div');
    div2.classList.add('col-sm');

    const label1 = document.createElement('label');
    const labelText1 = document.createTextNode('何を');
    label1.setAttribute('for', 'what' + n);
    label1.appendChild(labelText1);

    const input1 = document.createElement("input");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'what' + n);
    input1.classList.add('form-control');

    const label2 = document.createElement('label');
    const labelText2 = document.createTextNode('どのくらい');
    label2.setAttribute('for', 'how' + n);
    label2.appendChild(labelText2);

    const input2 = document.createElement("input");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'how' + n);
    input2.classList.add('form-control');

    div1.appendChild(label1);
    div1.appendChild(input1);

    div2.appendChild(label2);
    div2.appendChild(input2);

    divWeek.appendChild(div1);
    divWeek.appendChild(div2);

    goals.appendChild(document.createElement('br'));
    goals.appendChild(divWeek);
    n++;
});