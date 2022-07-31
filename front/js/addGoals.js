const addGoals = document.getElementById('addGolas');
const goals = document.getElementById('goals');
const submit = document.getElementById('submitGoals');
let n = 2;

addGoals.addEventListener('click', function (event) {
    if (n < 6) {
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
    } else {

    }
});

submit.addEventListener('click', function (event) {
    const url = 'https://script.google.com/macros/s/AKfycbx2e6NMu88YY01CTigKdo_3KXBOMoMbd1NxG16cD5nLG97MoOyZBnfMuAhbD5tApNGzSw/exec';
    const data = {
        'userId': 'aaaaaaaa', //仮値
        'longTermGoal': document.getElementById('longTermGoal').value,
        'deadline': document.getElementById('deadline').value,
        'weekDeadline': '20220830',
        'weekGoal1': typeof document.getElementById('what1').value !== undefined ? document.getElementById('what1').value: undefined,
        'content1': typeof document.getElementById('how1').value !== undefined ? document.getElementById('how1').value: undefined,
        'weekGoal2': typeof document.getElementById('what2').value !== undefined ? document.getElementById('what2').value: undefined,
        'content2': typeof document.getElementById('how2').value !== undefined ? document.getElementById('how2').value: undefined,
        'weekGoal3': typeof document.getElementById('what3').value !== undefined ? document.getElementById('what3').value: undefined,
        'content3': typeof document.getElementById('how3').value !== undefined ? document.getElementById('how3').value: undefined,
        'weekGoal4': typeof document.getElementById('what4').value !== undefined ? document.getElementById('what4').value: undefined,
        'content4': typeof document.getElementById('how4').value !== undefined ? document.getElementById('how4').value: undefined,
        'weekGoal5': typeof document.getElementById('what5').value !== undefined ? document.getElementById('what5').value: undefined,
        'content5': typeof document.getElementById('how5').value !== undefined ? document.getElementById('how5').value: undefined,
    };

    const postparam = {
        "method": "POST",
        //"mode" : "no-cors",
        "Content-Type": "application/x-www-form-urlencoded",
        "body": JSON.stringify(data)
    };

    fetch(url, postparam)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
});