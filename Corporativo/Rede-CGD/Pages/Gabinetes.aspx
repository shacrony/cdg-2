<!DOCTYPE html><!-- CGDV2 --><html class="no-js ms-isBot" lang="pt-PT" dir="ltr"><head id="ctl00_Head1"><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=Edge" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" /><meta name="google-site-verification" content="bzJQSPKIz3Ap0uft3cdXNV0lusCPODiQqAXeCCXSwUY" /><link rel="index" href="/" title="Página inicial" /><link rel="sitemap" href="/Pages/Mapa-Site.aspx" title="Mapa do Site" /><link rel="search" title="Pesquisa" href="/Pesquisa/Pages/Resultados-PesquisaV2.aspx" /><!--[If IE]><link rel="icon" href="/PublishingImages/WSImages/Novo-CGD/favicon.ico?v=2" type="image/x-icon" /><link rel="shortcut icon" href="/PublishingImages/WSImages/Novo-CGD/favicon.ico?v=2" /><![endif]--><link rel="shortcut icon" href="/PublishingImages/WSImages/Novo-CGD/favicon.ico.png" /><link rel="shortcut icon" href="/PublishingImages/WSImages/Novo-CGD/favicon.ico.png" type="image/vnd.microsoft.icon" id="favicon" /><meta name="msapplication-TileImage" content="/_layouts/15/images/SharePointMetroAppTile.png" /><meta name="msapplication-TileColor" content="#0072C6" /><title>
	Gabinetes Empresa
