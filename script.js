let img = new Image();
let fileName = '';

//const downloadBtn = document.getElementById('db');
let uploadFile = document.getElementById('imp');
const revertBtn = document.getElementById('rf');

uploadFile.addEventListener('change', (e) => {

    const file = document.querySelector('#inp').files[0];
    const reader = new FileReader();

    if(file){
        fileName = file.name
        //read as url
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => {
        const canvas = document.getElementById('canvas');
        const c = canvas.getContext('2d');

        img = new Image();
        img.src = reader.result;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            c.drawImage(img,0,0, img.width,img.height)
        };
    },false);
});



