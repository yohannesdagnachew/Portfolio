let modelContanirArry = {
  modelheader: {
    modeltitile: [
      'Keeping track of hundreds  of components website',
      'Multi Post Stories',
    ],
    closeModel: 'X',
  },
  modeltag: {
    tag1: 'image/html.svg',
    tag2: 'image/bootstrap.svg',
    tag3: 'image/Ruby-on-rails.svg',
  },
  modelBody: {
    bodyimage: 'image/model-image.png',
    modeltext: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
  },
};

const modelHeaders = document.createElement('div');
const modeltTitiles = document.createElement('h2');
const modeltTitiles2 = document.createElement('h2');
const closeModels = document.createElement('button');

modeltTitiles.nextSibling = closeModels;
modeltTitiles.innerText = modelContanirArry.modelheader.modeltitile[0];
modeltTitiles2.innerText = modelContanirArry.modelheader.modeltitile[1];
closeModels.innerText = modelContanirArry.modelheader.closeModel;
modelHeaders.appendChild(modeltTitiles);
modelHeaders.appendChild(modeltTitiles2);
modeltTitiles2.className = 'model-titile2';
modelHeaders.appendChild(closeModels);
modelHeaders.className = 'model-header';
modeltTitiles.className = 'model-title';
closeModels.className = 'close-model';
// console.log(modelHeaders);

// Model tag
const modelTags = document.createElement('div');
const tags1 = document.createElement('a');
const tags2 = document.createElement('a');
const tags3 = document.createElement('a');
const tag1Image = document.createElement('img');
const tag2Image = document.createElement('img');
const tag3Image = document.createElement('img');

// tags1.src=modelContanirArry.modeltag.tag1;
tags1.appendChild(tag1Image);
tag1Image.src = modelContanirArry.modeltag.tag1;
tags2.appendChild(tag2Image);
tag2Image.src = modelContanirArry.modeltag.tag2;
tags3.appendChild(tag3Image);
tag3Image.src = modelContanirArry.modeltag.tag3;
tags1.className = tags2.className = tags3.className = 'model-tag-item';
modelTags.appendChild(tags1);
modelTags.appendChild(tags2);
modelTags.appendChild(tags3);
modelTags.className = 'model-tag';
tag3Image.className = 'ruby-on-rail';

const ht = document.querySelector('.model-container');
const hb = document.querySelector('.bottom-container');

// Image and Description part
const modelBodys = document.createElement('div');
const modelImages = document.createElement('img');
const bodyTexts = document.createElement('p');
const modelDescriptions = document.createElement('div');
const seeLive = document.createElement('a');
const seeSource = document.createElement('a');

modelBodys.className = 'model-body';
bodyTexts.className = 'model-text';
modelDescriptions.className = 'model-description';
bodyTexts.innerText = modelContanirArry.modelBody.modeltext;
modelImages.style.height = '330px';
modelImages.style.marginBottom = '35px';
modelImages.className = 'model-image';
modelImages.src = modelContanirArry.modelBody.bodyimage;
seeLive.href = 'https://yohannesdagnachew.github.io/';
seeLive.innerHTML = `<img src="image/Enable1.svg" alt=""/>`;
seeSource.href = 'https://yohannesdagnachew.github.io/';
seeSource.style.marginLeft = '10px';
seeSource.innerHTML = `<img src='image/Enable.svg' alt=''/>`;

modelBodys.appendChild(modelImages);
modelBodys.appendChild(modelDescriptions);
modelDescriptions.append(bodyTexts);
modelDescriptions.append(seeLive);
modelDescriptions.append(seeSource);
console.log(modelDescriptions);

ht.insertBefore(modelHeaders, hb);
ht.insertBefore(modelTags, hb);
ht.insertBefore(modelBodys, hb);

closeModels.addEventListener('click', () => {
  ht.classList.remove('active');
});

const trail6 = document.querySelector('.tryail2');
trail6.addEventListener('click', () => {
  ht.classList.toggle('active');
});

const trail0 = document.querySelector('.cardbutton0');
trail0.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const trail1 = document.querySelector('.cardbutton1');
trail1.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const trail2 = document.querySelector('.cardbutton2');
trail2.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const trail3 = document.querySelector('.cardbutton3');
trail3.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const trail4 = document.querySelector('.cardbutton4');
trail4.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const trail5 = document.querySelector('.cardbutton5');
trail5.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob = document.querySelector('.button1');
mob.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob2 = document.querySelector('.buttonm1');
mob2.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob3 = document.querySelector('.buttonm2');
mob3.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob4 = document.querySelector('.buttonm3');
mob4.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob5 = document.querySelector('.buttonm4');
mob5.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob6 = document.querySelector('.buttonm5');
mob6.addEventListener('click', () => {
  ht.classList.toggle('active');
});
const mob7 = document.querySelector('.button6');
mob7.addEventListener('click', () => {
  ht.classList.toggle('active');
});
