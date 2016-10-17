//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

// create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

  // cycle over menu links
  $("#menu a").each(function() {
  var $anchor = $(this);
  // create an option
  var $option = $("<option></option>");
  // options value is the href of the page
  $option.val($anchor.attr("href"));
  // options text is the text of the links
  var anchorText = $anchor.text();
  $option.text(anchorText);
  // append option to select
  $select.append($option);
  });
// create a button
// bind click to button
  // go to select location
// Modify CSS to hide links on small width and show button and select box
// Also hides select box and button on large width
// Deal with selected options depending upon current page
