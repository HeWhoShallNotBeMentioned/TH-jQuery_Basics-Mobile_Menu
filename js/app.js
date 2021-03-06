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
  // Deal with selected options depending upon current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop('selected', true);
  }
  // options value is the href of the page
  $option.val($anchor.attr("href"));
  // options text is the text of the links
  var anchorText = $anchor.text();
  $option.text(anchorText);
  // append option to select
  $select.append($option);
  });

// bind click to listener to the select
$select.change(function(){
  // Go to select's current location
  window.location = $select.val();
});
