var mnemedb=Mnemedb("ToDo");

// **********************************************************************
// home page

// refresh the available tags and list based on the selected tags
function home_refresh() {
  var tags_sel = [];
  // TODO: determine selected tags from the $("#tags_sel") div :)

  // get document ids and available tags for current tag selection
  mnemedb.get_tags_enabled_info(tags_sel, function(err, response){
    // get and clear the available tags div
    var tags_avail_div = $('#home #tags_avail').empty();
    // sort available tags by count
    var tags=mnemedb.sortbyvalue(response.tags_avail);
    // inject tags one by one
    for(var i=0; i<tags.length; i++){
      var tag=tags[i];
      // create html, add click handler and append to div
      // (TODO: create html with templates)
      $(
        '<a href="#" data-role="button" data-mini="true" data-inline="true" data-theme="c" data-tag="'+tag[0]+'">'+tag[0]+' <span class="button-mini-bubble ui-btn-up-c ui-btn-corner-all">'+tag[1]+'</span></a>'
      ).click(home_add_tag).appendTo(tags_avail_div);
    }
    // this actually creates the pretty buttons inside the div
    tags_avail_div.trigger('create');
  })
}

// add a tag based on the data-tag property
function home_add_tag() {
  // TODO
  console.log( $(this).data('tag') );
}

function home_remove_tag() {
  // TODO
  console.log( $(this).data('tag') );
}

$(document).on("pagebeforeshow", "#home", function(){
  home_refresh();
});