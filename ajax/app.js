const uname = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const branch = document.getElementById('branch');
const rollno = document.getElementById('rollno');

const get = () => {
  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.status === 200 && this.readyState == 4) {
      const p = document.getElementById('file-data');
      p.style.borderColor = 'red';
      p.innerText = this.responseText;
    }
  };

  req.open('GET', 'data.txt', true);
  req.send();
};

const post = () => {
  const user = {
    name: uname.value,
    email: email.value,
    gender: gender.value,
    branch: branch.value,
    rollno: rollno.value,
  };

  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    localStorage.setItem('name', uname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('gender', gender.value);
    localStorage.setItem('branch', branch.value);
    localStorage.setItem('rollno', rollno.value);

    window.location.href = 'result.html';
  };

  req.open('POST', 'http://127.0.0.1:5500/lab1-B/index.html', true);
  req.send();
};
