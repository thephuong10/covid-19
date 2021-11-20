// init scrollbar
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
const header = document.querySelector("header.header");
const countryListWrap = document.querySelector(".live-reports-select-dropdown");
const countryList = document.querySelector(".country-list");
const countrySelected = document.querySelector(".country-selected");
const countryActions = document.querySelector(".country-arrows");
const openmenu = document.querySelector(".open-menu");
const closemenu = document.querySelector(".close-menu");

const COLORS = ["#dc3545", "#28a745", "#6c757d"];

const CASE_STATUS_COUNTRY = {
  confirmed: "Confirmed",
  recovered: "Recovered",
  deaths: "Deaths",
};

const CASE_STATUS_WORLD = {
  confirmed: "TotalConfirmed",
  recovered: "TotalRecovered",
  deaths: "TotalDeaths",
};

let summaryData,
  timeAllChart,
  daysChart,
  recoverRateChart,
  flkty,
  countryElmActive = null;

scroller.on("scroll", ({ scroll }) => {
  if (scroll.y > 0) {
    !header.matches(".header-shirk") && header.classList.add("header-shirk");
  } else {
    header.matches(".header-shirk") && header.classList.remove("header-shirk");
  }
});

scroller.on("call", (nameFunc, way, elm) => {
  elm.el.classList.add("start");
});

openmenu.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.add("active");
});
closemenu.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.remove("active");
});

document.getElementById("country-arrows-prev").onclick = () => {
  flkty.previous();
};
document.getElementById("country-arrows-next").onclick = () => {
  flkty.next();
};

window.onload = async () => {
  await loadCountriesLits();
  await initChart();
  await loadData("Global");
  handleCountryFilter();
};
const isGlobal = (country) => country === "Global";
const loadCountriesLits = async () => {
  summaryData = await covid19Api.getSummary();
  renderCountryList([...summaryData.Countries]);
};

const loadData = async (country) => {
  await loadSummary(country);
  await loadDataChart(country);
};

const loadSummary = async (country) => {
  summaryData = summaryData || (await covid19Api.getSummary());
  const summaryCountry = isGlobal(country)
    ? summaryData.Global
    : summaryData.Countries.find((item) => item.Slug === country);

  updateCounter(
    document.querySelector(".count.count-confirmed .count-total"),
    summaryCountry.TotalConfirmed
  );
  updateCounter(
    document.querySelector(".count.count-recovered .count-total"),
    summaryCountry.TotalRecovered
  );
  updateCounter(
    document.querySelector(".count.count-death .count-total"),
    summaryCountry.TotalDeaths
  );
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const updateCounter = (elm, count) =>
  (elm.textContent = numberWithCommas(count));

const handleCountryFilter = () => {
  const inputElm = document.getElementById("find-country");
  inputElm.oninput = (e) => {
    renderCountryList(
      summaryData.Countries.filter((item) =>
        item.Country.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
};

const initChart = async () => {
  var option = {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    series: [],
    colors: [...COLORS],
    xaxis: {
      categories: [],
    },
  };
  timeAllChart = new ApexCharts(
    document.getElementById("time-all-chart"),
    option
  );
  console.log(document.getElementById("time-all-chart"));
  timeAllChart.render();
};

const loadDataChart = async (country) => {
  let labels, series, worldData, case_status;

  if (isGlobal(country)) {
    worldData = await covid19Api.getWorldAllTimeCases();
    case_status = CASE_STATUS_WORLD;
  } else {
    worldData = await covid19Api.getCountryOneDayCases(country);
    case_status = CASE_STATUS_COUNTRY;
  }
  worldData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  labels = worldData.map((item) => formatDate(item.Date));
  series = renderData(worldData, case_status);

  const option = {
    series: [
      {
        name: CASE_STATUS_COUNTRY.confirmed,
        data: series.confirmedData,
      },
      {
        name: CASE_STATUS_COUNTRY.recovered,
        data: series.recoveredData,
      },
      {
        name: CASE_STATUS_COUNTRY.deaths,
        data: series.deathsData,
      },
    ],
    xaxis: {
      categories: labels,
    },
  };
  console.log(option);
  timeAllChart && timeAllChart.updateOptions(option);
};

const renderData = (array, status) => {
  const confirmedData = [],
    recoveredData = [],
    deathsData = [];

  array.forEach((item) => {
    confirmedData.push(item[status.confirmed]);
    recoveredData.push(item[status.recovered]);
    deathsData.push(item[status.deaths]);
  });

  return {
    confirmedData,
    recoveredData,
    deathsData,
  };
};

const renderCountryList = (countries) => {
  const carousel = countryList.querySelector(".carousel");

  carousel && carousel.remove();

  const carouselNew = document.createElement("div");
  carouselNew.classList.add("carousel");

  chunkArray(countries, 8).forEach((item) => {
    const carouselCell = document.createElement("div");
    carouselCell.classList.add("country-list-item", "carousel-cell");
    const ulElm = document.createElement("ul");
    item.forEach((item_child) => {
      const liElm = document.createElement("li");
      liElm.classList.add("btn", "btn-bg-opacity-info");
      liElm.textContent = item_child.Country;
      liElm.onclick = async () => {
        if (countryElmActive !== item_child.Slug) {
          countrySelected.textContent = item_child.Country;
          countryElmActive = item_child.Slug;
          await loadData(item_child.Slug);
          //await loadSummary(item_child.Slug);
        }
      };
      ulElm.appendChild(liElm);
    });
    carouselCell.appendChild(ulElm);
    carouselNew.appendChild(carouselCell);
  });
  console.log(carouselNew);
  countryList.appendChild(carouselNew);
  initSilider(carouselNew);
};

const initSilider = (elm) => {
  flkty = new Flickity(elm, {
    fade: true,
    pageDots: false,
    draggable: false,
    prevNextButtons: false,
    wrapAround: true,
    selectedAttraction: 0.2,
    friction: 0.8,
  });
};

const chunkArray = (array, size) => {
  const result = [];
  while (array.length) {
    result.push(array.splice(0, size));
  }
  return result;
};

const dayOrMonth = (num) => (num < 9 ? "0" + num : num);

const formatDate = (date) => {
  const d = new Date(date);

  return `${dayOrMonth(d.getDate())}-${dayOrMonth(
    d.getMonth() + 1
  )}-${d.getFullYear()}`;
};
