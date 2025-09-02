// $(function () {
//   // if($.cookie())
//   let chk = $("#chk");
//   $(".closeBtn").click(function () {
//     // console.log(chk.is(".checked"));

//     // is 있는지 없는지 (참, 거짓)
//     if (chk.is(".checked")) {
//       $.cookie("popup", "none", { expires: 3, path: "/" });
//     }
//   });
// });

// 뭔가가 안됨.
// $(function () {
//   // if($.cookie())
//   let chk = $("#chk");
//   if ($.cookie("popup") === "none") {
//     $(".notice_wrap").hide();
//   }
//   $(".closeBtn").click(function () {
//     // console.log(chk.is(":checked"));

//     if (chk.is(":checked")) {
//       $.cookie("popup", "none", { expires: 3, path: "/" });
//     }
//     $(".notice_wrap").fadeOut("fast");
//   });
// });

$(function () {
  // if($.cookie())
  let chk = $("#chk");
  //   쿠키 "popup" 의 값이 "none" 이면 팝업을 숨김
  if ($.cookie("popup") === "none") {
    $(".notice_wrap").hide();
  }
  $(".closeBtn").click(function () {
    // console.log(chk.is(":checked"));

    if (chk.is(":checked")) {
      $.cookie("popup", "none", { expires: 3, path: "/" });
    }
    $(".notice_wrap").fadeOut("fast");
  });
});
