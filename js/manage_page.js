
// change url for button new in manage page
function change_button_new(url_type, add_url){
  tmp_url = jQuery(".wrap").children('h2').children('a').attr('href');
  if(tmp_url == url_type){
    jQuery(".wrap").children('h2').children('a').attr('href',tmp_url+add_url);
  }
}

function change_number_manage_wp30(all, published, pending, draft, private_,trash,page,add_url){

  jQuery('.subsubsub li > a').each(function(){
    element = jQuery(this).text().split(" (");
    url = jQuery(this).attr('href');
    switch(element[0]) {
      case "All":
        if(url == 'edit.php?post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(all);
        }
        break;
      case "Published":
        if(url == 'edit.php?post_status=publish&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(published);
        }
        break;
      case "Pending Review":
        if(url == 'edit.php?post_status=pending&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(pending);
        }
        break;
      case "Pending":
        if(url == 'edit.php?post_status=pending&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(pending);
        }
        break;
      case "Drafts":
        if(url == 'edit.php?post_status=draft&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(draft);
        }
        break;
      case "Draft":
        if(url == 'edit.php?post_status=draft&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(draft);
        }
        break;
      case "Private":
        if(url == 'edit.php?post_status=private&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(private_);
        }
        break;
      case "Trash":
        if(url == 'edit.php?post_status=trash&post_type='+page){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(trash);
        }
        break;
      }
  });
}

function change_number_manage_wp29(all, published, pending, draft, private_,trash,page,add_url){

  jQuery('.subsubsub li > a').each(function(){
    element = jQuery(this).text().split(" (");
    url = jQuery(this).attr('href');
    switch(element[0]) {
      case "All":
        if(url == page){
          jQuery(this).attr('href',url+'?'+add_url);
          jQuery(this).children('span').text(all);
        }
        break;
      case "Published":
        if(url == page+'?post_status=publish'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(published);
        }
        break;
      case "Pending Review":
        if(url == page+'?post_status=pending'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(pending);
        }
        break;
      case "Pending":
        if(url == page+'?post_status=pending'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(pending);
        }
        break;
      case "Drafts":
        if(url == page+'?post_status=draft'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(draft);
        }
        break;
      case "Draft":
        if(url == page+'?post_status=draft'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(draft);
        }
        break;
      case "Private":
        if(url == page+'?post_status=private'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(private_);
        }
        break;
      case "Trash":
        if(url == page+'?post_status=trash'){
          jQuery(this).attr('href',url+'&'+add_url);
          jQuery(this).children('span').text(trash);
        }
        break;
      }
  });
}

function change_title_manage(write_panel){
  
  tmp = jQuery(".wrap").children('h2').html().split('s ');
  
  check = jQuery(".wrap").children('h2').text().split(">>");
  if(check.length == 1){
    jQuery(".wrap").children('h2').html('Manage >> ' + write_panel +tmp[1]);
  }
}