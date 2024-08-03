$( document ).ready(function(){
    class discovercard{//section discover için card üretir
        constructor(id,img, header, headerColor, tagColor, tagBgColor, tagIcon ,tag, txt, rewiewsPoint, rewiewers, location, locationshort){
            this.id = id;// discovered + ürelidiği sayi : discovered1
            this.img = img;//dosyadaki konum belirtilmeli /assets/img ... gibi
            this.header = header; //string
            this.headerColor = headerColor //string header color rengi içermeli
            this.tagColor = tagColor;//svg tagı ile html kodu eklenmeli
            this.tagBgColor = tagBgColor;//svg tagı ile html kodu eklenmeli
            this.tagIcon = tagIcon;//svg tagı ile html kodu eklenmeli
            this.tag = tag;//string tag başlığı
            this.txt = txt;//card body yazısı
            this.rewiewsPoint = rewiewsPoint;//5 üzerinden alınan puan string
            this.rewiewers = rewiewers;// yorumcu sayısı string
            this.location = location;//location bilgisi sehir
            this.locationshort = locationshort;//location ülke bilgi
        }
        getCard() {//cartı ekrana yazdırır
            return ' \
                <div class="section-discover__body__card swiper-slide">\
                    <div class="section-discover__body__card__img">\
                      <img src="'+this.img+'" alt=""/>\
                    </div>\
                    <div class="section-discover__body__card__header">\
                        <h3 class="section-discover__body__card__header__header" style="color:'+this.headerColor+';">\
                            '+this.header+'\
                        </h3>\
                        <div class="section-discover__body__card__header__tag" style="color:'+this.tagColor+';background-color:'+this.tagBgColor+'">\
                           '+this.tagIcon+' \
                           '+this.tag+'\
                        </div>\
                    </div>\
                    <div class="section-discover__body__card__txt">\
                        '+this.txt+'\
                    </div>\
                    <div class="section-discover__body__card__reviews">\
                        Reviews <span class="rewiewspoint">'+this.rewiewsPoint+'/5</span>\
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>\
                        <span class="rewiewers">('+this.rewiewers+')</span>\
                    </div>\
                    <div class="section-discover__body__card__location">\
                        <div class="section-discover__body__card__location__location">\
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>\
                            '+this.location+',<span>'+this.locationshort+'</span>\
                        </div>\
                        <div class="section-discover__body__card__location__fav-icon" id="'+this.id+'">\
                           <svg class="section-discover-fav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>\
                           <svg class="section-discover-fav-icon-solid displayNone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>\
                        </div>\
                    </div>\
                </div>\
            ';        
        }
    }
    
    
    var myFunction = (x) => {//ekran boyutu kontrol edilir 
        if (x.matches) { 
            $("#main-header-big-screen").hide();
        }
        else {
            $("#main-header-big-screen").show();
        }
    }
    
      
    var x = window.matchMedia("(max-width: 768px)");// anlık olarak ekran boyutu konrtol edilir
    x.addListener(myFunction);
    
    
    var createCard = (cards) =>{// discovercard classından card nesneleri oluşturulur
        var temp = [];
        for(i in cards){
            a = new discovercard(cards[i][0],cards[i][1],cards[i][2],cards[i][3],cards[i][4],cards[i][5],cards[i][6],cards[i][7],cards[i][8],cards[i][9],cards[i][10],cards[i][11],cards[i][12])
            temp.push(a);
        }
        return temp;
    }
  
    var writeCards = (discovercardNesne) =>{
        var cardHtml = "";//içi html kodu ile dolar
        for(i in discovercardNesne){
            cardHtml += (discovercardNesne[i].getCard());//classtan faydalanılarak htmller döndürülür 
        }
        $("#section-discover__cards").html(cardHtml);//html sayfasına yazılır 
    
     
    }
    
    var cards = [//oluşturulacak card listesi
        ["discovercard0","assets/img/Discover/shutterstock-420535459.jpg","Food & drinks", "#ef233c", "#b452ed", "#f6e8fe",'<svg style="fill:#b452ed;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"/></svg>',"Best seller", "Seafood rooftop dinner and wine pairing","5.0","123","New York","USA"],
        ["discovercard1","assets/img/Discover/shutterstock-627044027.jpg","Cooking class",
        "#0acd98", "#f5b21b", "#fff4dc",'<svg style="fill:#f5b21b ;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M475.6 384.1C469.7 394.3 458.9 400 447.9 400c-5.488 0-11.04-1.406-16.13-4.375l-25.09-14.64l5.379 20.29c3.393 12.81-4.256 25.97-17.08 29.34c-2.064 .5625-4.129 .8125-6.164 .8125c-10.63 0-20.36-7.094-23.21-17.84l-17.74-66.92L288 311.7l.0002 70.5l48.38 48.88c9.338 9.438 9.244 24.62-.1875 33.94C331.5 469.7 325.4 472 319.3 472c-6.193 0-12.39-2.375-17.08-7.125l-14.22-14.37L288 480c0 17.69-14.34 32-32.03 32s-32.03-14.31-32.03-32l-.0002-29.5l-14.22 14.37c-9.322 9.438-24.53 9.5-33.97 .1875c-9.432-9.312-9.525-24.5-.1875-33.94l48.38-48.88L223.1 311.7l-59.87 34.93l-17.74 66.92c-2.848 10.75-12.58 17.84-23.21 17.84c-2.035 0-4.1-.25-6.164-.8125c-12.82-3.375-20.47-16.53-17.08-29.34l5.379-20.29l-25.09 14.64C75.11 398.6 69.56 400 64.07 400c-11.01 0-21.74-5.688-27.69-15.88c-8.932-15.25-3.785-34.84 11.5-43.75l25.96-15.15l-20.33-5.508C40.7 316.3 33.15 303.1 36.62 290.3S53.23 270 66.09 273.4L132 291.3L192.5 256L132 220.7L66.09 238.6c-2.111 .5625-4.225 .8438-6.305 .8438c-10.57 0-20.27-7.031-23.16-17.72C33.15 208.9 40.7 195.8 53.51 192.3l20.33-5.508L47.88 171.6c-15.28-8.906-20.43-28.5-11.5-43.75c8.885-15.28 28.5-20.44 43.81-11.5l25.09 14.64L99.9 110.7C96.51 97.91 104.2 84.75 116.1 81.38C129.9 77.91 142.1 85.63 146.4 98.41l17.74 66.92L223.1 200.3l-.0002-70.5L175.6 80.88C166.3 71.44 166.3 56.25 175.8 46.94C185.2 37.59 200.4 37.72 209.8 47.13l14.22 14.37L223.1 32c0-17.69 14.34-32 32.03-32s32.03 14.31 32.03 32l.0002 29.5l14.22-14.37c9.307-9.406 24.51-9.531 33.97-.1875c9.432 9.312 9.525 24.5 .1875 33.94l-48.38 48.88L288 200.3l59.87-34.93l17.74-66.92c3.395-12.78 16.56-20.5 29.38-17.03c12.82 3.375 20.47 16.53 17.08 29.34l-5.379 20.29l25.09-14.64c15.28-8.906 34.91-3.75 43.81 11.5c8.932 15.25 3.785 34.84-11.5 43.75l-25.96 15.15l20.33 5.508c12.81 3.469 20.37 16.66 16.89 29.44c-2.895 10.69-12.59 17.72-23.16 17.72c-2.08 0-4.193-.2813-6.305-.8438L379.1 220.7L319.5 256l60.46 35.28l65.95-17.87C458.8 270 471.9 277.5 475.4 290.3c3.473 12.78-4.082 25.97-16.89 29.44l-20.33 5.508l25.96 15.15C479.4 349.3 484.5 368.9 475.6 384.1z"/></svg>',"Star chef", "Cooking class & local market ingredients","4.9","637","Quintana Roo","Mexico"],
        ["discovercard2","assets/img/Discover/red-mini-coupe-driving-highway-with-high-speed.jpg","Dinner","#ef9623", "", "",'',"", "A garden party under the stars","4.8","179","Netherton, Dunley","UK"],
        ["discovercard3","assets/img/Discover/shutterstock-620649473.jpg","Lunch","#707e8c", "", "",'',"", "Brazilian/peruvian lunch in a wonderful garden","4.0","370","São Paula","Brazil"],

    ]
    
    discovercardNesne = createCard(cards); // card oluşturlur
    writeCards(discovercardNesne); // htmle eklenen fonksiyon
    
    var discoverswiper = new Swiper(".discoverwiper", { //section discover swipper
        slidesPerView: 4,
        spaceBetween: 17,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".section-discover__btn__right",
          prevEl: ".section-discover__btn__left",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            499: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            }
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
      });
    
      var swiper = new Swiper(".footerSwiper", { //şirket logo swipper
        slidesPerView: 5,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            499: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            }
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
      });
      
    
    $(".main-header__menu-small-screen svg").click(() =>{ // main-head küçük ekranda menü açılımı
        $("#main-header-big-screen").toggle();
    });
    
    $(".section-discover__body__card__location__fav-icon").click((self)=>{// section discover kalp renk değişimi
        $("#"+self["currentTarget"].id+ " .section-discover-fav-icon-solid").toggle();
        $("#"+self["currentTarget"].id+ " .section-discover-fav-icon").toggle();
    });
   
    
    class CreateMsg{
        constructor(msg){
            this.msg = msg;
        }

        getMsg(){
            return '\
            <div class="message-box__body__msg message-box__body__right-msg">\
                <div class="message-box__body__right-msg__right-arrow">\
\
                </div>\
                <p>\
                    '+this.msg+' \
                </p>\
            </div>\
        '
        }
    }

    $(".message-box__user-input__btn").click(()=>{
        let msg = $(".message-box__user-input__txt").val();
        let msgHtml = new CreateMsg(msg);
        $(".message-box__body").append(msgHtml.getMsg());
        $(".message-box__user-input__txt").val("");
    })

    $(".message-box__hover-icon").click(()=>{
        $(".message-box__hover-icon").hide();
        $(".message-box__container").show();
        $(".message-box").css({"bottom":"15rem"});
        
    })

    $(".message-box__header").click(()=>{
        $(".message-box__hover-icon").show();
        $(".message-box__container").hide();
        $(".message-box").css({"bottom":"5rem"});
        
    })





});












