
 /* Google Tag Manager 
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://cq-sdcgd.grupocgd.com/Particulares/PublishingImages/gtm_cgd.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WW3PHB6');
                            /* End Google Tag Manager */  

// The function actually applying the offset
if($('#adressContents').length>0){
  $('#adressContents').html($('#adressContents').html().replace('Nome Representante:',''));
  $('#adressContents').html($('#adressContents').html().replace('<br> \n                                    Horário','Horário'));
}
var found= false;
var patharray = window.location.pathname.toLowerCase().split('/');
let searchParams = new URLSearchParams(window.location.search);

if(searchParams.has('c_cc') || (patharray.length==5 && patharray[1]=="corporativo" && patharray[2]=="rede-cgd" && patharray[3]=="pages")){

  let uaParser = new UAParser()
  var store = {};

  
  
      //let os = uaParser.getOS();
      let browser = uaParser.getBrowser()
      //let device = uaParser.getDevice()

      
  $('.col-one p').each(function() {
var text = $(this).html();
if(text.search('217 900 790') > -1){
found = true;
}
if(text.endsWith('Horário: '))
text = text.replace('<br>Horário: ', '');

if(browser.name != "Mobile Safari"){
text = text.replace('217 900 790<br>', '<a href="tel:+351217900790">217 900 790</a>*<br>');
}else{
  text = text.replace('217 900 790</a>', '217 900 790</a>*');
}
$(this).html(text);
});
if(found){
$('.col-one').append('<div id="phonenotice" title="'+ browser.name +'" style="/* clear: both; */margin-top: 20px;"><p><sup>*</sup> Linha de Apoio ao Cliente. Chamada para a Rede Fixa Nacional, 24h/dia, 7 dias semana.</p></div>');


}

}


if(searchParams.has('flt') && searchParams.get("flt")==="Dabox"){
  $('.results .title-results').text('Dicas by SP');
}
if(location.hash.length !== 0) {
var patharray = window.location.pathname.toLowerCase().split('/');
// https://www.cgd.pt/Empresas/Plataforma-Internacional/Pages/Trade-Finance.aspx#credito-doc
if(patharray.length>4 && patharray[1]=="empresas" && patharray[2]=="plataforma-internacional" && patharray[3]=="pages"){

  $('.content-drop .drop-menu ul li a').on('click', function (e) {
    $('.menu-area .menu li.active').removeClass('active');
    $('.content-drop').removeClass('open');
$('.content-drop').slideUp(300);
  });

  //content-drop
function offsetAnchor() {
      window.scrollTo(window.scrollX, window.scrollY - 100);
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 500); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).
}

}

//$('.header-site .menu-header .languages li a:contains("En")').hide();


function startMcpBanner(el){
  /*
    var slider = $(el).parents('.highlight-slider')

    $(slider).bxSlider({
      onSlideAfter: function ($slideElement) {
          if ($slideElement.hasClass('changeColor'))
              $('.logo').addClass('logoBlue');
      },
      onSlideBefore: function ($slideElement) {
          if (!$slideElement.hasClass('changeColor'))
              $('.logo').removeClass('logoBlue');
      },
      onSliderLoad: function (currentIndex) {
          if ($(this).children().eq(currentIndex).hasClass('changeColor'))
              $('.logo').addClass('logoBlue');
      },
      auto: true,
      pause: 10000
  });
*/
  if(typeof mod === 'function')
    mod();
    
    var el = "#" + el;

    $(el).each(function () {
      var link = $(this).data('link');
      var target = $(this).data('target');

      if (link != null && link != "") {
          $(this).on('click', function (e) {
              e.preventDefault();                                       

              if (target != null && target == '_blank') {
                  window.open(link);
              }
              else {
                  window.location.href = link;
              }
          });
      }
  });

  }

if($( ".prod .vantagem-produto" ).parents('.vantagens').length==0){
  $( ".prod .vantagem-produto" ).wrapAll( "<article class='vantagens'><div class='wrapper'><div class='vantagensGrid'></div></div></div>");
}

// alterar link no menu
$('.direct-content .col2 .ap.seta .app').each(function() {
   $( this ).attr('href','/Particulares/Contas/Caixadirecta/Pages/Refresh-App-Caixadirecta.aspx');
});

// colocar expand all em .title-accordion

if(searchParams.has('openaccordeon')){
  let param = searchParams.get('openaccordeon')
  if(param == "1"){
  $('.accordion').removeClass('accordion');
  $('.accordion2').removeClass('accordion2');
  $('.accordion3').removeClass('accordion3');
  $('.hidden').removeClass('hidden');
}

}
function expandAll(element){
  var $who = $(element),
  $items = $who.parent().find('.accordion');

$items.each(function () {
  var $el = $(this);
  if (!$who.hasClass('close') && $el.hasClass('hidden')) {
      $el.removeClass('hidden');
      $el.prev().addClass('close');
  } else if ($who.hasClass('close') && !$el.hasClass('hidden')) {
      $el.addClass('hidden');
      $el.prev().removeClass('close');
  }
});

$who.hasClass('close') ? $who.removeClass('close') && $who.text(txtExpandAll) : $who.addClass('close') && $who.text(txtCollapseAll);

} $('.features .expandall-accordionv1').on('click.event', function (e) {
  // nao clicar mais que uma vez
  TestDataLayer(e);
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
  'event':"Generic Event",
  'event_name' : 'click_all_product_features',
  '"click_all_product_features"':{
    'webpart':'Acordeão Características',
    'version' : 'v0.1'
  }
  });
$(this).off('click.event');
});
$('.expandall-accordionv1').on('click.event', function (e) {
  e.preventDefault();
  expandAll($(this));
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'event':"Generic Event",
    'event_name' : 'click_expand_all_features',
    'click_expand_all_features':{
      'webpart':'Acordeão Características',
      'version' : 'v0.1'
    }
    });
    $(this).off('click.event');
});

     var _paq = window._paq || [];  
     var bTestDataLayer = false;
     function isn(v, inputid, msg) {
      var c = (v.which) ? v.which : event.keyCode;
  
      if (c > 31 && (c < 48 || c > 57))
          return false;
      return true;
  }

     function cdosubmit(id, vl, msg) {
      var obj = document.getElementById(id);
      if (obj.value.length == 0 || obj.value == vl) {
          alert(msg);
          return false;
      }

      if (id == "input_cx1" || id == "input_cx1_m" || id =="input_cx1_a" || id == "input_cx1_m_a") {
        // usar o span para percebermos se estamos no login do topo ou de aderir
        var span = $('#' + id).parents('form').find('span').first().text();
        if(span === "Particulares" ){

          window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'Generic Event',
            'event_name' : "click_login_cdo",
            'click_login_cdo':{
            'webpart':'Login Control Top',
            'version' : 'v0.1'
        }
        });
        }else{
        
          window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'Generic Event',
            'event_name' : "click_login_cdo",
            'click_login_cdo':{
              'productName': $('#' + id).parents('.text').find('.title-adhesion').html().includes('\n') ? $('#' + id).parents('.text').find('.title-adhesion').html().split('\n')[1].trim() : $('#' + id).parents('.text').find('.title-adhesion').html(),
              'productCode':$('#' + id).parents('form').find('input[name="codFamiliaProduto"]').val(),
              'productType':$('#' + id).parents('form').find('input[name="tipoTrat"]').val(),
              'productRedirect':$('#' + id).parents('form').find('input[name="RedirFunc"]').val(),
              'numIntEspecie':$('#' + id).parents('form').find('input[name="numIntEspecie"]').val(),
            'webpart':'Login Control',
            'version' : 'v0.1'
        }
        });
        }
          _paq.push(['trackEvent', 'Pop Menu', 'Caixadireta', 'Particulares - Login']);
      }
      else {
        var span = $('#' + id).parents('form').find('span').first().text();
        if(span === "Empresas" ){
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
              'event': 'Generic Event',
              'event_name' : "click_login_cde",
              'click_login_cdo':{
              'webpart':'Login Control Top',
              'version' : 'v0.1'
          }
          });
        }else{
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
              'event': 'Generic Event',
              'event_name' : "click_login_cde",
              'click_login_cde':{
                'productName': $('#' + id).parents('.text').find('.title-adhesion').html().includes('\n') ? $('#' + id).parents('.text').find('.title-adhesion').html().split('\n')[1].trim() : $('#' + id).parents('.text').find('.title-adhesion').html(),
                'productCode':$('#' + id).parents('form').find('input[name="codFamiliaProduto"]').val(),
                'productType':$('#' + id).parents('form').find('input[name="tipoTrat"]').val(),
                'productRedirect':$('#' + id).parents('form').find('input[name="RedirFunc"]').val(),
              'webpart':'Login Control',
              'version' : 'v0.1'
          }
          });
        }
          _paq.push(['trackEvent', 'Pop Menu', 'Caixadireta', 'Empresas - Login']);
      }
      if(bTestDataLayer)
      return false;
      else
      return true;
  }

 /* inserir butao para  acesso à plataforma de clientes da CGD Pensões a partir do menu do sub-site 
     https://www.cgd.pt/Site/CXA/CGD-Pensoes/
    */

     var patharray = window.location.pathname.toLowerCase().split('/');
    if(patharray.length>4 && patharray[1]=="site" && patharray[2]=="cxa" && patharray[3]=="cgd-pensoes")
    {
      $('.menu-center').after('<div class="toolbox menu-direct"><div class="direct"><a href="https://clientes.cgdpensoes.pt" class="direct-linkv2 desktop">Área de Clientes</a><a href="https://clientes.cgdpensoes.pt/ " class="direct-linkv2 mobile">Login</a></div></div>');
      $('.toolbox .direct').css('width', '191px');
    }

    