</title><script type="text/javascript" src="/ruxitagentjs_ICA27NVfijoqrux_10263230921131557.js" data-dtconfig="rid=RID_-221301684|rpid=2042043402|domain=cgd.pt|reportUrl=/rb_bf03768tsx|app=b376b8715e86187f|cuc=9p0vz9fb|mel=100000|srdinitrec=1|featureHash=ICA27NVfijoqrux|dpvc=1|lastModification=1731516913273|srsr=2000|tp=500,50,0,1|rdnt=1|uxrgce=1|agentUri=/ruxitagentjs_ICA27NVfijoqrux_10263230921131557.js"></script><script type='text/javascript'>var _spBodyOnLoadFunctionNames = window._spBodyOnLoadFunctionNames || [];</script><!-- Início do aviso de consentimento de cookies OneTrustcgd.pt --><script src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js' data-document-language='true' type='text/javascript' charset='UTF-8' data-domain-script='93d6fc72-1c86-49f0-98c9-c32a147cb8cf'></script><script type='text/javascript'>
                                     function OptanonWrapper() { 
                                        // Get initial OnetrustActiveGroups ids
                                        if (typeof OptanonWrapperCount == "undefined") {
                                            otGetInitialGrps();
                                        }

                                        //Delete cookies
                                        otDeleteCookie(otIniGrps);                                            

                                        // Assign OnetrustActiveGroups to custom variable
                                        function otGetInitialGrps() {
                                            OptanonWrapperCount = '';
                                            otIniGrps = OnetrustActiveGroups;
                                        }

                                        function otDeleteCookie(iniOptGrpId) {
                                            var otDomainGrps = JSON.parse(JSON.stringify(Optanon.GetDomainData().Groups));
                                            var otDeletedGrpIds = otGetInactiveId(iniOptGrpId, OnetrustActiveGroups);
                                            if (otDeletedGrpIds.length != 0 && otDomainGrps.length != 0) {
                                                for (var i = 0; i < otDomainGrps.length; i++) {
                                                    //Check if CustomGroupId matches
                                                    if (otDomainGrps[i]['CustomGroupId'] != '' && otDeletedGrpIds.includes(otDomainGrps[i]['CustomGroupId'])) {
                                                        for (var j = 0; j < otDomainGrps[i]['Cookies'].length; j++) {
                                                            //Delete cookie
                                                            eraseCookie(otDomainGrps[i]['Cookies'][j]['Name'], otDomainGrps[i]['Cookies'][j]['Host']);
                                                        }
                                                    }

                                                    //Check if Hostid matches
                                                    if (otDomainGrps[i]['Hosts'].length != 0) {
                                                        for (var j = 0; j < otDomainGrps[i]['Hosts'].length; j++) {
                                                            //Check if HostId presents in the deleted list and cookie array is not blank
                                                            if (otDeletedGrpIds.includes(otDomainGrps[i]['Hosts'][j]['HostId']) && otDomainGrps[i]['Hosts'][j]['Cookies'].length != 0) {
                                                                for (var k = 0; k < otDomainGrps[i]['Hosts'][j]['Cookies'].length; k++) {
                                                                    //Delete cookie
                                                                    eraseCookie(otDomainGrps[i]['Hosts'][j]['Cookies'][k]['Name'], otDomainGrps[i]['Hosts'][j]['Cookies'][k]['Host']);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }

                                                otGetInitialGrps(); //Reassign new group ids
                                                location.reload();
                                            }
                                            else {                                                
                                                otGetInitialGrps(); //Reassign new group ids
                                            }
                                        }

                                        //Get inactive ids
                                        function otGetInactiveId(customIniId, otActiveGrp) {
                                            //Initial OnetrustActiveGroups
                                            customIniId = customIniId.split(',');
                                            customIniId = customIniId.filter(Boolean);

                                            //After action OnetrustActiveGroups
                                            otActiveGrp = otActiveGrp.split(',');
                                            otActiveGrp = otActiveGrp.filter(Boolean);

                                            var result = [];

                                            for (var i = 0; i < customIniId.length; i++) {
                                                if (otActiveGrp.indexOf(customIniId[i]) <= -1) {
                                                    result.push(customIniId[i]);
                                                }
                                            }

                                            return result;
                                        }

                                        //Delete cookie
                                        function eraseCookie(name, domainName) {
                                            //Delete root path cookies
                                            if (domainName == null) {                                                
                                                domainName = window.location.hostname;
                                            }

                                            document.cookie = name + '=; Max-Age=-99999999; Path=/;Domain=' + domainName;
                                            document.cookie = name + '=; Max-Age=-99999999; Path=/;';

                                            //Delete LSO incase LSO being used, cna be commented out.
                                            localStorage.removeItem(name);

                                            //Check for the current path of the page
                                            pathArray = window.location.pathname.split('/');
                                            //Loop through path hierarchy and delete potential cookies at each path.
                                            for (var i = 0; i < pathArray.length; i++) {
                                                if (pathArray[i]) {
                                                    //Build the path string from the Path Array e.g /site/login
                                                    var currentPath = pathArray.slice(0, i + 1).join('/');
                                                    document.cookie = name + '=; Max-Age=-99999999; Path=' + currentPath + ';Domain=' + domainName;
                                                    document.cookie = name + '=; Max-Age=-99999999; Path=' + currentPath + ';';
                                                    //Maybe path has a trailing slash!
                                                    document.cookie = name + '=; Max-Age=-99999999; Path=' + currentPath + '/;Domain=' + domainName;
                                                    document.cookie = name + '=; Max-Age=-99999999; Path=' + currentPath + '/;';
                                                }
                                            }

                                            if(name.includes('*')) {
                                                var regex = name.replace('*', ".*?=");
                                                var regexpStr = "/" + regex + "/g";
                                                var regexp = stringToRegex(regexpStr);
                                                var matches = document.cookie.match(regexp);

                                                if(matches != null) {
                                                    matches.forEach(function (match) {
                                                        eraseCookie(match.replace("=", ''));
                                                    });
                                                }
                                            }
                                        }

                                        function stringToRegex(str) {
                                            // Main regex
                                            const main = str.match(/\/(.+)\/.*/)[1]

                                            // Regex options
                                            const options = str.match(/\/.+\/(.*)/)[1]

                                            // Compiled regex
                                            return new RegExp(main, options)
                                        }
                                    }
                                </script><!-- Final do aviso de consentimento de cookies OneTrustcgd.pt --><style id="icomoon-fontface">
    @font-face {
      font-family: "icomoon";
      src:
        url("/PublishingImages/WSImages/Novo-CGD/fonts-icomoon/icomoon.eot?v=2308241521") format("embedded-opentype"),
        url("/PublishingImages/WSImages/Novo-CGD/fonts-icomoon/icomoon.woff?v=2308241521") format("woff"),
        url("/PublishingImages/WSImages/Novo-CGD/fonts-icomoon/icomoon.ttf?v=2308241521") format("truetype"), 
        url("/PublishingImages/WSImages/Novo-CGD/fonts-icomoon/icomoon.svg?v=2308241521") format("svg");
  font-weight: normal;
  font-style: normal;
    }
</style><link id="icomoon-styles" rel="stylesheet" href="/PublishingImages/WSImages/Novo-CGD/fonts-icomoon/icomoon-styles.css?v=2708241424"/><link rel="stylesheet" href="/_layouts/15/1033/STYLES/CaixatecCGDLayoutsV2/layout/base.m.c.min.css?v=20240421" id="cssbase" /><!----><link rel="stylesheet" type="text/css" href="/_layouts/15/1033/STYLES/CaixatecCGDLayoutsV2/layout/IE8.tomin.min.css?v=09122016" /><link rel="stylesheet" type="text/css" href="/_layouts/15/1033/STYLES/CaixatecCGDLayoutsV2/layout/rede-agencias2.css?v=26042019"/><meta name="twitter:card" content="summary"><meta property="og:description" name="twitter:description" content="Há um Banco que ajuda a dar certezas ao futuro: A Caixa. Com Certeza." /><meta property="og:title" name="twitter:title" content="Gabinetes Empresa" /><meta name="KEYWORDS" content="Banco, Simuladores, Homebanking, Bolsa, Investir,  Fundos, Créditos, Financiamento, Seguros, Agências, Refinanciamento, Cartões, Poupança, Empreendedorismo, Oferta Sectorial, Plataforma Internacional, Internacionalização, Exportações, PME, Factoring, Negociação Cambial"><link rel="canonical" href="https://www.cgd.pt:443/Corporativo/Rede-CGD/Pages/Gabinetes.aspx" /><link rel="stylesheet" type="text/css" href="/PublishingImages/WSImages/Novo-CGD/cgdpt_o.css?v=2210241231"/><script src="/_layouts/15/CaixatecCGDLayoutsV2/js/libs/modernizr-3.5.0.min.js"></script><script type='text/javascript'>
                    var _paq = window._paq || [];  
                </script><script type='text/plain' class='optanon-category-C0002'>
                                /* Matomo */                            
                                /* tracker methods like 'setCustomDimension' should be called before 'trackPageView' */
                                _paq.push(['setCustomUrl', location.href.toLowerCase()]);
                                _paq.push(['trackPageView']);
                                _paq.push(['enableLinkTracking']);
                                _paq.push(['trackAllContentImpressions']);
                                (function() {
                                    var u='https://app.cgd.pt/pwa/';
                                    _paq.push(['setTrackerUrl', u+'matomo.php']);
                                    _paq.push(['setSiteId', '23']);
                                    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                                    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                                })();
                                /* End Matomo */
                            </script><script type='text/plain' class='optanon-category-C0002'>
                                /* Matomo Tag Manager */
                                var _mtm = _mtm || [];
                                _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
                                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                                g.type='text/javascript'; g.async=true; g.defer=true; g.src='https://app.cgd.pt/pwa/js/container_1MzhO1Ne.js'; s.parentNode.insertBefore(g,s);
                                /* End Matomo Tag Manager */
                            </script><script>
                           var navType = 'Other';
                            switch (performance.getEntriesByType('navigation')[0].type) {
                                case 'navigate':
                                    navType = 'Navigate';
                                    break;
                                case 'reload':
                                    navType = 'Reload';
                                    break;
                                case 'back_forward':
                                    navType = 'Back / Forward';
                                    break;
                                default:
                                    break;
                            }

                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                'navigationType': navType,
                            });
                        </script><script type='text/javascript'>
                if (!String.prototype.startsWith) {
                    Object.defineProperty(String.prototype, 'startsWith', {
                        value: function(search, rawPos) {
                            var pos = rawPos > 0 ? rawPos|0 : 0;
                            return this.substring(pos, pos + search.length) === search;
                        }
                    });
                }
              
                function getCookie( name ) {
                    var cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
                    return cookie != null ? cookie.pop() : '';
                }

                function setCookie(name, value, exdate) {
                    //If exdate exists then pass it as a new Date and convert to UTC format
                    (exdate) && (exdate = new Date(exdate).toUTCString());
                    var c_value = escape(value) + ((exdate === null || exdate === undefined) ? '' : '; expires = ' + exdate);
                    document.cookie = name + '=' + c_value + '; path =/ ';
                };

                function addMonths(date, months) {
                    var d = date.getDate();
                    date.setMonth(date.getMonth() + +months);
                    if (date.getDate() != d) {
                      date.setDate(0);
                    }
                    return date;
                }

                var ref = document.referrer;
               if (ref.startsWith('https://caixadirectaonline.cgd.pt')) {
                    var oldCookie = getCookie('gtmp');
                    var oldParams = new URLSearchParams(decodeURIComponent(oldCookie));

                    oldParams.set('isClient', 'Yes');

                    setCookie('gtmp', oldParams.toString(), addMonths(new Date(), 12));

                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'isClient': 'Yes',
                    });
                } else {
                    var cookie = getCookie('gtmp');

                    if (cookie != '') {
                        var params = new URLSearchParams(decodeURIComponent(cookie));

                        if (params.has('isClient')) {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'isClient': 'Yes',
                        });
                        } else {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                'isClient': 'No',
                            });
                        }
                    } else {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'isClient': 'No',
                        });
                    }
                }
                
                </script><script type='text/javascript'>     
                            /* Google Tag Manager */
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KGMG7W6');
                            /* End Google Tag Manager */
                        </script><script type='text/plain' class='optanon-category-C0004' src='//cdn.evgnet.com/beacon/caixageraldedepositossa/production_cgd_pt/scripts/evergage.min.js'></script><script type='text/plain' class='optanon-category-C0004' src='https://try.abtasty.com/3268190f86be4abbfa5adb3432b12a47.js'></script></head><!--[if IE 8 ]><body data-control="COMMON" class="prod ie8 inside"><![endif]--><!--[if IE 9 ]><body data-control="COMMON" class="prod ie9 inside"><![endif]--><!--[if gt IE 9]><!--><body data-control="COMMON" class="prod inside"><!--<![endif]--><!-- Google Tag Manager (noscript) --><noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-KGMG7W6' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript><!-- End Google Tag Manager (noscript) --><div id="imgPrefetch" style="display:none"><img alt="logo CGD" src="/PublishingImages/WSImages/Novo-CGD/favicon.ico.png?rev=23" /></div><div class="aspNetHidden"></div><div><div id="s4-ribbonrow" style="visibility:hidden;display:none"></div></div><div id="s4-workspace"><div id="s4-bodyContainer"><a id="accessMainContent" class="access-main" href="#mainContent"></a><!-- ===== STARTER: This decides where the web part menu lives ===================================================== --><div id="ctl00_DeltaPlaceHolderMain"><header class="header-site hideprint"><div id="ctl00_SearchCrawlExclusionControl3"><div class="menu-wrapper"><nav class="menu-site"><div class="menu-header"><div class="menu-languages"><ul class="languages"><li class="active"><a href="/" onclick="_paq.push(['trackEvent', 'Top Menu', 'PT']); return true;">Pt</a></li><li><a href="/english/" onclick="_paq.push(['trackEvent', 'Top Menu', 'EN']); return true;">En</a></li></ul></div><ul class="menu-center" id="menu"><li class=""><a href="/Particulares/Pages/Particulares_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Particulares' ]); return true;">Particulares</a></li><li class=""><a href="/Empresas/Pages/Empresas_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Empresas' ]); return true;">Empresas</a></li><li class=""><a href="/Institucional/Pages/Institucional_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Institucional' ]); return true;">Institucional</a></li><li class=""><a href="/Sustentabilidade/Pages/Sustentabilidade.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Sustentabilidade' ]); return true;">Sustentabilidade</a></li><li class=""><a href="/Investor-Relations/Pages/Investor-Relations_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Investor Relations' ]); return true;">Investor Relations</a></li><li class=""><a href="/Ajuda/Pages/Ajuda.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Ajuda' ]); return true;">Ajuda</a></li><li class=""><a href="/Saldo-Positivo/Pages/Saldo-Positivo.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Saldo Positivo' ]); return true;">Saldo Positivo</a></li></ul><div class="toolbox menu-direct"><div class="direct"><a href="#" class="direct-link desktop">Caixadirecta</a><a href="#" class="direct-link mobile">Login</a></div></div><div class="menu-mobile"><div class="selected">O Nosso Banco</div><ul class="menu-center-mobile"><li class="active"><a href="/">O Nosso Banco</a></li><li class=""><a href="/Particulares/Pages/Particulares_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Particulares' ]); return true;">Particulares</a></li><li class=""><a href="/Empresas/Pages/Empresas_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Empresas' ]); return true;">Empresas</a></li><li class=""><a href="/Institucional/Pages/Institucional_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Institucional' ]); return true;">Institucional</a></li><li class=""><a href="/Sustentabilidade/Pages/Sustentabilidade.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Sustentabilidade' ]); return true;">Sustentabilidade</a></li><li class=""><a href="/Investor-Relations/Pages/Investor-Relations_v2.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Investor Relations' ]); return true;">Investor Relations</a></li><li class=""><a href="/Ajuda/Pages/Ajuda.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Ajuda' ]); return true;">Ajuda</a></li><li class=""><a href="/Saldo-Positivo/Pages/Saldo-Positivo.aspx" onclick="_paq.push(['trackEvent', 'Top Menu', 'Saldo Positivo' ]); return true;">Saldo Positivo</a></li></ul><div class="close-menu"></div></div></div></nav></div><div class='direct-wrapper '><div class="direct-content desktop clearfix"><div class="apCDO"><h2 class="title-access">Acesso Caixadirecta</h2></div><div class="direct-close"><a href="#">x</a></div><div class="access" id="login"><div class="div-ceb"><h2 class="login-segmento">Empresas</h2><form action="https://caixaebankingonline.cgd.pt/ceb/login.seam" method="post"><fieldset class='complete desktop'><legend class='hidden'>Código de empresa</legend><span>Empresas</span><div><label for='input_cx2' class='hidden'>Código de empresa <span class='offset'>Código de Empresa</span></label><input onkeypress="return isn(event,this.id,'Preencha, por favor, o n\372mero de contrato do Caixadirecta empresas')" onclick="return true;" maxlength='7' value='Código de empresa' onblur="if(this.value=='') this.value='Código de empresa'" onfocus="if(this.value=='Código de empresa') this.value=''" name='USERNAME' id='input_cx2' class='select' type='text'><input name='login_btn_2' id='login_btn_2' class='okbtn' value='OK' onClick="return cdosubmit('input_cx2','Código de empresa','Preencha, por favor, o n\372mero de contrato do Caixadirecta empresas')" type='submit'><div class='note'><a href='/Empresas/Gestao_corrente/Servicos/Pages/Ajuda-Caixadirecta-Empresas.aspx' onClick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Empresas - Ajuda']);">Ajuda Empresas</a></div></div></fieldset></form></div><div class="div-cdo"><h2 class="login-segmento">Particulares</h2><form action="https://caixadirectaonline.cgd.pt/cdo/login.seam" method="post"><fieldset class='complete desktop loginsepd'><legend class='hidden'>Nº de Contrato</legend><span>Particulares</span><div><label for='input_cx1' class='hidden'>Nº de Contrato <span class='offset'>Número de contrato</span></label><input onkeypress="return isn(event,this.id,'Preencha, por favor, o n\372mero de contrato do Caixadirecta on-line')" onclick="return true;" maxlength='7' onblur="if(this.value=='') this.value='Nº de Contrato'" onfocus="if(this.value=='Nº de Contrato') this.value=''" value='Nº de Contrato' name='USERNAME' id='input_cx1' class='select' type='text'><input name='login_btn_1' id='login_btn_1' class='okbtn' value='OK' onClick="return cdosubmit('input_cx1','Nº de Contrato','Preencha, por favor, o n\372mero de contrato do Caixadirecta on-line')" type='submit'><div class='note'><a href='/Particulares/Contas/Caixadirecta/Pages/Ajuda-Caixadirecta.aspx' onClick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Particulares - Ajuda']);">Ajuda Particulares</a></div><input value="" name="tipoTrat"  type="hidden" /><input value="" name="codFamiliaProduto" type="hidden" /><input value="" name="numIntEspecie" type="hidden" /><input value="" name="RedirFunc" type="hidden" /></div></fieldset></form><div class="div-chave"><div class="img-chave"><a href="https://caixadirectaonline.cgd.pt/cdo/loginAMA.seam" title="Autenticação com chave movel"><img alt="Chave móvel digital" src="/PublishingImages/WSImages/Novo-CGD/linkGOV.png"></a></div><div class="note"><a href="/Ajuda/Seguranca/Pages/Pedir-Chave-Movel-Digital.aspx" target="_blank">Saiba mais sobre a Chave Móvel Digital</a></div></div></div></div><div style="float:left"><div class="col1"><p class="ap aptitle">Quero ser cliente:</p><p class="ap seta"><a href="/Particulares/Contas/RedirectTo/Pages/Redirectto.aspx" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Particulares - Adesão']);">Aderir ao Caixadirecta Particulares</a></p><p class="ap seta"><a href="/Empresas/Gestao_corrente/Servicos/Pages/Caixadirecta-Empresas.aspx" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Empresas - Adesão']);">Aderir ao Caixadirecta Empresas</a></p></div><div class="col2"><p class="ap aptitle">Links úteis:</p><p class="ap seta"><a href="/ajuda/APPs-Redes-Sociais-CGD/Pages/Apps-Caixa.aspx" class="app" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Download']); return true;">Faça download da App Caixadirecta</a></p><p class="ap seta"><a href="/ajuda/Seguranca/Pages/Seguranca-e-Fraude.aspx" class="security" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Segurança']); return true;">Recomendações de Segurança</a></p><p class="ap seta"><a href="/Empresas/Gestao_corrente/Servicos/Pages/AssinaturaCDE.aspx" class="docsignature" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Assinatura Documentos']); return true;">Assinatura Digital de Documentos</a></p></div></div></div><div class="direct-content mobile clearfix"><a href="#" class="close">Fechar</a><h2 class="title-access">Acesso Caixadirecta</h2><div class="access"><div class="div-cdo" ><h2 class="login-segmento">Particulares</h2><form action="https://caixadirectaonline.cgd.pt/cdo/login.seam" method="post"><fieldset class='complete mobile'><legend class='hidden'>Nº de Contrato</legend><span>Particulares</span><div><label for='input_cx1_m' class='hidden'>Nº de Contrato <span class='offset'>Número de contrato</span></label><input onkeypress="return isn(event,this.id,'Preencha, por favor, o n\372mero de contrato do Caixadirecta on-line')" onclick="return true;" maxlength='7' value='Nº de Contrato' onblur="if(this.value=='') this.value='Nº de Contrato'" onfocus="if(this.value=='Nº de Contrato') this.value=''" name='USERNAME' id='input_cx1_m' class='select' type='text'><input name='login_btn_1' id='login_btn_1_m' class='okbtn' value='OK' onClick="return cdosubmit('input_cx1_m','Nº de Contrato','Preencha, por favor, o n\372mero de contrato do Caixadirecta on-line')" type='submit'><div class='note'><a href='/Particulares/Contas/Caixadirecta/Pages/Ajuda-Caixadirecta.aspx' onClick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Particulares - Ajuda']);">Ajuda Particulares</a></div><input value="" name="tipoTrat" type="hidden" /><input value="" name="codFamiliaProduto" type="hidden" /><input value="" name="numIntEspecie" type="hidden" /><input value="" name="RedirFunc" type="hidden" /></div></fieldset></form><div class="div-chave"><div class="img-chave"><a href="https://caixadirectaonline.cgd.pt/cdo/loginAMA.seam" title="Autenticação com chave movel"><img alt="Chave móvel digital" src="/PublishingImages/WSImages/Novo-CGD/linkGOV.png"></a></div><div class="note"><a href="/Ajuda/Seguranca/Pages/Pedir-Chave-Movel-Digital.aspx" target="_blank">Saiba mais sobre a Chave Móvel Digital</a></div></div></div><div class="div-ceb"><h2 class="login-segmento">Empresas</h2><form action="https://caixaebankingonline.cgd.pt/ceb/login.seam" method="post"><fieldset class='complete mobile'><legend class='hidden'>Código de empresa</legend><span>Empresas</span><div><label for='input_cx2_m' class='hidden'>Código de empresa <span class='offset'>Código de Empresa</span></label><input onkeypress="return isn(event,this.id,'Preencha, por favor, o n\372mero de contrato do Caixadirecta empresas')" onclick="return true;" maxlength='7' value='Código de empresa' onblur="if(this.value=='') this.value='Código de empresa'" onfocus="if(this.value=='Código de empresa') this.value=''" name='USERNAME' id='input_cx2_m' class='select' type='text'><input name='login_btn_2' id='login_btn_2_m' class='okbtn' value='OK' onClick="return cdosubmit('input_cx2_m','Código de empresa','Preencha, por favor, o n\372mero de contrato do Caixadirecta empresas')" type='submit'><div class='note'><a href='/Empresas/Gestao_corrente/Servicos/Pages/Ajuda-Caixadirecta-Empresas.aspx' onClick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Empresas - Ajuda']);">Ajuda Empresas</a></div></div></fieldset></form></div></div><div style="float:left"><div class="col1"><p class="ap aptitle">Quero ser cliente:</p><p class="ap seta"><a href="/Particulares/Contas/RedirectTo/Pages/Redirectto.aspx" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Particulares - Adesão']);">Aderir ao Caixadirecta Particulares</a></p><p class="ap seta"><a href="/Empresas/Gestao_corrente/Servicos/Pages/Caixadirecta-Empresas.aspx" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Empresas - Adesão']);">Aderir ao Caixadirecta Empresas</a></p></div><div class="col2"><p class="ap aptitle">Links úteis:</p><p class="ap seta"><a href="/ajuda/APPs-Redes-Sociais-CGD/Pages/Apps-Caixa.aspx" class="app" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Download']); return true;">Faça download da App Caixadirecta</a></p><p class="ap seta"><a href="/ajuda/Seguranca/Pages/Seguranca-e-Fraude.aspx" class="security" onclick="_paq.push(['trackEvent', 'Pop Menu', 'Caixadirecta', 'Segurança']); return true;">Recomendações de Segurança</a></p></div></div></div></div></header><div class="main"><header class="header-area"><div id="ctl00_SearchCrawlExclusionControl4"><div class="menu-wrapper"><div class="wrapper"><div class="menu-area clearfix open"><a href="/" class="logo icon-icon00" onclick="_paq.push(['trackEvent', 'Top Menu', 'Logotipo']);"><h1 class="screen-reader-text">Gabinetes Empresa</h1></a><a class="menu-icon icon-icons_72"></a><nav class="menu-mobile hideprint"><ul></ul><div class="direct"><a href="#">Acesso Caixadirecta</a></div></nav><nav class="menu hideprint" id="menu2nivel"><ul></ul></nav><div class="menu-search hideprint"><a class="search"></a></div></div></div><div id="ctl00_searchPanel"><div class="search-wrapper hideprint"><div class="search-content"><form action="/Pesquisa/Pages/Resultados-Pesquisa.aspx" method="post"><input type="text" name="k" id="SearchTextBox" size="38" value="Pesquisar"><input type="submit" name="btnsubmit" id="btnsubmit" class="buttonpesquisa go" value="Pesquisar" onclick="_paq.push(['trackEvent', 'Pesquisa', 'CGD', 'Submit']); return true;"></form></div></div></div><div class="content-drop hideprint" id="menu3nivel"></div></div></div></header><section id="page-content"><div id="mainContent" tabindex="-1"><div id="ctl00_PlaceHolderMain_editmodepanel1"></div><article class="net-agency"><div class="wrapper"><h2 class="title">Gabinetes Caixa Empresas</h2><div class="content-net clearfix"><h3 class="subtitle-net">Encontre-nos perto de si. Pesquise aqui a rede nacional da CGD</h3><div class="search-net"><figure class="image"><img src="/Corporativo/PublishingImages/listagemagencias.jpg" alt=""></figure><div class="ms-rtestate-field"><style>
