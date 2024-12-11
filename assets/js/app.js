cl = console.log;

const bgSelect = document.getElementById("bgSelect");

const AllDivs = [...document.querySelectorAll(".all")];

onColorChange = (eve) => {
  let SelectedClassName = eve.target.value;

  cl(SelectedClassName);

  AllDivs.forEach((div) => {
    div.classList.add("d-none");
  });

  let SelectedDivs = [...document.querySelectorAll("." + SelectedClassName)];
  cl(SelectedDivs);

  SelectedDivs.forEach((div) => {
    div.classList.remove("d-none");
  });
};

bgSelect.addEventListener("change", onColorChange);
