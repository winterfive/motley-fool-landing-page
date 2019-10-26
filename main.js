$(document).ready(function() {
  console.log("Document ready")

  $("#submit-form").on("submit", function(e) {
    $("#myModal").modal("show")
    e.preventDefault()
  })

  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus")
  })
})
