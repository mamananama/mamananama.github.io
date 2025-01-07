$(document).ready(function() {
    $('.post img').each(function() {
        var $img = $(this);
        var imgSrc = $img.attr('src');
        
        // 이미 앵커 태그로 감싸져 있지 않은 경우에만 처리
        if (!$img.parent('a').length) {
            $img.wrap($('<a>', {
                href: imgSrc,
                target: '_blank',
                class: 'image-link'
            }));
        }
        
        // alt 텍스트가 있고 캡션이 아직 없는 경우에만 캡션 추가
        if ($img.attr('alt') && !$img.next('.caption').length) {
            $img.after($('<figcaption>', {
                class: 'caption',
                text: $img.attr('alt')
            }));
        }
    });
});