$(document).ready(function(){
   
       // Scroll Elementos Menu 
   
       var acercaDe = $('#acerca-de').offset().top,
           trabajos = $('#trabajos').offset().top,
           contactos = $('#contactos').offset().top;
   
       $('#btn-acercaDe').on('click', function(e){
           e.preventDefault();
           $('html, body').animate({
               scrollTop: acercaDe - 100
           }, 500);
       })
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('html, body').animate({
               scrollTop: trabajos - 100
           }, 500);
       })
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('html, body').animate({
               scrollTop: contactos - 100
           }, 500);
       })
   
   });