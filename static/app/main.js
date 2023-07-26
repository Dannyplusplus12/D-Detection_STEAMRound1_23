const displayImage = document.getElementById('display-image')
function updateImage(url) {
    displayImage.src = url
    predict()
}

const inputImg = document.getElementById('file-input')
function getImgByFile(event){
    const file = event.target.files[0];
    let url = window.URL.createObjectURL(file);
    updateImage(url)
}

inputImg?.addEventListener('change', getImgByFile)

const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

function isImage(url) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

const urlBox = document.getElementById('url-box')
const urlSubmit = document.getElementById('url-submit')

url = urlBox.value

urlSubmit.addEventListener('click', () => {
    url = urlBox.value
    updateImage(url)
})

const webcamContainer = document.getElementById('webcam-container')

let webcamBtn = document.querySelector("#webcam-btn");
let video = document.querySelector("#vid");
let canvas = document.querySelector("#canvas");

let webcamIsOn = false

webcamBtn.addEventListener('click', async function() {
    video.style.display = "inline"
    document.getElementById("webcam-btn-title").innerHTML = "Chụp ảnh"

    if(!webcamIsOn) {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        webcamIsOn = true;
    }

    else {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        // let image_data_url = canvas.toDataURL('image/jpeg');
        updateImage(canvas.toDataURL('image/jpeg'))
 
        // data url of the image
        // console.log(image_data_url);
    }

});

const classList = {
    'vegetable': {
        0: 'Đậu',
        1: 'Mướp đắng',
        2: 'Mướp',
        3: 'Cà',
        4: 'Bông cải xanh',
        5: 'Cải bắp',
        6: 'Ớt chuông',
        7: 'Cà rốt',
        8: 'Bông cải trắng',
        9: 'Dưa chuột',
        10: 'Đu đủ',
        11: 'Khoai tây',
        12: 'Bí ngô',
        13: 'Cải củ',
        14: 'Cà chua'
    },
    'animal': {
        0: "Bò",
        1: "Bươm bướm",
        2: "Chó",
        3: "Cừu",
        4: "Gà",
        5: "Mèo",
        6: "Ngựa",
        7: "Nhện",
        8: "Sóc",
        9: "Voi"
    },
    'flower': {
        0: 'Cúc',
        1: 'Bồ công anh',
        2: 'Hồng',
        3: 'Hướng dương',
        4: 'Tulip'
    },
    'pizzanot': {
        0: 'Không phải pizza',
        1: 'Pizzaaaaaaaa'
    }
}

const Info = {
    "flower": `<svg style="margin-left: -53px;margin-top: -22px;" fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-7.2 -7.2 38.40 38.40" xml:space="preserve" width="64px" height="64px" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.104"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M15,6l-7,6l7,6V6z"></path> <rect class="st0" width="24" height="24"></rect></g></svg><h4 style="font-size: 1.6rem; margin-top: -36px;">Hoa</h4><p style="font-size: 1.1rem;">Có thể nhận diện 5 loại hoa khác nhau bao gồm: Cúc, Bồ công anh, Hồng, Hướng dương, Tulip</p><a href="https://www.kaggle.com/datasets/imsparsh/flowers-dataset" style="font-size: 0.9rem;">Nguồn dataset</a>`,
    "animal": `<svg style="margin-left: -53px;margin-top: -22px;" fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-7.2 -7.2 38.40 38.40" xml:space="preserve" width="64px" height="64px" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.104"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M15,6l-7,6l7,6V6z"></path> <rect class="st0" width="24" height="24"></rect></g></svg><h4 style="font-size: 1.6rem; margin-top: -36px;">Động vật</h4><p style="font-size: 1.1rem;">Có thể nhận diện 10 loại động vật khác nhau bao gồm: Bò, Bươm bướm, Chó, Cừu, Gà, Mèo, Ngựa, Nhện, Sóc, Voi</p><a href="https://www.kaggle.com/datasets/alessiocorrado99/animals10" style="font-size: 0.9rem;">Nguồn dataset</a>`,
    "vegetable": `<svg style="margin-left: -53px;margin-top: -22px;" fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-7.2 -7.2 38.40 38.40" xml:space="preserve" width="64px" height="64px" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.104"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M15,6l-7,6l7,6V6z"></path> <rect class="st0" width="24" height="24"></rect></g></svg><h4 style="font-size: 1.6rem; margin-top: -36px;">Rau củ</h4><p style="font-size: 1.1rem;">Có thể nhận diện 15 loại rau củ khác nhau bao gồm: Đậu, Mướp đắng, Mướp, Cà, Bông cải xanh, Cải bắp, Ớt chuông, Cà rốt, Bông cải trắng, Dưa chuột, Đu đủ, Khoai tây, Bí ngô, Cải củ, Cà chua</p><a href="https://www.kaggle.com/datasets/misrakahmed/vegetable-image-dataset" style="font-size: 0.9rem;">Nguồn dataset</a>`,
    "pizzanot": `<svg style="margin-left: -53px;margin-top: -22px;" fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-7.2 -7.2 38.40 38.40" xml:space="preserve" width="64px" height="64px" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.104"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M15,6l-7,6l7,6V6z"></path> <rect class="st0" width="24" height="24"></rect></g></svg><h4 style="font-size: 1.6rem; margin-top: -36px;">Pizza???</h4><p style="font-size: 1.1rem;">Nhận diện đối tượng có phải pizza hay không???</p><a href="https://www.kaggle.com/datasets/carlosrunner/pizza-not-pizza" style="font-size: 0.9rem;">Nguồn dataset</a>`
}

$("document").ready (async function() {
    type = localStorage.getItem("model");
    if(type == "")
        type = "animal"
    model = await tf.loadLayersModel(`../static/models/${type}/model.json`);
    // console.log('Load model');
    // console.log(model.summary());

    
    document.getElementById("information").innerHTML = Info[type]

    displayImage.onload = function () {
        predict()
    }
});

async function predict() {

//     // 1. Chuyen anh ve tensor
//     let image = document.getElementById("display-image");
    let img = tf.browser.fromPixels(displayImage)
    let normalizationOffset = tf.scalar(255/2); // 127.5
    let tensor = img.resizeNearestNeighbor([224, 224]).toFloat().sub(normalizationOffset).div(normalizationOffset).reverse(2).expandDims()

        

//     // 2. Predict
    let predictions = await model.predict(tensor);
    predictions = predictions.dataSync();
    // console.log(predictions)

//     // 3. Hien thi len man hinh

    let top5 = Array.from(predictions).map(function (p, i) {
            return {
                probability: p,
                className: classList[type][i]
            };
        }).sort(function (a, b) {
            return b.probability - a.probability;
        }).slice(0, 5);
        $("#result_info").empty();
        top5.forEach(function (p) {
            $("#result_info").append(`
            <li>${p.className}: ${Math.floor(p.probability.toFixed(2)*100)}%
            <div style="width: 100%;height: 20px;background-color: #ebebeb;border-radius: 20px;"><div style="width:  ${Math.floor(p.probability.toFixed(2)*100)}%;height: 20px;border-radius: 20px; background-image: linear-gradient(to right, #fc4646, #2fff2f);"></div></div>
            </li>
            `);
        });
};