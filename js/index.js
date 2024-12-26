// Lấy nút "Back to Top"
const backToTopButton = document.getElementById("backToTop");

// Hiển thị nút khi cuộn xuống 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Cuộn về đầu trang khi nhấn nút
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn mượt về đầu trang
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .querySelector("a.navbar-brand")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  });

window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  var header = document.querySelector("header");
  var sticky = header.offsetHeight; // Chiều cao của phần header

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// Lắng nghe sự kiện submit của form
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngừng việc gửi form thông qua server

    // Lấy giá trị email từ input
    const emailInput = document.getElementById("emailInput").value;

    // Kiểm tra nếu email hợp lệ
    if (emailInput) {
      // Hiển thị thông báo đăng ký thành công
      document.getElementById("successMessage").style.display = "block";

      // Tự động ẩn thông báo sau 5 giây
      setTimeout(function () {
        document.getElementById("successMessage").style.display = "none";
      }, 5000);

      // Xóa nội dung input email sau khi gửi
      document.getElementById("emailInput").value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
