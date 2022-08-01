let feature = Array.from(document.querySelectorAll('.feat h2'));

feature.forEach((ele) => {
    ele.onclick = function () {
        if (this.nextElementSibling.style.display != 'block') {
            this.nextElementSibling.style.display = 'block';
            this.parentElement.style = 'border: 1px solid #fff; padding: 20px;';
        } else {
            this.nextElementSibling.style.display = 'none';
            this.parentElement.style = 'height: auto;border: none;padding: 0;';
        }

    }
})

let lis = Array.from(document.querySelectorAll('.cat li'));
let divs = Array.from(document.querySelectorAll('.content div'))
lis.forEach((ele) => {
    ele.onclick = function () {
        lis.forEach((ele) => ele.classList.remove('li-active'));
        this.classList.add('li-active');
        let index = lis.indexOf(this);
        divs.forEach((ele) => ele.classList.remove('div-active'));
        divs[index].classList.add('div-active');
    }
})

let view = document.querySelector('.view');
let pCon = document.querySelector('.page-content');
view.onclick = function () {
    if (this.innerHTML != 'X') {
        this.innerHTML = 'X';
        this.style = 'display: inline-flex; border: 1px solid var(--main-color); margin: 10px 70%;';
        pCon.style.display = 'flex';
    } else {
        this.innerHTML = 'Content';
        this.style = 'margin: 0;'
        pCon.style.display = 'none';
    }
}