.fecho {
    padding: 20px; 
    width: 100%;
    margin-bottom: 40px; 
    float: left; 
    background-color: #f8f8f8; 

 display:none;
}

@media (max-width: 375px) {
    .smartphone {
    max-width: 320px;
}
}
</style><div class="fecho"><p style="color: #4c6c9d; font-size: 1.6em; margin-bottom: 20px; font-weight:700">Gabinetes de Empresas encerrados temporariamente</p><table cellspacing="5" cellpadding="5" style="margin: auto auto 30px; width: 100%; font-size:1.4em" class="smartphone"><caption style="display: none;">Agências encerradas</caption><thead><tr><th style="height: 40px; text-align: left; color: #4c6c9d; padding-left: 10px; font-weight: normal; background-color: #eeeeee;">Nome do Gabinete</th><th style="text-align: left; color: #4c6c9d; padding-left: 10px; font-weight: normal; background-color: #eeeeee;">Concelho</th></tr></thead><tbody><tr><td style="height: 30px; padding-left: 10px; border-bottom-color: #a6b6ce; border-bottom-width: 1px; border-bottom-style: solid;"><a href="/Corporativo/Rede-CGD/Pages/GABINETE-DE-EMPRESAS-DE-BRAGA.aspx">Braga</a></td><td style="padding-left: 10px; border-bottom-color: #a6b6ce; border-bottom-width: 1px; border-bottom-style: solid;">Braga</td></tr></tbody></table></div></div></div><aside><div class='text-right'><div id="ctl00_SPWebPartManager1_g_fa026f77_96af_4aef_b345_29720ff24de7"><div class='col-one'><h2 class='title-text-right'>Portugal continental:</h2><ul class='listagemGenerica'><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=1' >Aveiro</a> (2)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=3' >Braga</a> (3)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=5' >Castelo Branco</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=6' >Coimbra</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=7' >Évora</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=8' >Faro</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=21' >Leiria</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=22' >Lisboa</a> (6)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=24' >Porto</a> (3)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=25' >Santarém</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=26' >Setúbal</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=29' >Viseu</a> (1)</div></li></ul></div><div class='col-two'><h2 class='title-text-right'>Regiões autónomas:</h2><ul class='listagemGenerica'><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=11' >Ilha da Madeira</a> (1)</div></li><li class='cont_tabela_agencias'><div class='contGeralCustom-InterTitulo'><a class='agencias' href='?c_dt=16' >Ilha de São Miguel</a> (1)</div></li></ul></div></div></div></aside></div></div></article><div id="ctl00_PlaceHolderMain_editmodepanel2" style="clear: both;"></div><div id="PopUPdivWebpartZone"></div></div></section><div id="ctl00_SearchCrawlExclusionControl2"></div></div><div id="ctl00_SearchCrawlExclusionControl1"><footer class="footer"><div class="footer-area-first hideprint"><div class="media-geral clearfix"><div class="lettering"><span><!--&nbsp;--></span><span>Caixa. Para todos e para cada um.</span></div><div class="nav-content"><div class="main-contacts hideprint"><div class="wrapper"><div class="follow-us"><ul class="rs-icons"><li class="rs-icon"><a href = "https://www.facebook.com/caixageraldedepositos/" onclick="_paq.push(['trackEvent', 'Site Header', 'Facebook']); return true;" class="icon-icon01" ><span class="RedeSocial" >Facebook</span></a></li><li class="rs-icon"><a href = "http://www.youtube.com/user/mediacgd" onclick="_paq.push(['trackEvent', 'Site Header', 'YouTube']); return true;" class="icon-icon03"><span class="RedeSocial">YouTube</span></a></li><li class="rs-icon"><a href = "https://www.linkedin.com/company/caixageraldedepositos/" onclick="_paq.push(['trackEvent', 'Site Header', 'LinkedIn']); return true;" class="icon-icon04" ><span class="RedeSocial">Linkedin</span></a></li><li class="rs-icon"><a href = "https://www.instagram.com/caixageraldedepositos/" onclick="_paq.push(['trackEvent', 'Site Header', 'Instagram']); return true;" class="icon-icon06"><span class="RedeSocial">Instagram</span></a></li></ul></div></div></div></div><div class="links-content"><nav class="general-links"><div class="area-content clearfix"><div class="wrapper"><dl><dt>Links úteis</dt><dd><ul><li><a href="https://www.cgd.pt/Ajuda/Pages/Ajuda.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Links úteis', 'Ajuda']);" >Ajuda</a></li><li><a href="https://www.cgd.pt/Saldo-Positivo/Pages/Saldo-Positivo.aspx" target="_blank" onclick="_paq.push(['trackEvent', 'Site Footer', 'Links úteis', 'Saldo Positivo']);" >Saldo Positivo</a></li><li><a href="https://recrutamento.cgd.pt/" target="_blank" onclick="_paq.push(['trackEvent', 'Site Footer', 'Links úteis', 'Recrutamento']);" >Recrutamento</a></li><li><a href="https://www.cgd.pt/ajuda/Seguranca/Pages/Seguranca-e-Fraude.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Links úteis', 'Segurança']);" >Segurança</a></li><li><a href="https://www.cgd.pt/Ajuda/Pages/Privacidade-e-cookies.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Links úteis', 'Privacidade e Cookies']);" >Privacidade e Cookies</a></li></ul></dd></dl><dl><dt>Rede CGD</dt><dd><ul><li><a href="https://www.cgd.pt/Corporativo/Rede-CGD/Pages/Agencias.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Rede CGD', 'Agências']);" >Agências</a></li><li><a href="https://www.cgd.pt/Corporativo/Rede-CGD/Pages/Gabinetes.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Rede CGD', 'Gabinetes Caixa Empresas']);" >Gabinetes Caixa Empresas</a></li><li><a href="https://www.cgd.pt/ajuda/Rede-Internacional-CGD/Pages/Europa.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Rede CGD', 'Europa']);" >Europa</a></li><li><a href="https://www.cgd.pt/ajuda/Rede-Internacional-CGD/Pages/Africa.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Rede CGD', 'África']);" >África</a></li><li><a href="https://www.cgd.pt/ajuda/Rede-Internacional-CGD/Pages/America.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Rede CGD', 'América']);" >América</a></li><li><a href="https://www.cgd.pt/ajuda/Rede-Internacional-CGD/Pages/Asia.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Rede CGD', 'Ásia']);" >Ásia</a></li></ul></dd></dl><dl><dt>Contactos</dt><dd><ul><li><a href="https://www.cgd.pt/Ajuda/Contactos/Pages/Contactos.aspx">217 900 790* (Particulares)<sup>1</sup></a></li><li><a href="https://www.cgd.pt/Ajuda/Contactos/Pages/Contactos.aspx">217 900 791* (Empresas)<sup> 2</sup></a></li><li><a href="https://www.cgd.pt/Ajuda/Contactos/Pages/Contactos.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Contactos', 'Outros contactos']);" >Outros contactos</a></li><li><span class="custo-tel">___________________<br>* Chamada para Rede Fixa Nacional</span></li><li><span class="custo-tel"><sup>1</sup> 24h/dia, 7 dias por semana</span></li><li><span class="custo-tel"><sup>2</sup> 8h-22h, 7 dias por semana</span></li></ul></dd></dl><dl class="col-vazio"><dt>&nbsp;</dt><dd><ul></ul></dd></dl><dl><dt>Informação relevante</dt><dd><ul><li><a href="https://www.cgd.pt/Ajuda/Espaco-Cliente/Pages/Contacto-On-line.aspx?op1=-3" onclick="_paq.push(['trackEvent', 'Site Footer', 'Informação relevante', 'Sugestões e Reclamações']);" >Sugestões e Reclamações</a></li><li><a href="https://www.cgd.pt/Precario/Pages/Precario.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Informação relevante', 'Preçário']);" >Preçário</a></li><li><a href="https://www.cgd.pt/Particulares/Apoio-Incumprimento/Pages/Apoio-ao-incumprimento.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Informação relevante', 'Apoio ao incumprimento']);" >Apoio ao incumprimento</a></li><li><a href="https://www.cgd.pt/Ajuda/Espaco-Cliente/Pages/Contacto-On-line.aspx?op1=1" onclick="_paq.push(['trackEvent', 'Site Footer', 'Informação relevante', 'Livro de Reclamações']);" >Livro de Reclamações</a></li><li><a href="https://www.cgd.pt/Particulares/Contas/Contas-a-Ordem/Documents/Glossario-Servicos-de-Pagamento.pdf" target="_blank" onclick="_paq.push(['trackEvent', 'Site Footer', 'Informação relevante', 'Glossário']);" >Glossário</a></li><li><a href="https://www.cgd.pt/Ajuda/Pages/Aviso-legal.aspx" onclick="_paq.push(['trackEvent', 'Site Footer', 'Informação relevante', 'Aviso Legal']);" >Aviso Legal</a></li></ul></dd></dl></div></div></nav></div></div><div class="media-wrap"></div></div><div class="footer-area-second"><div class="disclaimer"><hr class="hrhide" /><p>A CGD está registada junto do Banco de Portugal sob o n.º 35, da CMVM sob o n.º 125 e da ASF sob o nº 419501357.<br>2024 © Caixa Geral de Depósitos, SA. Todos os direitos reservados. <a href='/ajuda/Seguranca/Condicoes-Utilizacao/Pages/Condicoes-Utilizacao.aspx'>Condições de utilização</a></p></div></div></footer></div></div></div></div><div style="display: none;"></div><div id="backgroundPopup" class="hideprint"></div><script type="application/ld+json">{"@context": "http://schema.org/","@type": "Organization","url": "https://www.cgd.pt/","logo": "https://www.cgd.pt/PublishingImages/CGD_logo.jpg"}</script><script src="/_layouts/15/CaixatecCGDLayoutsV2/js/base.m.c.min.js?v=20240521"></script><div class="aspNetHidden"></div><script language='javascript' type='text/javascript' src='/_layouts/15/CaixatecGeoControlV2/geocontrolv7.js?v=20181205'></script><script type="text/javascript" src='/PublishingImages/WSImages/Novo-CGD/cgdpt_o.js?v=1010241141'></script><script type="text/javascript">
//<![CDATA[
var _fV4UI = true;
function _RegisterWebPartPageCUI()
{
    var initInfo = {editable: false,isEditMode: false,allowWebPartAdder: false,listId: "{e022c64c-d314-4ea1-a930-2bd40cd617bf}",itemId: 1798,recycleBinEnabled: true,enableMinorVersioning: true,enableModeration: true,forceCheckout: true,rootFolderUrl: "\u002fCorporativo\u002fRede-CGD\u002fPages",itemPermissions:{High:16,Low:196673}};
    SP.Ribbon.WebPartComponent.registerWithPageManager(initInfo);
    var wpcomp = SP.Ribbon.WebPartComponent.get_instance();
    var hid;
    hid = document.getElementById("_wpSelected");
    if (hid != null)
    {
        var wpid = hid.value;
        if (wpid.length > 0)
        {
            var zc = document.getElementById(wpid);
            if (zc != null)
                wpcomp.selectWebPart(zc, false);
        }
    }
    hid = document.getElementById("_wzSelected");
    if (hid != null)
    {
        var wzid = hid.value;
        if (wzid.length > 0)
        {
            wpcomp.selectWebPartZone(null, wzid);
        }
    }
};
function __RegisterWebPartPageCUI() {
ExecuteOrDelayUntilScriptLoaded(_RegisterWebPartPageCUI, "sp.ribbon.js");}
_spBodyOnLoadFunctionNames.push("__RegisterWebPartPageCUI");var __wpmExportWarning='This Web Part Page has been personalized. As a result, one or more Web Part properties may contain confidential information. Make sure the properties contain information that is safe for others to read. After exporting this Web Part, view properties in the Web Part description file (.WebPart) by using a text editor such as Microsoft Notepad.';var __wpmCloseProviderWarning='You are about to close this Web Part.  It is currently providing data to other Web Parts, and these connections will be deleted if this Web Part is closed.  To close this Web Part, click OK.  To keep this Web Part, click Cancel.';var __wpmDeleteWarning='You are about to permanently delete this Web Part.  Are you sure you want to do this?  To delete this Web Part, click OK.  To keep this Web Part, click Cancel.';var g_clientIdDeltaPlaceHolderMain = "ctl00_DeltaPlaceHolderMain";
//]]></script><!-- DOC END --></body></html><!-- Rendered using cache profile:CGD.PT - Vary by Query String  at: 2024-11-20T06:31:17 -->