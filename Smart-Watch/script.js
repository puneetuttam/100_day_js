function clock() {
  const date = new Date();
  const indent = 2;

  const clockObj = {
    am_pm: date.getHours >= 12 ? "pm" : "am",
    hours: date.getHours() % 12 || 12,
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    day: date.toLocaleString("en-us", { weekday: "long" }),
    date: date.getDate(),
    month: date.toLocaleDateString("en-us", { month: "long" }),
    year: date.getFullYear(),
  };

  const valFormat = (val) => {
    if (typeof val == "number") {
      return `<span class="value number">${val}</span>`;
    }
    if (typeof val == "string") {
      return `<span class="value string">"${val}"</span>`;
    }
  };

  document.querySelector(".watch").innerHTML =
    `<span class=Keyword>const</span> 
    <span class "def">clock</span>
    <span class="Operator">=</span>
    {<br>}` 
    +
    Object.entries(clockObj).reduce(
      (str, [key, val]) =>
        str +
        `${"&nbsp".repeat(indent)}
    <span class="property">${key}</span>:
    ${valFormat(val)},
    <br>`,
      ""
    ) +
    "};";

  requestAnimationFrame(clock);
}

clock();