/* alterar filtros */
/* EC - 10042024
if($('#frmFaqs').length==0){
if($('.dropdown-content .dpdsel option').length>0){
$('.dropdown-content .dpdsel option')[0].remove();
}
if($('.dropdown-content .dpdsel').length>1){
  $('.dropdown-content .dpdsel')[1].remove();
  }

//$('.dropdown-content .dpdsel').val($($('.dropdown-content .dpdsel option')[0]).val());



var filtros = $('.filters select option');
var filtrosSelected = $('.filters select').val();
$('.filters').empty();
$('.filters').append( '<nav class="filter-ccredito"></nav>' );

filtros.each(function(){
  $('.filters .filter-ccredito').append('<a'+ ($(this).val() === filtrosSelected ? ' class="selected"' : '' ) +' href="'+$(this).data('url')+'">'+$(this).text()+'</a>');
});
}
*/
/* PR - 08042024
var sabermais = "Saber mais";
var patharray = window.location.pathname.toLowerCase().split('/');
if((patharray.length>4 && patharray[1]=="english" && patharray.length>4) || (patharray[1]=="site" && patharray[2]=="live-in-portugal"))
{
  sabermais ="Learn more"; 
}

$('.list-cards .knowmore').removeClass('knowmore icon-icon16').addClass('nSaibaMais');
$('.advisor .knowmore').removeClass('knowmore icon-icon16').addClass('nSaibaMais');

$('.highlight-cards .knowmore').removeClass('knowmore icon-icon16').addClass('nSaibaMais');


$('.nSaibaMais').text(sabermais);
*/
var sabermais = "Saber mais";
var patharray = window.location.pathname.toLowerCase().split('/');
if((patharray[1]=="site" && patharray[2]=="live-in-portugal"))
{
  sabermais ="Learn more"; 
  
  $('.list-cards .knowmore').removeClass('knowmore icon-icon16').addClass('nSaibaMais');
  $('.advisor .knowmore').removeClass('knowmore icon-icon16').addClass('nSaibaMais');

  $('.highlight-cards .knowmore').removeClass('knowmore icon-icon16').addClass('nSaibaMais');

  $('.nSaibaMais').text(sabermais);
}

//$('.highlight-cards').
/*
if($('.highlight-cards .footer').length == 0){
  $('.highlight-cards .description')

}
*/
/*
lsita aconselhador poupança
https://sdcgd.grupocgd.com/Particulares/Poupanca-Investimento/Aconselhador-de-Poupancas/Pages/Aconselhador-Poupanca.aspx?aswprm=1_3,2_4,3_6&rst=true
*/

/* EC - 10042024
var cardslider = document.getElementsByClassName('savings-slider')
if(cardslider.length>0) {
  cardslider[0].classList.remove("savings-slider");
}

var listCards = $('.advisor .list ul>li');
listCards.each(function( index ) {
  var itemUrl = $( this ).find('.nSaibaMais').attr('href');
  $( this ).wrapAll("<a href='"+itemUrl+"'></a>");
});


/* Cardslider */

$('.cardslider').removeClass('cardslider');
//var cardslider = document.getElementsByClassName('cardslider')
//if(cardslider.length>0) {cardslider[0].classList.remove("cardslider");}
/* EC - 10042024
if(getAreaSubArea(2) == 'Gestao_corrente'){
  $('.list-cards .footer .join').remove();

  //https://www.cgd.pt/Empresas/Gestao_corrente/Apoios-Tesouraria/Pages/Apoios-Tesouraria.aspx aparecia sem saiba mais
  var listCards = $('.list-cards .description');
    if($('.list-cards .list>ul>li .footer').length==0){
    listCards.each(function( index ) {
        var newDiv = '<div class="nSaibaMais">'+sabermais+'</div>';  
        $(this).after(newDiv);
      });
    }

}else if(getAreaSubArea(2)!== "Cartoes"){
    var listCards = $('.list-cards .description');
    // este codigo afecta todas as listagens numa pagina quando podem haver várias, isto para ser bem feito tem que ser feito por listagem
    if($('.list-cards .list>ul>li .footer').length==0 && $('.list-cards .list>ul>a>li .footer').length==0){
    listCards.each(function( index ) {
        var newDiv = '<div class="nSaibaMais">'+sabermais+'</div>';  
        $(this).after(newDiv);
      });
    }
}else{
var listCards = $('.list-cards .description');
if($('.list-cards .list>ul>li .footer').length==0){
  listCards.each(function( index ) {
    var pai =  $(this).parents('a');
    var alink = pai.attr('href');
    var title = pai.find('.title-cards').text()
    var newDiv = '<div class="footer">' + 
    '<a href="'+alink+'" onClick="_paq.push([\'trackEvent\', \'Catálogo \' + getAreaSubArea(2), \''+title+'\', \'vermais\', \' 1\']);" class="nSaibaMais">'+sabermais+'</a> ' +
    '<a href="#" class="buy icon-icon22" data-produto="401206">Comparar Depósito Caixa Seleção Não Mobilizável</a>' +
    '<a href="'+alink+'?sh=1" onClick="_paq.push([\'trackEvent\', \'Catálogo \' + getAreaSubArea(2), \''+title+'\', \'aderir\', \' 1\']);" class="join">Pedir cartão</a>' +
    '</div>';  
    $(this).after(newDiv);
  });
}
}
*/
/* Cardslider - Fundos */
/* PR - 15042024 - Adicionar */

if(getAreaSubArea(2) == 'Poupanca-Investimento'){
  var cardslider = document.getElementsByClassName('cardslider')
  if(cardslider.length>0) {cardslider[0].classList.remove("cardslider");}

  var listCards = $('.list-cards .description');
  
  if($('.list-cards .list>ul>li .footer').length==0){
    listCards.each(function( index ) {
      var pai =  $(this).parents('a');
      var alink = pai.attr('href');
      var title = pai.find('.title-cards').text()
      var newDiv = '<div class="footer">' + 
      '<a href="'+alink+'" onClick="_paq.push([\'trackEvent\', \'Catálogo \' + getAreaSubArea(2), \''+title+'\', \'vermais\', \' 1\']);" class="nSaibaMais">'+sabermais+'</a> ' +
      '<a href="#" class="buy icon-icon22" data-produto="401206">Comparar Depósito Caixa Seleção Não Mobilizável</a>' +
      '<a href="'+alink+'?sh=1" onClick="_paq.push([\'trackEvent\', \'Catálogo \' + getAreaSubArea(2), \''+title+'\', \'aderir\', \' 1\']);" class="join">Pedir cartão</a>' +
      '</div>';  
      $(this).after(newDiv);
    });
  }
}

/* PR - 080429024
var highlightCards = $('.highlight-cards .description');
if($('.highlight-cards .list>ul>li .footer').length==0 ){
  highlightCards.each(function( index ) {
    var newDiv = '<div class="nSaibaMais">'+sabermais+'</div>';  
    $(this).after(newDiv);
  });
}
*/
/* EC - 10042024
var articles3col = $('.articles-3col .description');

  articles3col.each(function( index ) {
    var pai =  $(this).parent();
    if(pai.find('.footer').length==0 && $('.articles-3col.autom-savings-knowmore').length==0){
    var newDiv = '<div class="nSaibaMais">'+sabermais+'</div>';  
    $(this).after(newDiv);
  }
  });

var accordde = $('.prod .instituicional .adCntnr .acco2 div.expand:nth-child(3) a');
if($('.instituicional .adCntnr .acco2').length> 0){
  var patharray = window.location.pathname.toLowerCase().split('/');
    if(patharray.length>4 && patharray[1]=="particulares" && patharray[2]=="poupanca-investimento" && (patharray[5]=="caixadefensivoppr_oicvm.aspx" || patharray[5]=="caixamoderadoppr_oicvm.aspx" || patharray[5]=="caixaarrojadoppr_oicvm.aspx" || patharray[5]=="CaixaReformaPrudente.aspx".toLowerCase() || patharray[5]=="CaixaReformaActiva.aspx".toLowerCase() || patharray[5]=="CaixaReformaValor.aspx".toLowerCase() || patharray[5]=="Caixa-PPR-Rendimento-Mais.aspx".toLowerCase()))
    {
      if(accordde && accordde.text() == 'Cenários de Desempenho'){
        accordde.parent().css('display','none');
      }
    }
}
*/

if($('.instituicional .adCntnr .acco2 div.expand').length> 4){
  accordde = $($('.prod .instituicional .adCntnr .acco2 div.expand>a')[4]);
  var patharray = window.location.pathname.toLowerCase().split('/');
    if(patharray.length>4 && patharray[1]=="particulares" && patharray[2]=="poupanca-investimento" && (patharray[5]=="caixagestliquidez.aspx" || patharray[5]=="fundimo.aspx" || patharray[5]=="caixareformaprudente.aspx"))
    {
      if(accordde && accordde.text() == 'Informações relacionadas com a Sustentabilidade'){
        accordde.parent().css('display','none');
      }
    }
}

/*
var accordde = $('.prod .instituicional .adCntnr .acco2 div.expand:nth-child(3) a');
if(accordde && accordde.text() == 'Cenários de Desempenho'){
  accordde.parent().css('display','none');
}
*/

/*
if(accordde.length>0 && accordde.text() == 'Cenários de desempenho'){
  accordde.text('Informações relacionadas com a sustentabilidade');
}
*/
// Particulares/montra-caixa/
/*
if($('#sidebar').length> 0){
  var patharray = window.location.pathname.toLowerCase().split('/');
    if(patharray.length>4 && patharray[1]=="particulares" && patharray[2]=="montra-caixa")
    {
      $('#sidebar a.lightbox').text('Quer encomendar?');
      $('#sidebar').css('width','125px')
    }
  }
*/

