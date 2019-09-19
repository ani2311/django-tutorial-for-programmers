node = document.querySelector('a[href="'+location.href.split('/').pop()+'"]');
node.className += 'active';