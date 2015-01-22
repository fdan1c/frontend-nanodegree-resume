var name = "Igor Danilov";
var role = "Business/System Analyst";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);