// preçario em montras digitais
function clearLightbox(){
  $('#mainContent > .lightbox-content.ours.open').remove();
}
var patharray = window.location.pathname.toLowerCase().split('/');
if(patharray.length>4 && patharray[1]=="site" && (patharray[2]=="montras-digitais" || patharray[2]=="montras-digitais-caixa-azul") && patharray[4] != "index.aspx"){
  if(patharray[4] === 'simulador-express-credpessoal.aspx'){
    $('#mainContent').prepend("<style>.simulador__container-cl1{margin-left: 20px;}</style>");
  }
  if(patharray[4] !== 'precario-cgd.aspx'){
    var back = "/Site/Montras-digitais/Pages/Index.aspx";
    if(patharray[2]=="montras-digitais-caixa-azul")
      back = "/Site/Montras-Digitais-Caixa-Azul/Pages/Index.aspx";

  $('.btn_voltar_menu').prepend("<style>.btn_precario:before { content: '\\e909'; font-family: 'icomoon'; font-size: 50px; text-align: center; color: #fff; vertical-align: middle; font-weight: 100; display: block; width: 60px; padding-top: 64px; padding-bottom: 10px; } .btn_voltar:before { content: '\\e961'; font-family: 'icomoon'; font-size: 50px; text-align: center; color: #fff; vertical-align: middle; font-weight: 100; display: block; width: 60px; padding-top: 64px; padding-bottom: 10px; }  .btn_precario { width: 63px; position: fixed; vertical-align: middle; top: 505px; left: 0;background-color: #0071ce;border: 1px solid #4597db;height: 190px;border-radius: 8px;border-top-left-radius: 0;border-bottom-left-radius: 0;text-align: center;z-index: 9;color: #fff;font-size: 15px;} a.btn_voltar {width: 63px;position: fixed;top: 750px;left: 0px;color: #fff;font-size: 15px;border-top-left-radius: 0;border-bottom-left-radius: 0;}</style>");
$('.btn_voltar_menu').prepend('<a href="/Site/Montras-digitais/Pages/Precario-CGD.aspx?back='+back+'" title="Ir para o Preçário CGD" class="btn_precario">Preçário</a>');
  }else{
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('back')){
      $('.btn_voltar').attr('href', searchParams.get('back'));
    }
  }
$('.btn_voltar').prepend('<span>Voltar</span>');
$('.btn_voltar_menu').removeClass('btn_voltar_menu');


}
if(!$('body').hasClass('auth') && patharray.length>4 && patharray[1]=="site" && (patharray[2]=="montras-digitais" || patharray[2]=="montras-digitais-caixa-azul")){
  $(document).click(function(event) {
    if(event.target.parentNode.tagName.toLowerCase() == 'a' ){ //|| event.target.tagName.toLowerCase() == "a"
    var targeti = event.target.parentNode;
  }else if(event.target.tagName.toLowerCase() == 'a'){
    var targeti = event.target;
  }
    var aurl = $(targeti).attr('href');
    if(aurl !== undefined &&  aurl !=="#")
    $('#mainContent').prepend('<div class="lightbox-content ours open"><div class="lightbox-bg" style="background:#fff"></div><div class="lightbox-center" style="background:none;"><div class="loading"><img src="/Site/Montras-digitais/PublishingImages/timer/loading.gif"></div></div></div>');
    setTimeout(clearLightbox, 30000);
  });
}

// JavaScript Document
// js para limite de credito
var limiteDeCredito = document.getElementById("produto-limite-credito");
if(limiteDeCredito != null){
  var placeHolderlimiteDeCredito = document.getElementById("placeholder-limite-credito");
  if(placeHolderlimiteDeCredito != null)
    placeHolderlimiteDeCredito.textContent = limiteDeCredito.textContent;
}
//correção cp 
$('link[href*="/css/add-nova-img-temp.css?v="]').remove();


/* fix sticky bar */

var linkLSticky = $('.sticky-bar span a');

linkLSticky.on('click', function (e) {
    var lb = $('.lightbox-content');
    lb.addClass('open');
    if (lb.data('frame')) openFrame($('.lightbox-center'), lb.data('frame'));
});

/* fix side bar em adesao */
var adhesionframe = $('.adhesion-product iframe');
if(adhesionframe)
  adhesionframe.attr('id',adhesionframe.attr('id') + 2)
  $('.adhesion-product iframe').css('height','685px');


  ready(loadCampanhas);
  var intervaloCampanha = setInterval(myMethod, 300);

function myMethod( )
{
  if($('.sl-notificacao').length>0 && $("body").hasClass("prod")){
    $('#page-content').css('padding-top','110px');
    $('.sl-notificacao .close-btn').removeAttr('onclick');
    $('.sl-notificacao .close-btn').on( "click", function() {
      $('#page-content').css('padding-top','46px');
      closeSplash();
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event':  'Generic Event',
            'event_name' : "close_campaign",
             'close_campaign':{
              'clickText':$('.close-btn').parent().find('.texto-destaque').text(),
              'campaingId':$('.close-btn').parent().data('id')
          }
        });
    }); 

    //eventos

    
    function TestDataLayer(e){
        if(bTestDataLayer)
        e.preventDefault();
    }

    var link = $('.sl-notificacao .cta a').attr('href');
    var store = "";
    if( link!= null && link !=""){
      if(link.indexOf("apple") >= 0){
        store ="App Store";
      }else if(link.indexOf("huawei") >= 0){
        store ="AppGallery";
      }else{
        store ="Google Play";
      }
    }
    $('.sl-notificacao .cta a').on( "click", function(e) {
      TestDataLayer(e);
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
          'event':  'Generic Event',
          'event_name' : "click_campaign",
           'click_campaign':{
          'appStore': store,
          'clickText': $('.close-btn').parent().find('.texto-destaque').text(),
          'campaingId': $('.close-btn').parent().data('id')
        }
      });
    }); 

    clearInterval(intervaloCampanha); 
    }
}
if ($('.menu-area .menu ul li').length < 5)
$('.menu-area .menu ul li').css('padding', '0 25px 0 0px');
//if ($('.menu-header .menu-center li').length < 5)
//$('.menu-header .menu-center').css('display', 'flex');


