function getParameterByName(n) {
    var r = window.location.href,
        i, t;
    return (n = n.replace(/[\[\]]/g, "\\$&"), i = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"), t = i.exec(r), !t) ? "" : t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : ""
}

function configurarEventos() {}

function resetSearchBox(n) {
    if (n) {
        let n = window.matchMedia("only screen and (max-width: 760px)").matches;
        n && $([document.documentElement, document.body]).animate({
            scrollTop: $(".search-box").offset().top - 75
        }, 200)
    }
    $(".search-header-item").removeClass("alt-fade");
    $(".search-topic").removeClass("show");
    $(".search-header button").removeClass("active");
    $(".search-box").removeClass("expanded");
    $("#button-search").show()
}

function carregarFiltroRapido(n) {
    n.filtroRapido = [];
    var t = window.location.href.toLowerCase();
    t.indexOf("corrida-de-rua") > 0 && n.filtroRapido.push({
        name: "Corrida-de-rua",
        value: 1
    });
    t.indexOf("triathlon") > 0 && n.filtroRapido.push({
        name: "Triathlon",
        value: 17
    });
    t.indexOf("triathlon-brasil") > 0 && (n.filtroRapido.pop({
        name: "Triathlon",
        value: 17
    }), n.filtroRapido.push({
        name: "Triathlon-Brasil",
        value: 24
    }));
    t.indexOf("swim-channel") > 0 && n.filtroRapido.push({
        name: "Swim-Channel",
        value: 25
    });
    t.indexOf("ciclismo") > 0 && n.filtroRapido.push({
        name: "Ciclismo",
        value: 4
    });
    t.indexOf("mountain-bike") > 0 && n.filtroRapido.push({
        name: "Mountain-bike",
        value: 5
    });
    t.indexOf("natacao") > 0 && n.filtroRapido.push({
        name: "Natacao",
        value: 20
    });
    t.indexOf("trail-run") > 0 && n.filtroRapido.push({
        name: "Trail-run",
        value: 6
    });
    t.indexOf("corridas-virtuais") > 0 && n.filtroRapido.push({
        name: "Corridas-virtuais",
        value: 19
    });
    t.indexOf("caminhada") > 0 && n.filtroRapido.push({
        name: "Caminhada",
        value: 3
    });
    t.indexOf("night-run") > 0 && n.filtroRapido.push({
        name: "Night-run",
        value: 7
    });
    t.indexOf("so-mulheres") > 0 && n.filtroRapido.push({
        name: "So-mulheres",
        value: 8
    });
    t.indexOf("kids") > 0 && n.filtroRapido.push({
        name: "Kids",
        value: 2
    });
    t.indexOf("beach-tennis") > 0 && n.filtroRapido.push({
        name: "Beach-tennis",
        value: 23
    });
    t.indexOf("praia") > 0 && n.filtroRapido.push({
        name: "Praia",
        value: 9
    });
    t.indexOf("circuito") > 0 && n.filtroRapido.push({
        name: "Circuito",
        value: 10
    });
    t.indexOf("grupos-e-assessorias") > 0 && n.filtroRapido.push({
        name: "Grupos-e-assessorias",
        value: 18
    });
    t.indexOf("4k") > 0 && n.filtroRapido.push({
        name: "4K",
        value: 11
    });
    t.indexOf("5k-a-10k") > 0 && n.filtroRapido.push({
        name: "5K-a-10K",
        value: 12
    });
    t.indexOf("11k-a-20k") > 0 && n.filtroRapido.push({
        name: "11K-a-20K",
        value: 13
    });
    t.indexOf("21k") > 0 && n.filtroRapido.push({
        name: "21K",
        value: 14
    });
    t.indexOf("42k") > 0 && n.filtroRapido.push({
        name: "42K",
        value: 15
    });
    t.indexOf("aprenda") > 0 && n.filtroRapido.push({
        name: "aprenda",
        value: 22
    });
    t.indexOf("outros") > 0 && n.filtroRapido.push({
        name: "Outros",
        value: 16
    });
    n.filtroRapido.length == 0 && n.filtroRapido.push({
        name: "Todas-as-modalidades",
        value: 0
    })
}

function carregarDadosBusca() {
    var n = new dadosBusca,
        r, i, u;
    $(".event-id").each(function() {
        n.ids.push($(this).val())
    });
    carregarFiltroRapido(n);
    let t = document.location.pathname.split("/");
    for (n.organizador = window.location.pathname == "/Calendario/Corridas-virtuais" ? "Todos-os-organizadores" : t[2] ? t[2] : "Todos-os-organizadores", t[4] && t[4].length == 2 && (n.onde.uf = decodeURIComponent(t[4])), t[5] && t[5] != "Todas-as-cidades" && (n.onde.cidade = decodeURIComponent(t[5])), t[6] && (n.precoDe = +t[6].replace(",", ".")), t[7] && (n.precoAte = +t[7].replace(",", ".")), r = "Todos os preços", n.precoDe > 0 && n.precoAte > 0 ? r = "Entre " + n.precoDe.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) + " e " + n.precoAte.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) : n.precoDe > 0 && n.precoAte == 0 ? r = "A partir de " + n.precoDe.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) : n.precoDe == 0 && n.precoAte > 0 && (r = "Até " + n.precoAte.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })), n.precoDe == 0 && n.precoAte == 0 ? $("#preco-frete-0").attr("checked", !0) : n.precoDe == 0 && n.precoAte == 49.99 ? $("#preco-frete-2").attr("checked", !0) : n.precoDe == 0 && n.precoAte == 89.99 ? $("#preco-frete-3").attr("checked", !0) : n.precoDe == 90 && n.precoAte == 0 && $("#preco-frete-4").attr("checked", !0), n.freteGratis = t[8] && t[8] == "true", n.freteGratis && $("input:checkbox[name=preco-frete]").attr("checked", !0), n.precoDe == 0 && n.precoAte == 0 && n.freteGratis && (r = "Frete grátis"), $("#btn-quanto").html("<span>" + r + "<\/span>"), n.termo = getParameterByName("termo"), n.quando.periodo = getParameterByName("periodo"), n.quando.periodo == "" && (n.quando.periodo = 0), n.quando.mes = getParameterByName("mes"), n.quando.de = getParameterByName("inicio"), n.quando.ate = getParameterByName("fim"), n.ordenacao = ordenacao, $("#search-term").val(n.termo), $("#uf").val(n.onde.uf), $("#busca-cidade").val(n.onde.cidade), $("#btn-onde").html("<span>" + (n.onde.cidade != "" ? n.onde.cidade + ", " : "") + (n.onde.uf != "" ? n.onde.uf : "Todo o Brasil") + "<\/span>"), n.ordenacao == 0 ? $("#btn-order span").text("Ordem alfabética") : n.ordenacao == 1 ? $("#btn-order span").text("Data de realização") : $("#btn-order span").text("Aleatório"), i = "", n.quando.periodo > 0 ? ($("input:radio[name=search-data][value=" + n.quando.periodo + "]").attr("checked", !0), i = $("input[type=radio][name=search-data]:checked + label").text()) : n.quando.mes > 0 ? ($("#select-mes").val(n.quando.mes), i = $("#select-mes option:selected").text()) : n.quando.de != "" && n.quando.ate == "" ? ($("#inicio").val(n.quando.de), i = "A partir de " + n.quando.de.split("-").reverse().join("/")) : n.quando.de != "" && n.quando.ate != "" ? ($("#inicio").val(n.quando.de), $("#fim").val(n.quando.ate), i = "Entre " + n.quando.de.split("-").reverse().join("/") + " e " + n.quando.ate.split("-").reverse().join("/")) : n.quando.de == "" && n.quando.ate == "" ? i = "Todas as datas" : n.quando.de == "" && n.quando.ate != "" && ($("#fim").val(n.quando.ate), i = "Até " + n.quando.ate.split("-").reverse().join("/")), $("#btn-quando").html("<span>" + i + "<\/span>"), u = 0; u < n.filtroRapido.length; u++) n.filtroRapido[u].value != 0 && ($("#busca-modalidades input:checkbox[value=" + n.filtroRapido[u].value + "]").attr("checked", !0), $("data").filter(function() {
        return this.value == n.filtroRapido[u].value
    }).children("i").addClass("selected"));
    return n.filtroRapido.length == 1 && n.filtroRapido[0].value != 0 ? ($("#btn-categorias").html("<span>" + $("input:checkbox[name=search-category-item]:checked + label").html() + "<\/span>"), $("#btn-categorias").prev().html($("input:checkbox[name=search-category-item]:checked").data("icon")), $("#btn-categorias").prev().attr("class", "demo-icon " + $("input:checkbox[name=search-category-item]:checked").data("class"))) : n.filtroRapido.length > 1 ? ($("#btn-categorias").html("<span>" + n.filtroRapido.length + " modalidades<\/span>"), $("#btn-categorias").prev().html("&#xe816;"), $("#btn-categorias").prev().attr("class", "demo-icon icon-icon_multi")) : ($("#btn-categorias").html("<span>Todas as modalidades<\/span>"), $("#btn-categorias").prev().html("&#xe816;"), $("#btn-categorias").prev().attr("class", "demo-icon icon-icon_multi")), n
}
var dadosBusca = function() {
        this.ids = [];
        this.organizador = "Todos-os-organizadores";
        this.termo = "";
        this.onde = {
            uf: "",
            cidade: ""
        };
        this.quando = {
            periodo: 0,
            mes: 0,
            de: "",
            ate: ""
        };
        this.filtroRapido = [];
        this.precoDe = 0;
        this.precoAte = 0;
        this.freteGratis = !1;
        this.ordenacao = null;
        this.toPOST = function() {
            return busca.ids = [], $(".event-id").each(function() {
                busca.ids.push($(this).val())
            }), busca.filtroRapido.length == 0 && busca.filtroRapido.push({
                name: "Todas-as-modalidades",
                value: 0
            }), busca.onde.uf || (busca.onde.uf = "Todo-o-Brasil"), busca.onde.cidade || (busca.onde.cidade = "Todas-as-cidades"), {
                organizador: busca.organizador,
                termo: encodeURIComponent(busca.termo),
                uf: busca.onde.uf,
                cidade: encodeURIComponent(busca.onde.cidade),
                periodo: busca.quando.periodo,
                mes: busca.quando.mes,
                inicio: encodeURIComponent(busca.quando.de),
                fim: encodeURIComponent(busca.quando.ate),
                filtroRapido: busca.filtroRapido.map(n => n.name).join(","),
                ids: busca.ids.join(","),
                apenasInscricoesAbertas: !(busca.quando.periodo == 5 || !!busca.termo),
                precoDe: busca.precoDe.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                }),
                precoAte: busca.precoAte.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                }),
                freteGratis: busca.freteGratis,
                ordenacao: busca.ordenacao
            }
        };
        this.toQueryString = function() {
            var n, t, i;
            return busca.filtroRapido.length == 0 && busca.filtroRapido.push({
                name: "Todas-as-modalidades",
                value: 0
            }), busca.onde.uf || (busca.onde.uf = "Todo-o-Brasil"), busca.onde.cidade || (busca.onde.cidade = "Todas-as-cidades"), n = "/" + busca.organizador + "/" + busca.filtroRapido.map(n => encodeURIComponent(n.name)).join(",") + "/" + encodeURIComponent(busca.onde.uf) + "/" + encodeURIComponent(busca.onde.cidade) + "/" + busca.precoDe.toLocaleString("pt-BR", {
                minimumFractionDigits: 2
            }) + "/" + busca.precoAte.toLocaleString("pt-BR", {
                minimumFractionDigits: 2
            }) + "/" + (busca.freteGratis ? "true" : "false") + "/?", n += "termo=" + encodeURIComponent(this.termo), n += "&periodo=" + this.quando.periodo, n += "&mes=" + this.quando.mes, n += "&inicio=" + encodeURIComponent(this.quando.de), n += "&fim=" + encodeURIComponent(this.quando.ate), n += "&ordenacao=" + this.ordenacao, t = getParameterByName("origem"), t && (n += "&origem=" + t), i = getParameterByName("campanha"), i && (n += "&campanha=" + i), n
        }
    },
    busca = new dadosBusca;
