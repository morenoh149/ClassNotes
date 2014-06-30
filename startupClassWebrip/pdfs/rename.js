/* script to prefix pdfs by the first number in their filename
 * e.g.
 [ 'lecture1-v2-introduction.pdf',
  'lecture11-regulation-disruption-technologies-2013.pdf',
  'lecture2-interactive-start.pdf',
  'lecture3-linux-ssjs-v2.pdf',
  'lecture5-market-wireframing-design.pdf',
  'lecture6-html-css-js.pdf',
  'lecture7-deployment-dns-custom-domains.pdf',
  'lecture9-social-local-mobile-growth-virality (1).pdf',
  'lecture9-social-local-mobile-growth-virality.pdf',
  'lecture_slides-lecture3-linux-ssjs-v2.pdf',
  'lecture_slides-lecture4a-linux-command-line.pdf',
  'lecture_slides-lecture4b-developer-environment.pdf',
  'lecture_slides_lecture5-market-wireframing-design.pdf',
  'lecture_slides_lecture7-deployment-dns-custom-domains.pdf',
  'lecture_slides_lecture8-mobile-v2.pdf',
  'rename.js',
  'startup-lecture_slides-lecture10-intermediate-js.pdf',
  'startup-lecture_slides-lecture12-node-latency-async-debugging (1).pdf',
  'startup-lecture_slides-lecture12-node-latency-async-debugging.pdf',
  'startup-lecture_slides-lecture8-mobile-v2.pdf',
  'startup_lecture_slides_lecture10-intermediate-js.pdf',
  'startup_lecture_slides_lecture11-regulation-disruption-technologies-2013.pdf',
  'startup_lecture_slides_lecture7-deployment-dns-custom-domains.pdf' ]
  */
var fs = require('fs');

// fs.readdir('.', function(err, files) {
//   function renameElements(element, index, array) {
//     var re = /\d+/;
//     var prefix = re.exec(element)[0];
//     if (prefix.length === 1)
//       prefix = '0' + prefix;
//     prefix = '[' + prefix + '] ';

//     fs.rename(element, prefix + element);
//     // console.log(index, prefix);
//   }
//   files.forEach(renameElements);
// });

fs.readdir('.', function(err, files) {
  function renameElements(element, index, array) {
    var innerStr = element.slice(5);
    fs.rename(element, innerStr);
    // console.log(index, prefix);
  }
  files.forEach(renameElements);
});