(function() {
  var baseEventName = "."+"event_ga4_datalayer";
  var bTestDataLayer = false;
  var TestDataLayer = function (e){
      if(bTestDataLayer)
      e.preventDefault();
  }
  var ConsoleWriteEventName = function(nome){
    console.log(nome);
  }
  var SetResources = function(){
    var ndata = new Date();
    var cacheexp = ndata.getTime();
    var link;
    
    if(document.getElementById('debuggercss') === null){
      link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('id', 'debuggercss');
      link.setAttribute('href', '/PublishingImages/WSImages/Novo-CGD/Ga4Events/event_debugger.css?r' + cacheexp);
      document.head.appendChild(link);
    }
    if(document.getElementById('debuggerjs') === null){
      link = document.createElement('script');
      link.setAttribute('type', 'text/javascript');
      link.setAttribute('id', 'debuggerjs');
      link.setAttribute('src', '/PublishingImages/WSImages/Novo-CGD/Ga4Events/event_debugger.js?r=' + cacheexp);
      document.head.appendChild(link);
    }
  }
  var ShowEvents = function(onoff){
    if(onoff == false)
    {
      HideWebparts();
      HideEventosManuais();
    }else{
      ShowWebparts();
      ShowEventosManuais();
    }
    
  }
  var HideEvents = function(){
    HideWebparts();
    HideEventosManuais();
  }
//  var webpartsList = [];
var webpartsList = [
  {
     "Class": '.articles-3col',
       "Nome": "Caixatec Listing v2",
       'Evento':"false"
   },
   {
    "Class": '.related-articles',
       "Nome": "Caixatec - Sabia Que v2.0",
       'Evento':"false"
   }, 
   /*
   {"Class": '.perguntas-frequentes',
       "Nome": "Perguntas Frequentes",
       'Evento':"false"
   },
   */
    {
      "Class": '.features',
       "Nome": "Área de texto Control",
       'Evento':"false"
   }, {"Class": '.last-chance',
       "Nome": "Bloco Last Chance",
       'Evento':"false"
   }, {"Class": '.list-wantam',
       "Nome": "Caixatec WishList Slider",
       'Evento':"false"
   },
   {
    "Class": '.list-want',
     "Nome": "Caixatec - DestaquesThumbnails v2.0",
     'Evento':"false"
 }, {
  "Class": '.list-cards',
       "Nome": "Caixatec Listing Produtos v2",
       'Evento':"false"
   },
   {
    "Class": '.list-cards .filters',
       "Nome": "Caixatec Listing Produtos v2",
       'Evento':"false"
   }, {
    "Class": '.highlight',
       "Nome": "Banner V3 (1 Coluna) ",
       'Evento':"false"
   }, {
    "Class": '.highlight-cards',
       "Nome": "Caixatec Destaques V2",
       'Evento':"false"
   }, {
    "Class": '.documents',
       "Nome": "Caixatec Informacoes Documentos",
       'Evento':"false"
   }, {
    "Class": '.sticky-bar',
       "Nome": "Sticky bar Control",
       'Evento':"false"
   }, {
    "Class": '.splash-product',
       "Nome": "Banner/Splash produto Control",
       'Evento':"false"
   },
   {
    "Class" : '.list-simulation',
   "Nome": "Caixatec - DestaquesThumbnails v2.0",
   'Evento':"false"
},
{
  "Class" : '.ms-rtestate-field',
 "Nome": "ContentEditor Webpart",
 'Evento':"false"
}
   
 ];
  var Debug = function(onoff){
      if (arguments.length == 1) {
          bTestDataLayer = onoff;
      }
      SetResources();
  }
  var getCoords = function(elem) {
    if(typeof elem.getBoundingClientRect == "undefined" )
    return null;
      let box = elem.getBoundingClientRect();

      return {
          top: box.top + window.pageYOffset,
          right: box.right + window.pageXOffset,
          bottom: box.bottom + window.pageYOffset,
          left: box.left + window.pageXOffset,
          docHeight: $( document ).height(),
          docWidth:$( document ).width(),
          viewPortWidth:$( window ).height(),
          viewPortHeight:$( window ).width(),
          percentageYpos: Math.ceil(((box.top + window.pageYOffset) * 10) / $( document ).height())
      };
  }
  var Start = function(arg) {
      //if (bTestDataLayer)
      //    console.log(NewGa4Event($(baseEventName)))
      
      SetEventosTransversais();
      GetEvents();
  };

  var SetEventosTransversais = function(){
      /* Eventos da página*/
      window.dataLayer = window.dataLayer || [];
      window.product = window.product || [];
      
      window.product.pageName = document.title;
      window.product.pagePath = window.location.pathname;
      
      window.dataLayer.push({
      'pageName':document.title,
      'pagePath':window.location.pathname,
      });
      if($('.splash-product').length>0 || $('.adhesion-product').length>0){
          window.product.pageType = 'Produto';
          window.dataLayer.push({
              'pageType':'Produto',
              });
      }else if($( ".section[data-ng-app='SimCredPesExp']" ).length>0 ){
        window.product.pageType = 'Simulador';
      window.dataLayer.push({
          'pageType':'Simulador',
          });
      }else{
      window.product.pageType = 'Montra';
      window.dataLayer.push({
          'pageType':'Montra',
          });
      } 
          // se tiver callback vamos aceder aos dados de produto e passar para os eventos da pagina
    if($('.lightbox-content').length>0){
      var framedata = $('.lightbox-content').data('frame');
      framedata = framedata.replace(/&amp;/g, "&");
      let searchParams = new URLSearchParams(framedata)
      window.product = window.product || [];
      window.product.productName = searchParams.has('p') ? searchParams.get('p') : "";
      window.product.productType = searchParams.has('cttc') ? searchParams.get('cttc') : "";
      window.product.productCode = searchParams.has('cps') ? searchParams.get('cps') : "";
      window.product.productSegment = searchParams.has('s') ? searchParams.get('s') : "";
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'productName':searchParams.has('p') ? searchParams.get('p') : "",
        'productType':searchParams.has('cttc') ? searchParams.get('cttc') : "",
        'productCode': searchParams.has('cps') ? searchParams.get('cps') : ""
//        'productRedirect':$('#' + id).parents('form').find('input[name="RedirFunc"]').val(),
//        'numIntEspecie':$('#' + id).parents('form').find('input[name="numIntEspecie"]').val(),
        });

    }

      /* Simular plafond em cartoes de credito */

    AddNewEvent('.produtocartao div.info-simular .btn_simular', "Clique mobile payment", true, GetEventsClickMobilePay);

function GetEventsClickMobilePay(self){
  return {
    'event':'Generic Event',
    'event_name' : "click_mobile_payment",
    'click_mobile_payment' : {
        'paymentName':$(self).attr('title').replace('saber mais sobre ','').trim(),
        'version' : 'v0.1'
    }
    };
}
AddNewEvent('.produtocartao .compativelcom a', "Clique mobile payment", true, GetEventsClickMobilePay);

      /* eventos de cp 
      https://sdcgd.grupocgd.com/_layouts/15/CaixatecCGDLayoutsV2/js/CPessoal.js?v=20230323
      */
    /*
      $('.call-to-action-aderir .join').on('click', function (e) {
        TestDataLayer(e);
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push(GetEventsCTAJoin(this));
    });
    
    webpartsList.push({"Class": '.call-to-action-aderir .join', "Nome": "CTA Aderir", 'Evento':"true"});
    $('.call-to-action-aderir .join').each(function() {
      $(this).data('ga4event', GetEventsCTAJoin(this));
    });
  */
  function GetEventsCTAJoin(self){
    return {
      'event':"Generic Event",
      'event_name' : 'click_subscribe',
      'click_subscribe':{
        //'productName':$(this).text().trim(),
        'buttonPosition': "call-to-action-aderir",
        'elementLocation' : getCoords(self).percentageYpos,
        'clickText': $(self).text().trim(),
        'webpart':'',
        'version' : 'v0.1'
        }
      };
  }
  //AddNewEvent('.call-to-action-aderir .join', "CTA Aderir", true, GetEventsCTAJoin);

      /* falta detectar outras páginas, por exemplo as hp que sao usadas para paginas custom ou de artigo*/
      /* passar o pagelayout para aceder por aqui */
      
      // login em adesoes
      function GetEventsLoginSubscribe(self){
        var eventName= "click_subscribe_cdo"
        if($(self).parents('.text').find('#input_cx2_a').length>0)
          eventName= "click_subscribe_cde"

            var event = {
              'event': 'Generic Event',
              'event_name' : eventName,
              [eventName]:{
                'productName': $(self).parents('.text').find('.title-adhesion').html().includes('\n') ? $(self).parents('.text').find('.title-adhesion').html().split('\n')[1].trim() : $(self).parents('.text').find('.title-adhesion').html(),
                'productCode':$(self).parents('.text').find('input[name="codFamiliaProduto"]').val(),
                'productType':$(self).parents('.text').find('input[name="tipoTrat"]').val(),
                'RedirFunc':$(self).parents('.text').find('input[name="RedirFunc"]').val(),
                'numIntEspecie':$(self).parents('.text').find('input[name="numIntEspecie"]').val(),
                'clickText':$(self).text(),
                'webpart':'Login Control',
                'version' : 'v0.1'
          }
          };
        return event;
      }

      AddNewEvent('.adhesion .adhesion-product .text .note .add', "Login Adesoes", true, GetEventsLoginSubscribe);

      /* APP STORE CLICKS*/
      $('.click_app_store').on('click', function (e) {
        TestDataLayer(e);
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
        'event':'click_app_store',
        'appStore':$(this).attr('title').replace('Caixadirecta na ','').trim()
        });
      });
      
      // apanha as de noticias com data e o a em volta
  function GetEventsArticles3ColA(self){
    var eventName = "click_know_more";
        var nome = 'productName';
        
        if($(self).find('.date').length>0){
          eventName = "click_news";
          nome = 'newsName';
        }
        var event = {
          'event': 'Generic Event',
          'event_name' : eventName};
          event[eventName] = {
            'buttonPosition': $(self).parents('.articles-3col').find('h3.title').text().trim(),
            'version' : 'v0.2'
        };
        event[eventName][nome] = $(self).attr('title').replace('Saiba Mais sobre ','').trim()
    return event;
  }
  AddNewEvent('.articles-3col .list>ul>a', "apanha as de noticias com data e o a em volta", true, GetEventsArticles3ColA);


  function GetEventsArticles3ColFooter(self){
    var eventName = "click_know_more";
    var nome = 'productName';
    if($(self).text().trim() === "Simular"){
      eventName = "click_simulate";
    }else  if($(self).text().trim() === "Subscrever" || $(self).text().trim() === "Aderir" || $(self).text().trim() === "Domiciliar"){
      eventName = "click_subscribe";
    }

    var event = {
      'event': 'Generic Event',
      'event_name' : eventName};
      event[eventName] = {
        'buttonPosition': $(self).parents('.articles-3col').find('h3.title').text().trim(),
        'elementLocation' : getCoords(self).percentageYpos,
        'clickText': $(self).text().trim(),
        'webpart':'.articles-3 col (Listing V2)',
        'version' : 'v0.1'
    };
    event[eventName][nome] = $(self).parents('li').find('h3.title-article').text().trim();
    return event;
  }

  AddNewEvent('.articles-3col .list>ul>a .footer a', "com footer adesao", true, GetEventsArticles3ColFooter);

  function GetEventsLista(self){
    return {
      'event':'Generic Event',
      'event_name' : "click_other_products",
      'click_other_products':{
          'clickText': $(self).find('p').text(),
          'elementLocation' : getCoords(self).percentageYpos,
          'version' : 'v0.1'
      }
      };
  }
  AddNewEvent('.list2 li a', "lista2", true, GetEventsLista);

      /*
      $('.list_fundos ul li a').on('click', function (e) {
          TestDataLayer(e);
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
          'event':'Generic Event',
          'event_name' : "click_know_more",
          'click_know_more':{
              'productName': $(this).parents('.list_fundos .header h4').text().trim(),
              'buttonPosition': $(this).parents('.list_fundos').find('h3.title').text().trim(),
              'elementLocation' : getCoords(this).percentageYpos,
              'webpart':'.list_fundos (Listing fundos)',
              'version' : 'v0.1'
          }
          });
      });
      */
      
      
      $('.event_click_subscribe').on('click', function (e) {
          TestDataLayer(e);
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
          'event':'Generic Event',
          'event_name' : "click_subscribe",
          'click_subscribe':{
              'buttonLocation': $(this).data('buttonlocation'),
              'productName': $(this).data('productname'),
              'productType': $(this).data('producttype'),
              'version' : 'v0.1'
          }
          });
      });
      
      $('.event_click_simulate_product').on('click', function (e) {
          TestDataLayer(e);
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
          'event':'Generic Event',
          'event_name' : "click_simulate",
          'click_simulate' : {
              'buttonLocation': $(this).data('buttonlocation'),
              'productName': $(this).data('productname'),
              'productType': $(this).data('producttype'),
              'version' : 'v0.1'
          }
          });
      });
      
      $('.event_click_simulate').on('click', function (e) {
          TestDataLayer(e);
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
          'event':'Generic Event',
          'event_name' : "click_simulate",
          'click_simulate' : {
              'buttonLocation': $(this).data('buttonlocation'),
              'productName': $(this).data('productname'),
              'productType': $(this).data('producttype'),
              'version' : 'v0.1'
          }
          });
      });
    
  function GetEventsSabiaQue(self){
    return {
      'event' : "Generic Event",
      'event_name' : "click_blog_posts",
      'click_blog_posts' : {
          'articleName':$(self).find('.article-titulo').text().trim(),
          'articleUrl': $(self).attr('href'),
          'webpart':'.related-articles (Sabia Que v2.0)',
          'version' : 'v0.1'
      }
    };
  }
  AddNewEvent('.related-articles .help-info a', "Sabia que / Saldo Positivo", true, GetEventsSabiaQue);

