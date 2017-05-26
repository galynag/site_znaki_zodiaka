var massZodiak={};
var massZodiakSt={};
var massZodiakKarma={};
var month,day;
var monthKarma='';
var dayKarma='';
var yearKarma='';
var n=0;
var n1=0;
var n2=0;
var n3=0;
var zodiakSt='';



 $(document).ready(function() {
     $('.datepicker').pickadate({
         selectMonths: true, // Creates a dropdown to control month
         selectYears: 15 // Creates a dropdown of 15 years to control year
     });
     $('.datepicker').change(function() {
         console.log($('.datepicker').val());
     })
     $(document).ready(function() {
         $('select').material_select();
     });
$('#zodiak').click(function() {
    month =$('#month select option:checked').val();
    day= $('#day select option:checked').val();
        $.getJSON("package.json",function(data){
            massZodiak=data;
            console.log(massZodiak);
            console.log(massZodiak["Близнецы"].date_min);
            search();
        });

  }
)

 function search() {
     $('.name-zodiak').remove();
     for (key in massZodiak) {
         if (month==massZodiak[key].month_max && +day <= +massZodiak[key].date_max || month==massZodiak[key].month_min && +day >= +massZodiak[key].date_min) {
             var logoZ = document.createElement('img');
             logoZ.className = 'name-zodiak';
             logoZ.src = massZodiak[key].logo;
             $('#zodiak-box').append(logoZ);
             var nameZ = document.createElement('p');
             nameZ.className = 'name-zodiak';
             nameZ.innerHTML = key;
             $('#zodiak-box').append(nameZ);
             var dateZ = document.createElement('p');
             dateZ.className = 'name-zodiak';
             dateZ.innerHTML = 'С'+massZodiak[key].date_min+' '+massZodiak[key].month_min+'По'+massZodiak[key].date_max+' '+massZodiak[key].month_max;
             $('#zodiak-box').append(dateZ);
             var descrZ = document.createElement('p');
             descrZ.className = 'name-zodiak';
             descrZ.innerHTML = massZodiak[key].description2;
             $('#zodiak-box').append(descrZ);
             var buttonZ = document.createElement('a');
             buttonZ.className = 'name-zodiak waves-effect waves-light btn';
             buttonZ.innerHTML = 'Узнать какие драгоценные камни подходят для знака'+ ' <b>'+key+'</b>  ';
             buttonZ.href='http://upscale.promo.net.ua/gavrina/zodiak/stones.html',
             $('#zodiak-box').append(buttonZ);
         }
     }
 }
$('#zodiak-st-btn').click(function() {
        zodiakSt =$('#zodiak-st select option:checked').val();
        $.getJSON("kamni.json",function(data){
            massZodiakSt=data;
            console.log(massZodiakSt,zodiakSt);
            searchSt();
        });
});
function searchSt() {
    $('.name-zodiak-st').remove();
    for (key in massZodiakSt) {
        var znakMass=massZodiakSt[key].znak;
        console.log(znakMass);
        if (znakMass.indexOf(zodiakSt)>=0) {
            var logoZst = document.createElement('img');
            logoZst.className = 'name-zodiak-st';
            logoZst.src = massZodiakSt[key].logo;
            $('#zodiak-box-st').append(logoZst);
            var nameZst = document.createElement('p');
            nameZst.className = 'name-zodiak-st';
            nameZst.innerHTML = key;
            $('#zodiak-box-st').append(nameZst);
            var descrZst = document.createElement('p');
            descrZst.className = 'name-zodiak-st';
            descrZst.innerHTML = massZodiakSt[key].description;
            $('#zodiak-box-st').append(descrZst);
            // var buttonZ = document.createElement('a');
            // buttonZ.className = 'name-zodiak waves-effect waves-light btn';
            // buttonZ.innerHTML = 'Узнать какие драгоценные камни подходят для знака'+ ' <b>'+key+'</b>';
            // $('#zzodiak-box-st').append(buttonZ);
        }
    }
}
     $('#zodiak-karma').click(function() {
         dayKarma=$('#day-karma select option:checked').val();
         monthKarma=$('#month-karma select option:checked').val();
         yearKarma=$('#year-karma').val();

         console.log(dayKarma,monthKarma,yearKarma,yearKarma.length);
         $.getJSON("karma.json",function(data){
             massZodiakKarma=data;
             searchKarma();
         });
     });

     function searchKarma() {
         $('.name-zodiak-karma').remove();
         n1=0;
         n2=0;
         n3=0;
         for (var i=0; i<yearKarma.length;i++) {
             n1=n1+Number(yearKarma.charAt(i));
         }
         for (var i1=0; i1<dayKarma.length;i1++) {
             n2=n2+Number(dayKarma.charAt(i1));
         }
         for (var i2=0; i2<monthKarma.length;i2++) {
             n3=n3+Number(monthKarma.charAt(i2));
         }
         n=n1+n2+n3;

         for (key in massZodiakKarma) {
             if (key == n) {
                 var nameKarma = document.createElement('div');
                 nameKarma.className = 'name-zodiak-karma';
                 nameKarma.innerHTML = massZodiakKarma[key];
                 $('#zodiak-karma-box').append(nameKarma);
             }
         }
     }

 });

