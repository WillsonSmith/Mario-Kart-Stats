(function() {

  var videoString = '//www.youtube.com/embed/';

  function swap(e) {
    e.preventDefault();

    var vid = document.createElement('iframe'),

    vidId = this.getAttribute('data-id'),
    inject = this.querySelector('.videoInject'),
    img = inject.querySelector('img');


    vid.setAttribute('frameborder', '0');
    vid.setAttribute('allowfullscreen', true);

    vid.style.width = getComputedStyle(img).width;
    vid.style.height = getComputedStyle(img).height;
    //might have to play with this for when size changes

    vid.src = videoString + vidId;

    inject.removeChild(img);
    inject.appendChild(vid);

  }

  var anchors = document.querySelectorAll('.video a');

  for (var i = 0, l = anchors.length; i < l; i++) {

    anchors[i].addEventListener('click', swap, false);

  }

})();