/* PERGUNTAS FREQUENTES */
/*
      $('.perguntas-frequentes .title-accordion').on('click', function (e) {
          TestDataLayer(e);
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
              'event' : "Generic Event",
              'event_name' : "click_faqs",
              'click_faqs' : {
                  'faqName':$(this).text().trim(),
                  'webpart':'Faqs',
                  'version' : 'v0.1'
              }
          });
      });
      */

      $('.title-accordion').one('click', function (e) {
       
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event' : "Generic Event",
            'event_name' : "click_faqs",
            'click_faqs' : {
                'faqName':$(this).text().trim(),
                'webpart':'Faqs',
                'version' : 'v0.1'
            }
        });
    });

      /* Acordeão Caracteristicas */
/* este acordeao e colocado pelo base.js e é colocado depois do cgdpt_js entao temos que usar outro método para colocar o evento*/
      $(document).one('click.event', '.features .expandall-accordion' , function(e) {
        // nao clicar mais que uma vez
       
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
        'event':"Generic Event",
        'event_name' : 'click_all_product_features',
        '"click_all_product_features"':{
          'webpart':'Acordeão Características',
          'version' : 'v0.1'
        }
        });
      //$(this).off('click.event');
    });

    $('.features .expandall-accordionv1').one('click.event', function (e) {
      // nao clicar mais que uma vez
      
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
      'event':"Generic Event",
      'event_name' : 'click_all_product_features',
      '"click_all_product_features"':{
        'webpart':'Acordeão Características',
        'version' : 'v0.1'
      }
      });
   
  });
      /* Acordeão Caracteristicas */
    $('.features .title-accordion2').one('click.event', function (e) {
     
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
      'event':"Generic Event",
      'event_name' : 'click_product_features',
      'click_product_features':{
      'featureName':$(this).text().trim(),
      'webpart':'Acordeão Características',
      'version' : 'v0.1'
    }
      });
  });
  $('.features .title-accordion').one('click.event', function (e) {
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
    'event':"Generic Event",
    'event_name' : 'click_product_features',
    'click_product_features':{
    'featureName':$(this).text().trim(),
    'webpart':'Acordeão Características',
    'version' : 'v0.1'
  }
    });
});
$('.adCntnr .acco2 .expand').one('click.event', function (e) {
  
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
  'event':"Generic Event",
  'event_name' : 'click_product_features',
  'click_product_features':{
  'featureName':$(this).text().trim(),
  'webpart':'Acordeão Fundos',
  'version' : 'v0.1'
}
  });

});
  /* Last chance */
  $('.last-chance .join').on('click', function (e) {
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
    'event':"Generic Event",
    'event_name' : 'click_subscribe',
    'click_subscribe':{
    //'productName':$(this).text().trim(),
    'buttonPosition': $(this).parents('.call-to-action-aderir').find('h2.title-card').text().trim(),
'elementLocation' : getCoords(this).percentageYpos,
'clickText': $(this).text().trim(),
'webpart':'.last-chance',
'version' : 'v0.1'
  }
    });
});

  



  //caixatec destques thumbnails
function GetEventsDestaquesThumbnails(self){
return {
  'event':'Generic Event',
  'event_name' : "click_menu",
  'click_menu' : {
      'navItem': $(self).text().trim(),
      'menuType':'Nav bar',
      'buttonPosition': $(self).parents('.list-want').find('.subtitle').text().trim(),
      'webpart':'.list-want (DestaquesThumbnails v2.0)',
      'version' : 'v0.2'
  }
  };
}
AddNewEvent('.list-want li a', "caixatec destques thumbnails", true, GetEventsDestaquesThumbnails);

  $('.list-icons li a').on('click', function (e) {
    TestDataLayer(e);
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
    'event':'Generic Event',
    'event_name' : "click_menu",
    'click_menu' : {
        'navItem': $(this).text().trim(),
        'menuType':'Nav bar',
        'buttonPosition': $(this).parents('.list-icons').find('.subtitle').text().trim(),
        'webpart':'.list-icons (DestaquesThumbnails v2.0)',
        'version' : 'v0.1'
    }
    });
  });
  $('.list-simulation li a').on('click', function (e) {
    TestDataLayer(e);
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
    'event':'Generic Event',
    'event_name' : "click_menu",
    'click_menu' : {
        'navItem': $(this).text().trim(),
        'menuType':'Nav bar',
        'buttonPosition': $(this).parents('.list-simulation').find('.subtitle').text().trim(),
        'webpart':'.list-simulation (DestaquesThumbnails v2.0)',
        'version' : 'v0.1'
    }
    });
  });
  $('#section-flow .main-icons a').on('click', function (e) {
    TestDataLayer(e);
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
    'event':'Generic Event',
    'event_name' : "click_menu",
    'click_menu' : {
        'navItem': $(this).text().trim(),
        'menuType':'Nav bar',
        'buttonPosition': $(this).parents('.main-info-icons').find('.title-center').text().trim(),
        'webpart':'#section-flow .main-icons a (custom)',
        'version' : 'v0.1'
    }
    });
  });
  
//list-icons  list-simulation

$('.slider_want li a').each(function() {
 $(this).data('ga4event', GetEventSliderWant(this));
});
function GetEventSliderWant(self){
  return {
    'event': 'Generic Event',
    'event_name' : "click_menu",
    'click_menu' :{
      'navItem': $(self).text().trim(),
          'menuType':'Menu Eu Quero',
          'elementLocation' : getCoords(self).percentageYpos,
          'webpart':'.slider_want (Caixatec WishList Slider)',
          'version' : 'v0.1'
    }
};
}
AddNewEvent('.slider_want li a', "click menu slider want", true, GetEventSliderWant);

$('.list_fundos a').on('click', function (e) {
  TestDataLayer(e);
  var productName = $(this).parents('li').find('.card-name').text().trim();

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "click_know_more",
      'click_know_more':{
        'productName':productName,
        'productType':'Fundos',
        'webpart':'Fundos Listing v2.0',
        'buttonPosition':'Fundos Listing v2.0',
        'version' : 'v0.1'
      }
  });
});

//locarent 
$('.list-cards .list .ListingCard a.ListingFooter').on('click', function (e) {
  TestDataLayer(e);
var pai = $(this).parents('.ListingCard');
var productName = $(pai).find('.ListingHeader h3').text();
var productCode = $(pai).find('.ListingHeader h3 p').text().replace('(ID:','').replace(')','');

window.dataLayer = window.dataLayer || []
window.dataLayer.push({
    'event': 'Generic Event',
    'event_name' : "click_know_more",
    'click_know_more':{
      'productName':productName,
      'productCode':productCode,
    'productType':'Locarent',
    'webpart':'SDCGD.Webparts.ListingFromList',
    'version' : 'v0.1'
}
});

});
$('.list-cards .list a.ListingContact').on('click', function (e) {
    TestDataLayer(e);
var pai = $(this).parents('.ListingItem');
var productName = $(pai).find('.ListingHeader h3').text();
var productCode = $(pai).find('.ListingHeader h3 p').text().replace('(ID:','').replace(')','');

 window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
          'event': 'Generic Event',
          'event_name' : "open_contact_form", 
          'open_contact_form' : {
          'productName':productName,
          'productCode':productCode,
          'clickText':  $(this).text().trim(),
          'formType': 'Pedido Contacto - Locarent',
          'webpart':'SDCGD.Webparts.ListingFromList',
          'version' : 'v0.1'
      }
      });
  
});


$('.filters nav a').on('click', function (e) {
  TestDataLayer(e);
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "click_menu",
      'click_menu' :{
        'navItem': $(this).text().trim(),
            'menuType':'Tabs Listing',
            'buttonPosition': $(this).parents('wrapper').find('title').text().trim(),
            'elementLocation' : getCoords(this).percentageYpos,
            'webpart':'.list-cards .filters (Caixatec Listing Produtos v2)',
            'version' : 'v0.1'
      }
  });
});
$('.filters-nav a').on('click', function (e) {
  if($(this).attr('data-ga4-event-name') === undefined && !$(this).hasClass('lightboxbcustom')){
  TestDataLayer(e);
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "click_menu",
      'click_menu' :{
        'navItem': $(this).text().trim(),
            'menuType':'Tabs Listing',
            'elementLocation' : getCoords(this).percentageYpos,
            'webpart':'Slider com tabs',
            'version' : 'v0.1'
      }
  });
}
});


$('.slide-Container a').on('click', function (e) {
  if($(this).attr('data-ga4-event-name') === undefined && !$(this).hasClass('lightboxbcustom')){
    TestDataLayer(e);
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        'event': 'Generic Event',
        'event_name' : "click_know_more",
        'click_know_more':{
          'productName': $(this).parents('.destaque-body').find('h4').text().trim(),
          'buttonLocation':'Slider com tabs',
        'clickText': $(this).text().trim(), //$(this).attr('title')
        'webpart':'Slider com tabs',
        'version' : 'v0.1'
    }
    });
  }
});

$('a.minCard-link').on('click', function (e) {
  TestDataLayer(e);
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "click_know_more",
      'click_know_more':{
        'buttonLocaton': $(this).find('.minCard-title').text().trim(),
        'productName': $(this).find('.minCard-title').text().trim(),
      //'clickText': $(this).text().trim(), //$(this).attr('title')
      'webpart':'Mini cards',
      'version' : 'v0.1'
  }
  });
});



$('.mapa .bullet-point a').on('click', function (e) {
  TestDataLayer(e);
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "click_know_more",
      'click_know_more':{
        'buttonLocation':$(this).find('.country-header h4').text().trim(),
      'clickText': $(this).find('.btn-saibaMais').text().trim(), //$(this).attr('title')
      'webpart':'Slider com tabs',
      'version' : 'v0.1'
  }
  });
});



