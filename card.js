const cardTitle = [
  'Website Protfolio ',
  'Data DashboardHealthcare',
  'Profesional Art Printing Data More ',
  'Website Protfolio ',
  'Data DashboardHealthcare',
  '',
];
const cardPharagraph = `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard`;
console.log(cardPharagraph);

const cardWrap = document.querySelector('.wrapper-desktop');

for (let i = 0; i < cardTitle.length; i +=1 ) {
  if (i < 5) {
    const fatch = document.querySelector('.wrapper-desktop').innerHTML;
    cardWrap.innerHTML=`<div class="pro-works${5 - i}">
        <p class="website-portfolio-card">${cardTitle[i]}</p>
        <p class="website-portfolio-pharagraph">
          ${cardPharagraph}
        </p>
        <ul class="dashboard-list">
          <li>
            <a href=""
              ><img class="dashbord-list-item" src="image/htmld.png" alt=""
            /></a>
          </li>
          <li>
            <a href=""
              ><img
                class="dashbord-list-item"
                src="image/bootstrapd.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href=""
              ><img class="dashbord-list-item" src="image/Rubyd.png" alt=""
            /></a>
          </li>
        </ul>
        <button class="cardbutton${i}">See Project</button>
      </div>` + fatch;
  } else {
    const fatch = document.querySelector('.wrapper-desktop').innerHTML;
    cardWrap.innerHTML=`<div class="pro-works0">
    <p class="website-portfolio-card">${cardTitle[i]}</p>
    <p class="website-portfolio-pharagraph">
     jjjjj
    </p>
    <ul class="dashboard-list">
      <li>
        <a href=""
          ><img class="dashbord-list-item" src="image/htmld.png" alt=""
        /></a>
      </li>
      <li>
        <a href=""
          ><img
            class="dashbord-list-item"
            src="image/bootstrapd.png"
            alt=""
        /></a>
      </li>
      <li>
        <a href=""
          ><img class="dashbord-list-item" src="image/Rubyd.png" alt=""
        /></a>
      </li>
    </ul>
    <button class="cardbutton${i}">See Project</button>
  </div>` + fatch;
  }
}

const multi = document.querySelector('.stories');

multi.innerHTML=`<img class="multi-desktop" src="image/multi.svg" alt="" />
<img
  class="pharagraph-desktop"
  src="image/pargraph-desktop.png"
  alt=""
/>
<ul class="work-choise-desktop">
  <li class="choise-d">
    <a href="#"><img src="image/Tag.svg" alt="" /></a>
  </li>
  <li class="choise-d">
    <a href=""><img src="image/html.svg" alt="" /></a>
  </li>
  <li class="choise-d">
    <a href=""><img src="image/bootstrap.svg" alt="" /></a>
  </li>
  <li class="choise-d">
    <a href=""><img src="image/ruby.svg" alt="" /></a>
  </li>
</ul>
<button class="button1-d tryail2">See Project</button>`;
