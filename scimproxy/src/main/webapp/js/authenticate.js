/**
 * 
 */
$(document).ready(function () {
	var section = $.url(document.location).attr('anchor');
	section = (section === "" ? "authenticate" : section);
	$("#" + section).show("slow");

	$("a").click(function () {
		var section = $.url(document.location).attr('anchor');
		section = (section === "" ? "authenticate" : section);
		$("#" + section).hide("slow");
		var tmp = $(event.target.hash);
		$(event.target.hash).show("slow");
	});
	
	$("#authSelection").change(function (){
		if($("#authSelection").val() === "OAuth2"){
			$("#basicUsername").hide();
			$("#basicPassword").hide();
			$("#oauthAuthorizationServer").show();
		} else {
			$("#basicUsername").show();
			$("#basicPassword").show();
			$("#oauthAuthorizationServer").hide();
		}
	});

	$(document).ready(function () {
		var authSelection = $("#authSelection").val();
		if($("#authSelection").val() === "OAuth2"){
			$("#basicUsername").hide();
			$("#basicPassword").hide();
			$("#oauthAuthorizationServer").show();
		} else {
			$("#basicUsername").show();
			$("#basicPassword").show();
			$("#oauthAuthorizationServer").hide();
		}
	});
});