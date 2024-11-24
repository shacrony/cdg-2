$(document).ready(function () {
    $("#selPasso1").change(function () {
        var selectedText = $("#selPasso1 option[value='" + $(this).val() + "']").text();
        $(this).prev('span').text(selectedText);
        $(this).closest("form").submit();
        // Matomo
        _paq.push(['trackEvent', 'FAQs', 'Search Passo 1', selectedText]);
    });

    $("#selPasso2").change(function () {
        var selectedText = $("#selPasso2 option[value='" + $(this).val() + "']").text();
        $(this).prev('span').text(selectedText);
        $(this).closest("form").submit();
        // Matomo
        _paq.push(['trackEvent', 'FAQs', 'Search Passo 2', selectedText]);
    });

    $("#selPasso3").change(function () {
        var selectedText = $("#selPasso3 option[value='" + $(this).val() + "']").text();
        $(this).prev('span').text(selectedText);
        $(this).closest("form").submit();
        // Matomo
        _paq.push(['trackEvent', 'FAQs', 'Search Passo 3', selectedText]);
    });
    if ($(".faqitem").length > 1) {
        $(".faqitem").hide();
        $(".faqquestion").on("click", function () {
            $(this).next().toggle();
        });
    }
    var cat = getParameter("s");
    if (cat) {
        $("#faqid" + cat).show();
    }
});

function getParameter(paramName) {
    var searchString = window.location.search.substring(1),
    i, val, params = searchString.split("&");

    for (i = 0; i < params.length; i++) {
        val = params[i].split("=");
        if (val[0] == paramName) {
            return unescape(val[1]);
        }
    }
    return null;
}

function clickBlogPostDataLayer(titulo) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        "event": "click_blog_posts",
        "readArticle": titulo

    });

}