// cred hab e auto
$('.list-cards .tabs-content .list a').each(function(e){
  var pai = $(this).parents('.tabs-content');
  if($(pai).find('.filters')){
    

    
    var li = $(this).parent('li');
    if(li.length>0){
      // Lista A  Nesta lista com filtros o <a> nao envolve o card todo
    // https://sdcgd.grupocgd.com/Empresas/Gestao_corrente/Aplicacoes-a-prazo/Pages/Aplicacoes-a-Prazo.aspx
   
    }else{
      // Lista B existe uma lista cmo filtros com o <a> a envolver o card todo e o saiba mais com link
      li = $(this).children('li');
      }
      //chegar ao li quando é clicado um <a> no footer
       if(li.length==0)
       li = $(this).closest('li')
      var segmento = $(li).data('segmentonome');
      var productType = $(li).data('gruponome');
      var codProduto = $(li).attr('class');
      var productName = $(li).find('.card-name').text().trim();  
      $(this).data('ga4-button-location','card');
    $(this).data('ga4-product-name',productName);
    //$(this).data('ga4-button-location',productName);
    $(this).data('ga4-product-type',productType);
    $(this).data('ga4-product-code',codProduto);

    if($(this).parent('.header').length>0){
      // Lista A 
      $(this).data('ga4-event-name','click_know_more');
      $(this).data('ga4-button-location','header');
      $(this).data('ga4-util-stop-propagation','true');
    }else if($(this).parent('li').length>0){
      // Lista A 
      $(this).data('ga4-event-name','click_know_more');
      $(this).data('ga4-button-location','image');
    }else if($(this).parent('.footer').length>0){

      $(this).data('ga4-button-location','footer');
      if($(this).hasClass('join')){
        $(this).data('ga4-event-name','click_subscribe');
        $(this).data('ga4-click-text',$(this).text().trim());
        $(this).data('ga4-util-stop-propagation','true');
        
      }else{
        $(this).data('ga4-event-name','click_know_more');
        $(this).data('ga4-click-text',$(this).text().trim());
        $(this).data('ga4-util-stop-propagation','true');
        
        
      }
    }else{
      // Lista B <a> em volta de tudo
      $(this).data('ga4-event-name','click_know_more');
      $(this).data('ga4-button-location','card');
    }

    $(this).addClass("event_ga4_datalayer");
    $(this).data('ga4-webpart','.list-cards (Caixatec Listing Produtos v2)');
    }else{
      // tem um a em volta de tudo e saiba mais nao tem link
      $(this).data('ga4-event-name','click_know_more');
      $(this).data('ga4-product-name',$(this).attr('title').replace('Saiba mais sobre ', '').trim());
      $(this).data('ga4-product-type',getAreaSubArea(2));
      $(this).data('ga4-button-location','card');
      $(this).attr('class',"event_ga4_datalayer");
      $(this).data('ga4-webpart','.list-cards (Caixatec Listing Produtos v2)');
    }
});

  
  $('div.highlight-slider').each(function(index){
      var bloco = this;
      
      $(bloco).children().on('click', function (e) {
        //var link = $(this).find('div.text a.link');
        // nao adianta repetir o evento. se o clique for no botao faz o buble e este vai disparar tb
        // nao vamos disparar este se vier do botao
        //link.length>0 && 

        if(e.target !== $(this).find('div.text a.link')[0]){
        TestDataLayer(e); // não funciona devido à forma como o banner está a fazer os links por window.location
        e.stopPropagation();
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(GetEventsBanner(this, bloco));

        var link = typeof $(this).data('link')  !== 'undefined' ? $(this).data('link') : $(this).parents('.container').data('link');
        var target = typeof $(this).data('target')  !== 'undefined' ? $(this).data('target') : $(this).parents('.container').data('target');

        if (link != null && link != "") {                                     
                if (target != null && target == '_blank') {
                    window.open(link);
                }
                else {
                    window.location.href = link;
                }
        }
      }
    });
      $(bloco).find('div.text a.link').on('click', function (e) {
        e.stopPropagation();
        TestDataLayer(e); // não funciona devido à forma como o banner está a fazer os links por window.location
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(GetEventsBannerCTA(this, bloco));
        var link = $(this).parents('.container').data('link');
        var target = $(this).parents('.container').data('target');

        if (link != null && link != "") {
                if (target != null && target == '_blank') {
                    window.open(link);
                }
                else {
                    window.location.href = link;
                }
        }
      });
  });
  webpartsList.push({"Class": 'div.highlight-slider', "Nome": "Banner", 'Evento':"true"});
  
  $('div.highlight-slider').each(function() {
   $(this).data('ga4event', GetEventsBanner(this));
 });
  function GetEventsBanner(self, bloco){
    var subtitleBanner = $(self).parent().find('.subtitle-banner').text().trim();
          var lead =  $(self).parent().find('.lead').text().trim();
          var subtitleLead =  $(self).parent().find('.subtitle-lead').text().trim();
    return {
      'event': 'Generic Event',
      'event_name' : "click_banner",
      'click_banner' : {
      'textBanner' :  subtitleBanner != "" ? subtitleBanner : (lead != "" ? lead : subtitleLead),
      'bannerPosition':$(bloco).children().index(self),
      'bannerLocation' : getCoords(self).percentageYpos,
      'imageFileName': $(self).find('.image img').attr('src'),
      'webpart':'.highlight-slider (Banner V3 (1 Coluna))',
      'version' : 'v0.1'
      }
  };
  }
  function GetEventsBannerManual(self, bloco){
   
    return {
      'event': 'Generic Event',
      'event_name' : "click_banner",
      'click_banner' : {
      //'textBanner' :  subtitleBanner != "" ? subtitleBanner : (lead != "" ? lead : subtitleLead),
      'bannerPosition':0,
      'bannerLocation' : getCoords(self).percentageYpos,
      'imageFileName': $(self).find('.image img').attr('src'),
      'webpart':'div.center-block:has(> a) (Banner manual)',
      'version' : 'v0.1'
      }
  };
  }


  webpartsList.push({"Class": 'div.center-block:has(> a)', "Nome": "Banner Manual", 'Evento':"true"});
  $('div.center-block').parents('a').each(function() {
   $(this).data('ga4event', GetEventsBannerManual(this));
 });

 $('div.center-block').parents('a').on('click', function (e) {
 TestDataLayer(e); // não funciona devido à forma como o banner está a fazer os links por window.location
 //e.stopPropagation(); ?
 window.dataLayer = window.dataLayer || []
 window.dataLayer.push(GetEventsBannerManual(this));
 });


  function GetEventsBannerCTA(self, bloco){
    var subtitleBanner = $(self).parent().find('.subtitle-banner').text().trim();
        var lead =  $(self).parent().find('.lead').text().trim();
        var subtitleLead =  $(self).parent().find('.subtitle-lead').text().trim();
    return {
      'event': 'Generic Event',
      'event_name' : "click_banner_cta",
      'click_banner_cta' : {
      'textBanner' :  subtitleBanner != "" ? subtitleBanner : (lead != "" ? lead : subtitleLead),
      'buttonPosition' : 'banner',
      'bannerPosition':$(bloco).find('div.text a.link').index(self),
      'bannerLocation' : getCoords(self).percentageYpos,
      'imageFileName': $(self).parents('.container').find('.image img').attr('src'),
      'clickText': $(self).find('em').text().trim(),
      'webpart':'.highlight-slider (Banner V3 (1 Coluna))',
      'version' : 'v0.1'
      }
  };
  }
  
  webpartsList.push({"Class": 'div.text a.link', "Nome": "Clique Banner CTA", 'Evento':"true"});
  $('div.text a.link').each(function() {
   $(this).data('ga4event', GetEventsBannerCTA(this));
 });

// AddNewEvent('div.text a.link', "Banner CTA", true, GetEventsBannerCTA);
  
  //abrir form ser contactado + evento abrir form
  $('.ga4pedircontacto').on('click', function (e) {
    e.preventDefault();
  var self = this;
  var mobile = false;
  if($('#sidebarM').css('display') == "block")
      mobile = true;
      if(mobile==false){
      
      var lb = $('.lightbox-content');
      var lbData = lb.data('frame').split('&amp;');
      var pageType = getPageType(lbData);
      lb.addClass('open');
      if (lb.data('frame')) openFrame($('.lightbox-center'), lb.data('frame'));
/*
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
          'event': 'Generic Event',
          'event_name' : "open_contact_form", 
          'open_contact_form' : {
          'buttonLocation':  $(self).data('buttonlocation'),
          'clickText':  $(self).data('buttonlocation'),
          'formType': 'Callback',
          'pageType': pageType,
          'version' : 'v0.1'
      }
      });
      */
     
  }else{
      window.location.href = $('.callback_m a.lightboxM').attr('href');
  }
  });
  //click num item do CaixaDestaquesV2
  // 1 <a> apenas em volta do card, saiba mais nao tem link
  /*
  $('.highlight-cards .list ul li>a:first-child').on('click', function (e) {
      TestDataLayer(e);
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(GetEventsCaixaDestaquesV2(this));
  });
  webpartsList.push({"Class": '.highlight-cards .list ul li>a:first-child', "Nome": "", 'Evento':"true"});
 $('.highlight-cards .list ul li>a:first-child').each(function() {
  $(this).data('ga4event', GetEventsCaixaDestaquesV2(this));
});
*/

