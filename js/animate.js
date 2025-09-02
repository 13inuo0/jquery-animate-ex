$(function () {
  // console.log("확인");
  $(".move").click(function () {
    $(".box").animate(
      {
        left: "300px",
      },
      1000
    );
  });
});
