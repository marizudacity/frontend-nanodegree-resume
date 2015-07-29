/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // HEADER
 $("#header").prepend(HTMLheaderName.replace('%data%', bio.name)+" "+HTMLheaderRole.replace('%data%', 'Web Developer'));

 // go over contact and append to #topContacts and #footerContacts element on page
  for(var contact in bio.contacts){
    //using contact generic instead of static list
    $("#topContacts").append(HTMLcontactGeneric.replace('%data%', bio.contacts[contact]).replace('%contact%', contact));
    $("#footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%contact%", contact));
  }
