//Get year
const year = document.getElementById("getYear");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

//Active Navbar
const navContainer = document.getElementById("navContainer");
const activeNavbar = navContainer.getElementsByClassName("nav-link");
for (let i = 0; i < activeNavbar.length; i++) {
  activeNavbar[i].addEventListener("click", function () {
    const currentActive = document.querySelector(".nav-link.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    this.classList.add("active");
  });
}

//Remove active
const removeActive = document.getElementById("activeNavbar");
removeActive.addEventListener("click", function () {
  const currentActive = document.querySelector(".nav-link.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
});

window.onload = function () {
  const renderDonutChart = (containerId, titleText, data) => {
    const chart = echarts.init(document.getElementById(containerId));
    chart.setOption({
      backgroundColor: "transparent",
      title: {
        text: titleText,
        left: "center",
        top: "45%",
        textStyle: {
          color: "#5F7A8D",
          fontSize: 24,
          fontWeight: "normal",
        },
      },
      series: [
        {
          type: "pie",
          radius: ["70%", "100%"],
          center: ["50%", "50%"],
          startAngle: 90,
          data,
          label: {
            show: false,
          },
          emphasis: {
            scale: false,
          },
          silent: true,
        },
      ],
    });

    window.addEventListener("resize", () => chart.resize());
    return chart;
  };

  renderDonutChart("chartContainer1", "Khmer", [
    { value: 100, name: "", itemStyle: { color: "#689A59" } },
  ]);

  renderDonutChart("chartContainer2", "English", [
    { value: 67, name: "", itemStyle: { color: "#FFD409" } },
    { value: 33, name: "", itemStyle: { color: "transparent" } },
  ]);
};
