let onTop = document.getElementById('top');
    buttTop.addEventListener('click', function(e) {//Плавная прокрутка наверх
        e.preventDefault();
        onTop.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
    });

const reviews = document.querySelectorAll('.rev_content_item');
reviews.forEach((review) => {
    review.addEventListener('click', (e) => {
        const tgEl = e.target;
        if(tgEl.dataset.size === 'sm') {
            tgEl.dataset.size = 'lg';
            tgEl.style.width = '70%';
        } else {
            tgEl.dataset.size = 'sm';
            tgEl.style.width = '';
        }
    });
})
    window.addEventListener('scroll', function() {//Появление/пропадание кнопки "Наверх"
        buttTop.hidden=(scrollY <
      document.documentElement.clientHeight / 2);
      });

      //через if почему-то пишет, что anchor не определен.....
      const anchors = getComputedStyle(sandwich).display === 'none' ? navUl.querySelectorAll('a[href*="#"]'): navUlm.querySelectorAll('a[href*="#"]');
    for(let anchor of anchors){
            anchor.addEventListener('click', function(e){//Плавная прокрутка по клику на ссылки в навигации хейдера
            const namesId = anchor.getAttribute('href').substr(1);
            let idName=document.getElementById(namesId);
            e.preventDefault();
            if(getComputedStyle(sandwich).display === 'block') {hiddenShow ();}
            idName.scrollIntoView({
            behavior: 'smooth',
            block: 'start'});
            });
    }
    sandwich.addEventListener('click', hiddenShow);//Скыть/показать мобильную панель навигации

    function hiddenShow () {
        if(getComputedStyle(showMenu).display =='none') {showMenu.style.display = 'block';}
            else{showMenu.style.display = 'none';}
    }

    portbut.addEventListener('click', function() {//Кнопка скрыть/показать
        let names = portUl.querySelectorAll('li[name]');
        for(let name of names){
            let idName= name.getAttribute('name');
            let idN = document.getElementById(idName);
            if(idN.hasAttribute('hidden', 'hidden')){
                idN.removeAttribute('hidden');
                portbut.innerHTML = 'Скрыть';
            }else{
                idN.setAttribute('hidden', 'hidden');
                portbut.innerHTML = 'Все проекты';
            }
        }
    })
    const certnames = certificates.querySelectorAll('p[name]');
    for(let certname of certnames){ 
        certname.addEventListener('click', function(){
            let allimgurl = new Map([
                ['sohtml', 'url("sertificates/sololearn/sololearnHTML.png")'], ['socss', 'url("sertificates/sololearn/sololearnCSS.png")'],
                ['sojs', 'url("sertificates/sololearn/sololearnJS.png")'], ['sophp', 'url("sertificates/sololearn/sololearnPHP.png")'],
                ['sosql', 'url("sertificates/sololearn/sololearnSQL.png")'], ['stepik', 'url("sertificates/stehik.png")'],
                ['nethtml', 'url("sertificates/netology/html-layout.png")'], ['netadapt', ' url("sertificates/netology/netologi-adaptive.png")'],
                ['netprog', 'url("sertificates/netology/hetologi bazis program.png")'], ['netgit', 'url("sertificates/netology/netology-git.png")'], 
                ['netbjs', 'url("sertificates/netology/basis JS.png")'], ['netBjsB', 'url("sertificates/netology/netBjsB.png")'],
                ['netAjs', 'url("sertificates/netology/netAjs.png")'], ['netAjsB','url("sertificates/netology/netAjsB.png")'],
                ['react', 'url("sertificates/netology/react.png")'], ['bphp', 'url("sertificates/netology/bphp.png")'],
                ['aphp', 'url("sertificates/netology/aphp.png")'], ['laravel', 'url("sertificates/netology/Laravel.png")'],
                ['diplom', 'url("sertificates/netology/diplom.png")'],
            ]);
            let namecert = certname.getAttribute('name');
            let imgurl = allimgurl.get(namecert);
            serimage.style.backgroundImage = imgurl;
            showS.style.display = 'block';
        })
    }

    hiddButt.addEventListener('click', function() {
        if(getComputedStyle(showS).display=='block'){showS.style.display='none';}
    })
