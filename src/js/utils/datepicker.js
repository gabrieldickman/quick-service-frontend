// Para usar o datepicker package
import $ from 'jquery';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

$(document).ready(() => {
  $('#datepicker input').datepicker({
    format: 'dd/mm/yyyy', // Define o formato da data
    autoclose: true,      // Fecha o calendário ao selecionar
    todayHighlight: true, // Destaca a data atual
  });
});