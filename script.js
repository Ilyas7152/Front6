$(document).ready(function() {
  console.log("jQuery is ready!");

  $("h1").css("color", "#2c3e50");

  $("#change-text-btn").click(function() {
    $("#headline").text("Aspiring Full-Stack Developer");
  });

  $("#dark-theme-btn").click(function() {
    $("body").css({ "background-color": "#1e1e1e", "color": "#f0f0f0" });
    $("header, section").css({ "background-color": "#2d2d2d", "color": "#f0f0f0" });
    $(".slide-header").css({ "background-color": "#3d3d3d", "color": "#f0f0f0" });
    $(".slide-panel").css({ "background-color": "#333333", "color": "#f0f0f0" });
    $(".live-preview").css({ "background-color": "#333333", "color": "#f0f0f0" });
  });

  $("#light-theme-btn").click(function() {
    $("body").css({ "background-color": "#f5f5f5", "color": "#333333" });
    $("header, section").css({ "background-color": "#ffffff", "color": "#333333" });
    $(".slide-header").css({ "background-color": "#e9ecef", "color": "#333333" });
    $(".slide-panel").css({ "background-color": "#f8f9fa", "color": "#333333" });
    $(".live-preview").css({ "background-color": "#f8f9fa", "color": "#333333" });
  });

  $("#hide-btn").click(function() {
    $("#fun-facts").hide();
  });

  $("#show-btn").click(function() {
    $("#fun-facts").show();
  });

  $("#toggle-btn").click(function() {
    $("#fun-facts").toggle();
  });

  $("#fade-out-btn").click(function() {
    $(".gallery-img").fadeOut();
  });

  $("#fade-in-btn").click(function() {
    $(".gallery-img").fadeIn();
  });

  $("#fade-toggle-btn").click(function() {
    $(".gallery-img").fadeToggle();
  });

  $(".slide-header").click(function() {
    $(this).next(".slide-panel").slideToggle();
  });

  $("#slide-up-all").click(function() {
    $(".slide-panel").slideUp();
  });

  $("#slide-down-all").click(function() {
    $(".slide-panel").slideDown();
  });

  $("#add-skill-btn").click(function() {
    const skill = $("#skill-input").val().trim();
    if (skill !== "") {
      $("#skills-list").append("<li>" + skill + "</li>");
      $("#skill-input").val("");
    }
  });

  $("#prepend-skill-btn").click(function() {
    const skill = $("#skill-input").val().trim();
    if (skill !== "") {
      $("#skills-list").prepend("<li>" + skill + "</li>");
      $("#skill-input").val("");
    }
  });

  $("#remove-skill-btn").click(function() {
    $("#skills-list li:last").remove();
  });

  $("#change-link-btn").click(function() {
    $("#profile-link")
      .attr("href", "https://linkedin.com")
      .text("LinkedIn Profile");
  });

  $("#user-name").on("input", function() {
    $("#preview-name").text($(this).val());
  });

  $("#user-email").on("input", function() {
    $("#preview-email").text($(this).val());
  });
  let isAnimated = false;

  $("#animate-skills-btn").click(function() {
    if (!isAnimated) {
      $("#bar-golang").animate({ width: "90%" }, 600);
      $("#bar-sql").animate({ width: "80%" }, 600);
      $("#bar-j").animate({ width: "75%" }, 600);
      isAnimated = true;
    } else {
      $(".skill-bar").animate({ width: "0%" }, 600);
      isAnimated = false;
    }
  });
});