function GetEventsCaixaDestaquesV2(self){
  var title = $(self).parent().find('.title-cards');
    var upperTitle = $(self).parent().find('.upper-title');
  return {
    'event': 'Generic Event',
    'event_name' : "click_know_more",
    'click_know_more':{
    'productName': title.text().replace('Saiba mais sobre ', '').trim(), //$(this).attr('title')
    'productType':upperTitle.text().trim(),
    'productCode': $(self).data('ga4ProductCode'),
    'grupoNome':$(self).data('ga4GrupoNome'),
    'subGrupoNome':$(self).data('ga4SubGrupoNome'),
    'segmentoNome':$(self).data('ga4SegmentoNome'),
    'webpart':$(self).data('ga4TipoListagem'),
    'buttonPosition':'(Destaques V2)',
    'version' : 'v0.2'
}
};
 }
 AddNewEvent('.highlight-cards .list ul li>a:first-child', "Saiba mais", true, GetEventsCaixaDestaquesV2);

function GetEventsCaixaDestaquesV2Join(self){
  var title = $(self).parent().find('.title-cards');
    var upperTitle = $(self).parent().find('.upper-title');
    return {
      'event': 'Generic Event',
      'event_name' : "click_subscribe",
      'click_subscribe':{
      'productName': title.text().replace('Saiba mais sobre ', '').trim(), //$(this).attr('title')
      'productType':upperTitle.text().trim(),
      'productCode': $(self).data('ga4ProductCode'),
      'grupoNome':$(self).data('ga4GrupoNome'),
      'subGrupoNome':$(self).data('ga4SubGrupoNome'),
      'segmentoNome':$(self).data('ga4SegmentoNome'),
      'webpart':$(self).data('ga4TipoListagem'),
      'buttonPosition':'(Destaques V2)',
      'version' : 'v0.2'
      }
    };
 }
 AddNewEvent('.highlight-cards .list ul li>a:nth-child(2)', "Subscrever", true, GetEventsCaixaDestaquesV2Join);
 /*
 $('.simContainer .cta a.join').on('click', function (e) {
  TestDataLayer(e);
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(GetEventsLojaEncomendar(this));
});
webpartsList.push({"Class": '.simContainer .cta a.join', "Nome": "CTA Encomendar", 'Evento':"true"});
$('.simContainer .cta a.join').each(function() {
$(this).data('ga4event', GetEventsLojaEncomendar(this));
});

function GetEventsLojaEncomendar(self){
return {
'event':"Generic Event",
'event_name' : 'click_subscribe',
'click_subscribe':{
  'productName': $('.splash-product h3.title').text().trim(), //$(this).attr('title')
  'productType':'',
//  'productCode': $(self).data('ga4ProductCode'),
  'grupoNome':$('.categoria-montra.title').text().trim(),
//  'subGrupoNome':$(self).data('ga4SubGrupoNome'),
  'segmentoNome':'LojaCaixa',
  'webpart':'Simulador',
  'version' : 'v0.1'
  }
};
}
*/
function GetEventsLojaTabs(self){
 return {
  'event': 'Generic Event',
  'event_name' : "click_menu",
  'click_menu' :{
    'navItem': $(self).text().trim(),
        'menuType':'Tabs',
        'elementLocation' : getCoords(self).percentageYpos,
        'webpart':'Tabs',
        'version' : 'v0.1'
  }
}
/*
 {
   'event': 'Generic Event',
   'event_name' : "click_know_more",
   'click_know_more':{
     'productName':$('.splash-product h3.title').text().trim(),
     'productType':'',
     //  'productCode': $(self).data('ga4ProductCode'),
       'grupoNome':$('#grupoNome').text(),
     //  'subGrupoNome':$(self).data('ga4SubGrupoNome'),
       'segmentoNome':'LojaCaixa',
     'webpart':'Tabs Loja',
     'version' : 'v0.1'
   }
}
*/;
}

AddNewEvent('.features .details .col .filters-montra-pcr a.tab-pcr:lt(2)', "Tab", true, GetEventsLojaTabs);

function GetEventsLojaTabsDocument(self){
  return{
    'event': 'Generic Event',
    'event_name' : "click_documentation",
    'click_documentation':{
      'productName':$('.splash-product h3.title').text().trim(),
      'productType':'',
      //  'productCode': $(self).data('ga4ProductCode'),
        'grupoNome':$('#grupoNome').text(),
      //  'subGrupoNome':$(self).data('ga4SubGrupoNome'),
        'segmentoNome':'LojaCaixa',
      'documentName': $(self).attr('href'),
      'clickText':$(self).text().trim(),
      'webpart':'Tabs Loja',
      'version' : 'v0.1'
    }
  };
}

AddNewEvent('.features .details .col .filters-montra-pcr a.tab-pcr:nth-child(3)', "Tab Document", true, GetEventsLojaTabsDocument);


/* documentos PDFs para Download */
  function GetEventsDocumentos(self){
    return{
      'event': 'Generic Event',
      'event_name' : "click_documentation",
      'click_documentation':{
        'documentName': $(self).attr('href'),
        'clickText':$(self).text().trim(),
        'webpart':'(Informaçoes Documentos)',
        'version' : 'v0.1'
      }
  };
  }

  AddNewEvent('.documents li a', "Informacoes e Documentos", true, GetEventsDocumentos);

  /*
  $('.documents li a').on('click', function (e) {
    TestDataLayer(e);
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        'event': 'Generic Event',
        'event_name' : "click_documentation",
        'click_documentation':{
          'documentName': $(this).attr('href'),
          'clickText':$(this).text().trim(),
          'webpart':'(Fundos Documentos)',
          'version' : 'v0.1'
        }
    });
});
*/


function GetEventsRendibilidadeDoc(self){
  return{
    'event': 'Generic Event',
    'event_name' : "click_documentation",
    'click_documentation':{
      'documentName': $(self).attr('href'),
      'clickText':$(self).text().trim(),
      'webpart':'Fundos Rendibilidade',
      'version' : 'v0.1'
    }
};
}

AddNewEvent('.fundosCotacao #toolbar #downloads a', "Fundos Rendibilidade Doc", true, GetEventsRendibilidadeDoc);

function GetEventsRendibilidadeCondicoes(self){
  return{
    'event': 'Generic Event',
    'event_name' : "click_documentation",
    'click_documentation':{
      'documentName': $(self).attr('href'),
      'clickText':$(self).text().trim(),
      'webpart':'Fundos Rendibilidade',
      'version' : 'v0.1'
    }
};
}

AddNewEvent('.fichacondicoes a.other_link', "Fundos Rendibilidade Condicoes", true, GetEventsRendibilidadeCondicoes);


function GetEventsRendibilidadeDetalhe(self){
  return{
    'event':'Generic Event',
    'event_name' : "click_know_more",
    'click_know_more':{
        'productName': $(self).text().trim(),
        'webpart':'Fundos Rendibilidade',
        'version' : 'v0.1'
    }
    };
}

AddNewEvent('.detalhesFundo a.nomeFundo', "Fundos Rendibilidade Aderir", true, GetEventsRendibilidadeDetalhe);

function GetEventsRendibilidadeAderir(self){
  return {
    'event':'Generic Event',
    'event_name' : "click_subscribe",
    'click_subscribe':{
        'productName': $(self).parents('.detalhesFundo').find('.nomeFundo').text().trim(),
        'buttonPostion':'Cotaçoes e Rendibilidade',
        'webpart':'Fundos Rendibilidade',
        'version' : 'v0.1'
    }
    };
}

AddNewEvent('.subscreverFundo a.subscreverFundoLink', "Fundos Rendibilidade Aderir", true, GetEventsRendibilidadeAderir);

function GetEventsRendibilidadeBottomAderir(self){
  return {
    'event':'Generic Event',
    'event_name' : "click_subscribe",
    'click_subscribe':{
        'productName': $('.fundosCotacao .detalhesFundo .nomeFundo:first').text().trim(),
        'buttonPostion':'Cotaçao, rendibilidade e risco',
        'webpart':'Fundos Rendibilidade',
        'version' : 'v0.1'
    }
    };
}