$(document).ready(function() {
    busca = carregarDadosBusca();
    $("#search-term").on("keyup", function(n) {
        var t = n.which;
        t == 13 && (n.preventDefault(), $("#button-search").click());
        busca.termo = $(this).val()
    });
    $("#busca-cidade").on("keyup", function(n) {
        var t = n.which;
        t == 13 && (n.preventDefault(), $("#ok-search-location").click())
    });
    $(".popover").on("click", function() {
        $("#btn-quanto").click();
        $(this).fadeOut()
    });
    $("#ok-search-location").click(function() {
        busca.onde.uf = $("#uf").val();
        busca.onde.cidade = $("#busca-cidade").val();
        $("#btn-onde").html("<span>" + (busca.onde.cidade != "" ? busca.onde.cidade + ", " : "") + (busca.onde.uf != "" ? busca.onde.uf : "Todo o Brasil") + "<\/span>");
        resetSearchBox(!0);
        $("#btn-quanto").click()
    });
    $("#ok-search-price").click(function() {
        busca.precoDe = $("input[type=radio][name=search-price]:checked").data("de");
        busca.precoAte = $("input[type=radio][name=search-price]:checked").data("ate");
        var n = "Todos os preços";
        busca.precoDe > 0 && busca.precoAte > 0 ? n = "Entre " + busca.precoDe.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) + " e " + busca.precoAte.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) : busca.precoDe > 0 && busca.precoAte == 0 ? n = "A partir de " + busca.precoDe.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) : busca.precoDe == 0 && busca.precoAte > 0 && (n = "Até " + busca.precoAte.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
        busca.precoDe == 0 && busca.precoAte == 0 ? $("#preco-frete-0").attr("checked", !0) : busca.precoDe == 0 && busca.precoAte == 49.99 ? $("#preco-frete-2").attr("checked", !0) : busca.precoDe == 0 && busca.precoAte == 89.99 ? $("#preco-frete-3").attr("checked", !0) : busca.precoDe == 90 && busca.precoAte == 0 && $("#preco-frete-4").attr("checked", !0);
        busca.freteGratis = $("#preco-frete:checked").val() == "true";
        busca.precoDe == 0 && busca.precoAte == 0 && busca.freteGratis && (n = "Frete grátis");
        $("#btn-quanto").html("<span>" + n + "<\/span>");
        resetSearchBox(!0);
        $("#btn-quando").click()
    });
    $("#ok-search-date").click(function() {
        busca.quando.periodo = $("input[type=radio][name=search-data]:checked").val();
        busca.quando.mes = $("#select-mes").val();
        busca.quando.de = $("#inicio").val();
        busca.quando.ate = $("#fim").val();
        var n = "";
        busca.quando.periodo > 0 ? n = $("input[type=radio][name=search-data]:checked + label").text() : busca.quando.mes > 0 ? n = $("#select-mes option:selected").text() : busca.quando.de != "" && busca.quando.ate == "" ? n = "A partir de " + busca.quando.de.split("-").reverse().join("/") : busca.quando.de != "" && busca.quando.ate != "" ? n = "Entre " + busca.quando.de.split("-").reverse().join("/") + " e " + busca.quando.ate.split("-").reverse().join("/") : busca.quando.de == "" && busca.quando.ate == "" ? n = "Todas as datas" : busca.quando.de == "" && busca.quando.ate != "" && (n = "Até " + busca.quando.ate.split("-").reverse().join("/"));
        $("#btn-quando").html("<span>" + n + "<\/span>");
        resetSearchBox(!0);
        $("#btn-categorias").click()
    });
    $("#ok-search-category").click(function() {
        busca.filtroRapido = [];
        $("input:checkbox[name=search-category-item]:checked").each(function() {
            busca.filtroRapido.push({
                name: $(this).data("name"),
                value: $(this).val()
            })
        });
        busca.filtroRapido.length == 1 ? ($("#btn-categorias").html("<span>" + $("input:checkbox[name=search-category-item]:checked + label").html() + "<\/span>"), $("#btn-categorias").prev().html($("input:checkbox[name=search-category-item]:checked").data("icon")), $("#btn-categorias").prev().attr("class", "demo-icon " + $("input:checkbox[name=search-category-item]:checked").data("class"))) : busca.filtroRapido.length > 1 ? ($("#btn-categorias").html("<span>" + busca.filtroRapido.length + " modalidades<\/span>"), $("#btn-categorias").prev().html("&#xe816;"), $("#btn-categorias").prev().attr("class", "demo-icon icon-icon_multi")) : (busca.filtroRapido.push({
            name: "Todas-as-modalidades",
            value: 0
        }), $("#btn-categorias").html("<span>Todas as modalidades<\/span>"), $("#btn-categorias").prev().html("&#xe816;"), $("#btn-categorias").prev().attr("class", "demo-icon icon-icon_multi"));
        resetSearchBox(!0);
        $("#btn-order").click()
    });
    $("#ok-search-order").click(function() {
        var n = $("#select-ordenacao").val(),
            t = "Aleatório";
        n == "0" ? t = "Ordem alfabética" : n == "1" && (t = "Data de realização");
        ordenacao = busca.ordenacao = n;
        $("#btn-order span").text(t);
        resetSearchBox(!0);
        $("#button-search").click()
    });
    $("a.facebook-button").on("click", function() {
        var n = $(this);
        return postToFeed(n.attr("data-title"), n.attr("data-desc"), n.attr("data-href"), n.attr("data-image")), !1
    });
    $("a.tweet-button").on("click", function() {
        var n = $(this);
        return tweet(n.attr("data-title"), n.attr("data-desc"), n.attr("data-href"), n.attr("data-image")), !1
    });
    $(".search-header-item").on("click", function() {
        var n = $(this).children("button");
        if (n.length != 0) {
            if (n.hasClass("active")) return resetSearchBox(!0);
            $(".search-header button").not(n).removeClass("active");
            n.addClass("active");
            $(".search-topic").not($("." + $(this).data("show"))).removeClass("show");
            $("." + $(this).data("show")).toggleClass("show");
            $(".search-topic.show").length > 0 ? $(".search-box").addClass("expanded") : $(".search-box").removeClass("expanded");
            $(this).removeClass("alt-fade");
            $(".search-header-item").not($(this)).addClass("alt-fade");
            $("#button-search").hide()
        }
    });
    $(".titulo-guia-eventos").on("click", function() {
        if (!$(this).hasClass("black-week")) {
            $(this).hasClass("active") || $(".guia-eventos").animate({
                scrollLeft: $(this).data("offset") + "px"
            }, 500);
            $(".titulo-guia-eventos").removeClass("active");
            $(this).addClass("active");
            $('.guia-eventos:not(".historico")').hide();
            var n = $(this).data("id");
            $('.guia-eventos[data-id="' + n + '"]').show()
        }
    });
    var n = 0;
    $(".arrow").on("click", function() {
        var t = $(this).hasClass("right");
        t ? n += 800 : n -= 800;
        n > 2050 && (n = 2050);
        n < 0 && (n = 0);
        $("#categorias").animate({
            scrollLeft: n
        }, 500)
    });
    $("input[type=radio][name=search-data]").on("change", function() {
        $("#select-mes").val("0");
        $("#inicio").val("");
        $("#fim").val("")
    });
    $("#select-mes").on("change", function() {
        $("input[type=radio][name=search-data][value=0]").prop("checked", !0);
        $("#inicio").val("");
        $("#fim").val("")
    });
    $("div.search-date input[type=date]").on("change", function() {
        $("input[type=radio][name=search-data][value=0]").prop("checked", !0);
        $("#select-mes").val("0")
    });
    $(document).mouseup(function(n) {
        var t = $(".search-box");
        t.is(n.target) || t.has(n.target).length !== 0 || resetSearchBox(!1)
    });
    configurarEventos()
})