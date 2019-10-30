$(document).ready(function(){

    // -----Initialize
      // AOS option
      AOS.init({
        duration: 400,
        easing: 'ease'
      })
      // Materialize option
      $('.button-collapse').sideNav()
      $('.modal').modal({
        startingTop: '0%',
        endingTop: '5%'
      })
    
    // -----Scroll to hogehoge
      $('a[href*=\\#about-this-site]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      $('a[href*=\\#about-me]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      $('a[href*=\\#profile]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      $('a[href*=\\#skills]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      $('a[href*=\\#projects]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      $('a[href*=\\#services]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      $('a[href*=\\#contact]').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
      })
      // Scroll to top
      $('.scroll-to-top-btn').click(function(event){
        event.preventDefault()
        $('html, body').animate({scrollTop : 0},1000)
        return false
      })
      $('.scroll-to-top-li').click(function(event){
        event.preventDefault()
        $('html, body').animate({scrollTop : 0},1000)
        return false
      })
    
    // -----Add sequence number to modal content
      var modalContents = $('#projects div .modal')
      var modalTriggers = $('#projects a.modal-trigger')
      for (var i = 0; i < modalContents.length; i++) {
        $(modalContents[i]).attr('id', 'modal' + i)
        $(modalTriggers[i]).removeAttr('href')
        $(modalTriggers[i]).attr('href', '#modal' + i)
        var remainder = i % 3
        switch (remainder) {
          case 0:
            $(modalTriggers[i]).parent().attr('data-aos-duration', 500)
            break;
          case 1:
            $(modalTriggers[i]).parent().attr('data-aos-duration', 700)
            break;
          case 2:
            $(modalTriggers[i]).parent().attr('data-aos-duration', 900)
            break;
        }
      }
    
    // -----Add the closing modal button
      $('.modal').append('<div class="close-button"><a href="#!" class="btn-floating waves-effect waves-light"><i class="material-icons">close</i></a></div>')
    
    // -----Close modal window
      $('.modal .close-button').click(function(event){
        event.preventDefault()
        var $targetModal = $(this).closest("[id^=modal]").attr('id')
        $('#' + $targetModal).modal('close')
      })
    
    // -----Change image when clicking thumbnails
      $('.thumbnails img').click(function(){
        var $thisModalId = $(this).closest("[id^=modal]").attr('id')
        var $thisImg = $(this).attr('src')
        var $thisAlt = $(this).attr('alt')
        $('#' + $thisModalId + ' .mainImage img').attr({src:$thisImg, alt:$thisAlt})
        if ($(this).hasClass('z-depth-2')) {
          $('#' + $thisModalId + ' .thumbnails img').not('.z-depth-2').addClass('z-depth-2')
          $(this).removeClass('z-depth-2')
        }
      })
    
    // -----LED
      $( function() {
        var rgbValue = 0
        $( '#color-switch .btn' ).click(function() {
          if ( $(this).hasClass('on') ) {
            $(this).removeClass('on')
          }
          else {
            $(this).addClass('on')
          }
          if ( $('#led-btn-red').hasClass('on') ) {
            rgbValue = rgbValue + 4
          }
          if ( $('#led-btn-green').hasClass('on') ) {
            rgbValue = rgbValue + 2
          }
          if ( $('#led-btn-blue').hasClass('on') ) {
            rgbValue = rgbValue + 1
          }
          $( 'nav' ).removeClass (function (index, css) {
            return (css.match (/.*-nav/g) || []).join(' ');
          })
          $( '.input-field input').removeClass (function (index, css) {
            return (css.match (/.*-input/g) || []).join(' ');
          })
          $( '.input-field label').removeClass (function (index, css) {
            return (css.match (/.*-input/g) || []).join(' ');
          })
          $( '.input-field textarea').removeClass (function (index, css) {
            return (css.match (/ .*-input/g) || []).join(' ');
          })
          colorSet = setColor(rgbValue)
          changeColorAnimation(colorSet)
          rgbValue = 0;
        })
      })
    
      function setColor(rgbValue) {
        var color
        var colorLignt
        var colorDark
        switch (rgbValue) {
          case 0:// black
          color = 'black'
          colorLight = '#9e9e9e'
          colorDark = '#616161'
          break;
          case 1:// blue
          color = 'blue'
          colorLight = '#90caf9'
          colorDark = '#64b5f6'
          break;
          case 2:// green
          color = 'green'
          colorLight = '#79c6b6'
          colorDark = '#009688'
          break;
          case 3:// cyan
          color = 'cyan'
          colorLight = '#80deea'
          colorDark = '#00bcd4'
          break;
          case 4:// red
          color = 'red'
          colorLight = '#ed929f'
          colorDark = '#e57373'
          break;
          case 5:// parple
          color = 'parple'
          colorLight = '#ce93d8'
          colorDark = '#ba68c8'
          break;
          case 6:// yellow
          color = 'yellow'
          colorLight = '#ffc35d'
          colorDark = '#ff9800'
          break;
          case 7:// white
          color = 'white'
          colorLight = '#eeeeee'
          colorDark = '#bdbdbd'
          break;
        }
        var colorSet = color + ',' + colorLight + ',' + colorDark
        return colorSet
      }
    
      function changeColorAnimation(colorSet) {
        colorSet = colorSet.split(',')
        $( '.led' ).animate({
          backgroundColor: colorSet[1]
        }, 1000 )
        $( '.led-color-of-icon' ).animate({
          color: colorSet[2]
        }, 1000 )
        $( '.led-color-of-btn' ).animate({
          backgroundColor: colorSet[2]
        }, 1000 )
        $( '.led-color-of-footer' ).animate({
          backgroundColor: colorSet[2]
        }, 1000 )
        $( 'nav' ).addClass(colorSet[0] + '-nav')
        $( '.input-field input').addClass(colorSet[0] + '-input')
        $( '.input-field label').addClass(colorSet[0] + '-input')
        $( '.input-field textarea').addClass(colorSet[0] + '-input')
      }
    
    // -----Skill set parameter for chart.js
      // Front-end
      var dataLiteracy = {
          labels: ['HTML/CSS', 'JavaScript', 'jQuery', 'Vue.js/Vue CLI', 'CSS FW', 'WordPress'],
          datasets: [{
            data: [3, 2, 3, 2, 3, 2],
            label: 'Front-end',
            backgroundColor: 'rgba(237, 146, 159, 0.2)',
            borderColor: 'rgba(237, 146, 159, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(237, 146, 159, 1)',
            pointBorderColor: '#fff'
          }]
      };
      var options = {
          scale: {
            ticks: {
              beginAtZero: true,
              stepSize: 1,
              max: 5,
              fontSize: 12
            },
            pointLabels: {
              fontSize: 12
            }
          }
      };
      var ctx = document.getElementById("programmingSkillSet");
      var myRadarChart = new Chart(ctx, {
          type: 'radar',
          data: dataLiteracy,
          options: options
      });
    
      // Back-end
      var dataLiteracy = {
          labels: ['Python', 'Django', 'Golang', 'PostgreSQL', 'MySQL', 'Nginx'],
          datasets: [{
            data: [2, 2, 2, 2, 2, 2],
            label: 'Back-end',
            backgroundColor: 'rgba(121, 198, 182, 0.2)',
            borderColor: 'rgba(121, 198, 182, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(121, 198, 182, 1)',
            pointBorderColor: '#fff'
          }]
      };
      var options = {
          scale: {
            ticks: {
              beginAtZero: true,
              stepSize: 1,
              max: 5,
              fontSize: 12
            },
            pointLabels: {
              fontSize: 12
            }
          }
      };
      var ctx = document.getElementById("infraSkillSet");
      var myRadarChart = new Chart(ctx, {
          type: 'radar',
          data: dataLiteracy,
          options: options
      });
      // console.log(myRadarChart);
    
      // DevOps
      var dataLiteracy = {
          labels: ['Linux', 'Git/ GitHub', 'Docker', 'Docker Compose', 'Vim', 'AWS'],
          datasets: [{
            data: [3, 3, 3, 3, 2, 2],
            label: 'DevOps',
            backgroundColor: 'rgba(255, 195, 93, 0.2)',
            borderColor: 'rgba(255, 195, 93, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(255, 195, 93, 1)',
            pointBorderColor: '#fff'
          }]
      };
      var options = {
          scale: {
            ticks: {
              beginAtZero: true,
              stepSize: 1,
              max: 5,
              fontSize: 12
            },
            pointLabels: {
              fontSize: 12
            }
          }
      };
      var ctx = document.getElementById("interests");
      var myRadarChart = new Chart(ctx, {
          type: 'radar',
          data: dataLiteracy,
          options: options
      });
    })
    