AddNewEvent('.aderir .sub-button_container a.button_link', "Fundos Rendibilidade Bottom Aderir", true, GetEventsRendibilidadeBottomAderir);

  function GetEventsFundosVantagensSimular(self){
    return {
      'event':'Generic Event',
      'event_name' : "click_simulate",
      'click_simulate':{
          'buttonPosition': 'Vantagens',
          'productName': $('.fundosCotacao .detalhesFundo .nomeFundo').text().trim(),
          'webpart':'Fundos Vantagens',
          'version' : 'v0.1'
      }
      };
  }
  
 AddNewEvent('#fundoDetalheControl .simulatorDiv a.button_link', "Fundos Vantagens Simular", true, GetEventsFundosVantagensSimular);


  function GetEventsFundosListing(self){
     var productName = $(self).find('.name').text().trim();
    var productType = $(self).find('.group').text().trim();
    return {
      'event': 'Generic Event',
      'event_name' : "click_know_more",
      'click_know_more':{
        'productName':productName,
        'productType':productType,
        'webpart':'Fundos Listing v2.0',
        'buttonPosition':'Fundos Listing v2.0',
        'version' : 'v0.1'
      }
  };
  }

 AddNewEvent('.fundosListing div div.flCards ul li a', "Fundos Listing", true, GetEventsFundosListing);

  /* botao caixadirecta 
  $('.toolbox .direct a').on('click', function (e) {
      TestDataLayer(e);
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
          'event': 'Generic Event',
          'event_name' : "open_login_cdo",
          'open_login_cdo':{
            'version' : 'v0.1'}
      });
  });
  */

  /* pesquisa */
  function GetEventsSearch(self){
    return {
          'event': 'Generic Event',
          'event_name' : "search",
          'search':{
              'searchTerm': $(self).prev().val().trim(),
              'version' : 'v0.1'
          }
      };
  }

 AddNewEvent('.search-wrapper .search-content .go', "Search", true, GetEventsSearch);

  /* choose language */
  function GetEventsChooseLanguage(self){
    return {
          'event': 'Generic Event',
          'event_name' : "choose_language",
          'choose_language':{
              'selectedLanguage': $(self).text().trim(),
              'version' : 'v0.1'
          }
      };
  }

 AddNewEvent('.header-site .menu-header .languages li a', "Lingua", true, GetEventsChooseLanguage);

  /*Menu prmeiro nivel */
  function GetEventsMenu1Nivel(self){
    return {
          'event': 'Generic Event',
          'event_name' : "click_menu",
          'click_menu':{
              'navItem': $(self).text().trim(),
              'menuType':'Topmenu',
              'version' : 'v0.1'
          }
      };
  }

 AddNewEvent('.menu-center li a', "Menu 1 nivel", true, GetEventsMenu1Nivel);

  /* MEnu segundo nivel
  $('.menu-area .menu li a').on('click', function (e) {
      TestDataLayer(e);
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
          'event': 'Generic Event',
          'event_name' : "click_menu",
          'click_menu':{
              'navItem': $('.menu-center li.active a').text().trim(),
              'menuCategory': $(this).text().trim(),
              'menuType':'Menu',
              'version' : 'v0.1'
          }
      });
  });
  */
  
  /* menu 3 nivel */
   function GetEventsMenu3Nivel(self){
    return {
      'event': 'Generic Event',
      'event_name' : "click_menu",
      'click_menu':{
          'navItem': $('.menu-center li.active a').text().trim(),
          'menuSubCategory': $(self).parents('ul').find('li:first-child').text().trim(),
          'menuCategory': $('.menu-area .menu li.active a').text().trim(),
          'menuItem': $(self).text().trim(),
          'menuType':'Submenu',
          'version' : 'v0.1'
      }
  };
  }
  
 AddNewEvent('.content-drop .drop-menu ul li a', "Menu 3 nivel", true, GetEventsMenu3Nivel);

 /* footer */

  function GetEventsFooter(self){
    return {
      'event': 'Generic Event',
      'event_name' : "click_nav_footer",
      'click_nav_footer':{
          'navItem': $(self).text().trim(),
          'navCategory': $(self).parents('dl').find('dt').text().trim(),
          'location':'footer',
          'version' : 'v0.1'
      }
  };
  }

 AddNewEvent('.footer-area dl a', "Footer", true, GetEventsFooter);
  
  /* footer general links */
  function GetEventsFoterGeneralLinks(self){
    return {
      'event': 'Generic Event',
      'event_name' : "click_nav_footer",
      'click_nav_footer':{
          'navItem': $(self).text().trim(),
          'navCategory': $(self).parents('dl').find('dt').text().trim(),
          'location':'general links',
          'version' : 'v0.1'
      }
  };
  }
  AddNewEvent('.general-links dl dd a', "Footer", true, GetEventsFoterGeneralLinks);

  
  /* Redes Sociais */
  function GetEventsRedesSociais(self){
    return {  
      'event': 'Generic Event',
    'event_name' : "social_link",
    'social_link':{
        'socialItem': $(self).find('span').text().trim(),
        'version' : 'v0.1'
    }
  };
  }
  AddNewEvent('li.rs-icon a', "Social", true, GetEventsRedesSociais);



  
  var linkLB = $('#sidebar a.lightbox'),
    linkLA = $('#sidebarM a.lightboxM');

linkLA.on('click', function (e) {
    var lb = $(this).parent().parent().next('.lightbox-content');
    var lbData = lb.data('frame').split('&amp;');
    
    var pageType = getPageType(lbData);    

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "open_contact_form",
      'open_contact_form':{
        'buttonLocation': 'Bottom',
        'formType': 'Callback',
        'pageType': pageType,
        'contactFormPosition': 'Sticky',
        'clickText':  $(this).text().trim(),
        'webpart':'',
        'version' : 'v0.1'
      }
    });
});
linkLB.on('click', function (e) {
  e.preventDefault();
  var lb = $(this).parent().parent().next('.lightbox-content');
  var lbData = lb.data('frame').split('&amp;');
  var pageType = getPageType(lbData);

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
      'event': 'Generic Event',
      'event_name' : "open_contact_form",
      'open_contact_form':{
        'buttonLocation': 'Floater',
        'formType': 'Callback',
        'pageType': pageType,
        'contactFormPosition': 'Sticky',
        'clickText':  $(this).text().trim(),
        'webpart':'',
        'version' : 'v0.1'
      }
  });
});
function GetEventsStickyBarJoin(self){
return {
  'event': 'Generic Event',
  'event_name' : "click_subscribe",
  'click_subscribe' : {
  'textBanner' :  $(self).parents('.sticky-bar').find('h2.title-sticky').text().trim(),
  'buttonPosition' :  'sticky',
  'bannerLocation' : getCoords(self).percentageYpos,
  'clickText': $(self).text().trim(),
  'webpart':'splash produtos antigo',
  'version' : 'v0.1'
  }
};
}

 function AddNewEvent(classe, nome, bEvento, func){
    webpartsList.push({"Class": classe, "Nome": nome, 'Evento':bEvento});
    $(classe).each(function() {
      $(this).data('ga4event', func(this));
    });
  $(classe).on('click', function (e) {
    TestDataLayer(e);
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(func(this));
  });
 }
 AddNewEvent('.sticky-bar .join', "splash produtos antigo CTA", true, GetEventsStickyBarJoin);

 function GetEventsSplashProduct(self){
  var subtitleBanner = $(self).parents('.splash-text-container').find('h3.title').text().trim();
  var lead =  $(self).parents('.splash-text-container').find('h2.title-card').text().trim();
  return {
    'event': 'Generic Event',
    'event_name' : "click_banner_cta",
    'click_banner_cta' : {
    'textBanner' :  subtitleBanner != "" ? subtitleBanner : (lead != "" ? lead : ""),
    'buttonPosition' : 'splash',
    /* 'imageFileName': $(this).parents('.container').find('.image img').attr('src'), */
    'bannerLocation' : getCoords(self).percentageYpos,
    'clickText': $(self).text().trim(),
    'webpart':'splash produtos',
    'version' : 'v0.1'
    //'imageFileName':  $(this).parents('.container').find('.image img').attr('src'),
    }
};
 }
 AddNewEvent('.splash-product .join', "Splash produto CTA", true, GetEventsSplashProduct);
 AddNewEvent('.splash-product .info-simular .btn_simular', "Splash produto CTA", true, GetEventsSplashProduct);

/* layuot produto antigo botao simular*/
function GetEventsSplashProductOldSimular(self){

  return {
    'event': 'Generic Event',
    'event_name' : "click_simulate",
    'click_simulate' : {
    /* 'imageFileName': $(this).parents('.container').find('.image img').attr('src'), */
    'elementLocation' : getCoords(self).percentageYpos,
    'clickText': $(self).text().trim(),
    'webpart':'splash produtos antigo',
    'version' : 'v0.1'
    //'imageFileName':  $(this).parents('.container').find('.image img').attr('src'),
    }
};
 }
 AddNewEvent('.splash-product .simular a.btn_simular', "Splash produto antigo CTA", true, GetEventsSplashProductOldSimular);

 /* buttonLocation
: 
"Floater"
contactFormPosition
: 
"Sticky"
event
: 
"open_product_contact_form"
formType
: 
"Callback"
pageType
: 
"" */
};
var Starte = function(arg) { // core constructor
  if (arguments.length == 2) {
  }
  // ensure to use the `new` operator
  if (!(this instanceof Start))
    return new Start(arg);
  // store an argument for this example
  this.myArg = arg;
  
  GetEvents();
  //..
  return this;
};


var NewGa4Event = function(el){
  var eventJson = {};
  eventJson.events = {};
  eventJson.utils = {};
  $.each($(el).data(), function(nome,valor){
    eventJson.events['elementLocation']= getCoords(el) ? getCoords(el).percentageYpos : '';
    if(nome.slice(0,3) === "ga4" && nome.slice(3,8) !== "debug" && nome === "ga4EventName"){
      nome = nome.replace('ga4','');
      if(valor=="click_subscribe" || valor=="click_know_more" )
      {
        eventJson.events["clickText"]= $(el).text().trim();
      }
      console.log(nome, valor); 
    }else   
    if(nome.slice(0,3) === "ga4" && nome.slice(3,8) !== "debug" && nome !== "ga4EventName" && nome !== "ga4UtilStopPropagation" && nome!=="ga4Hreffix" ){
          nome = nome.replace('ga4','');
          
          nome = nome.charAt(0).toLowerCase() + nome.slice(1);
          eventJson.events[nome]=valor
          console.log(nome, valor); 
      }
      //else if(nome === "ga4UtilStopPropagation"){
      //  eventJson.utils['stopPropagation']=valor;
      //}
  });

  console.log(' ')

      var newEvent = {
          'event': 'Generic Event',
          'event_name': $(el).data('ga4EventName'),
          [$(el).data('ga4EventName')] : eventJson.events
      };
     
      return newEvent;
  },
  GetEvents = function(){
      $(baseEventName).on('click', function (e) {
      TestDataLayer(e);
      if(typeof $(this).data('ga4UtilStopPropagation') !== 'undefined')
      e.stopPropagation() 

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(NewGa4Event(this));
      if(typeof $(this).data('ga4Hreffix') !== 'undefined' && bTestDataLayer==false)
      window.location.href = $(this).data('ga4Hreffix').slice(0,1) == '?' ? window.location.pathname + $(this).data('ga4Hreffix') : $(this).data('ga4Hreffix')
  });

};
var Ga4Events = {
  Debug,
  Start,
  ShowEvents,
  HideEvents,
  NewGa4Event,
  webpartsList
}; 
// create `fn` alias to `prototype` property
Ga4Events.fn = Ga4Events.prototype = {
  init: function () {alert('init')}
  //...
};

// expose the library
window.Ga4Events = Ga4Events;

})();
//Ga4Events.Debug(true);
Ga4Events.Start();
