// autoComplete.js on type event emitter
document.querySelector("#autoComplete").addEventListener("autoComplete", function (event) {
  console.log(event.detail);
  console.log(autoCompletejs);
});

// The autoComplete.js Engine instance creator
const autoCompletejs = new autoComplete({
  data: {
    // src: async () => {

    //   // Fetch External Data Source
    //   const source = '[{"tag_number":1,"ingredient":"water","slug":"water"},{"tag_number":2,"ingredient":"avocado","slug":"avocado"},{"tag_number":3,"ingredient":"banana","slug":"banana"},{"tag_number":4,"ingredient":"wheat germ","slug":"wheat-germ"},{"tag_number":5,"ingredient":"crushed cheerios","slug":"crushed-cheerios"},{"tag_number":6,"ingredient":"garlic powder","slug":"garlic-powder"},{"tag_number":7,"ingredient":"pepper","slug":"pepper"},{"tag_number":8,"ingredient":"basil","slug":"basil"},{"tag_number":9,"ingredient":"cream cheese","slug":"cream-cheese"},{"tag_number":10,"ingredient":"pears","slug":"pears"},{"tag_number":11,"ingredient":"plain yogurt","slug":"plain-yogurt"},{"tag_number":12,"ingredient":"mango","slug":"mango"},{"tag_number":13,"ingredient":"vanilla yogurt","slug":"vanilla-yogurt"},{"tag_number":14,"ingredient":"apple juice","slug":"apple-juice"},{"tag_number":15,"ingredient":"pear juice","slug":"pear-juice"},{"tag_number":16,"ingredient":"peaches","slug":"peaches"},{"tag_number":17,"ingredient":"pumpkin puree","slug":"pumpkin-puree"},{"tag_number":18,"ingredient":"zucchini","slug":"zucchini"},{"tag_number":19,"ingredient":"yellow squash","slug":"yellow-squash"},{"tag_number":20,"ingredient":"chicken","slug":"chicken"},{"tag_number":21,"ingredient":"apples","slug":"apples"},{"tag_number":22,"ingredient":"macintosh apple","slug":"macintosh-apple"},{"tag_number":23,"ingredient":"granny smith apple","slug":"granny-smith-apple"},{"tag_number":24,"ingredient":"braeburn apple","slug":"braeburn-apple"},{"tag_number":25,"ingredient":"fuji apple","slug":"fuji-apple"},{"tag_number":26,"ingredient":"butter","slug":"butter"},{"tag_number":27,"ingredient":"gala apple","slug":"gala-apple"},{"tag_number":28,"ingredient":"ground oats","slug":"ground-oats"},{"tag_number":29,"ingredient":"brown rice","slug":"brown-rice"},{"tag_number":30,"ingredient":"bulgar wheat","slug":"bulgar-wheat"},{"tag_number":31,"ingredient":"red delicious apple","slug":"red-delicious-apple"},{"tag_number":32,"ingredient":"raisins","slug":"raisins"},{"tag_number":33,"ingredient":"low fat vanilla yogurt","slug":"low-fat-vanilla-yogurt"},{"tag_number":34,"ingredient":"brown sugar","slug":"brown-sugar"},{"tag_number":35,"ingredient":"cinnamon","slug":"cinnamon"},{"tag_number":36,"ingredient":"ginger","slug":"ginger"},{"tag_number":37,"ingredient":"sweet potatoes","slug":"sweet-potatoes"},{"tag_number":38,"ingredient":"carrots","slug":"carrots"},{"tag_number":39,"ingredient":"beef","slug":"beef"},{"tag_number":40,"ingredient":"blueberry","slug":"blueberry"},{"tag_number":41,"ingredient":"apricot","slug":"apricot"},{"tag_number":42,"ingredient":"jasmine rice","slug":"jasmine-rice"},{"tag_number":43,"ingredient":"tapioca","slug":"tapioca"},{"tag_number":44,"ingredient":"kiwis","slug":"kiwis"},{"tag_number":45,"ingredient":"cereals","slug":"cereals"},{"tag_number":46,"ingredient":"yogurt","slug":"yogurt"},{"tag_number":47,"ingredient":"firm tofu","slug":"firm-tofu"},{"tag_number":48,"ingredient":"cottage cheese","slug":"cottage-cheese"},{"tag_number":49,"ingredient":"quinoa","slug":"quinoa"},{"tag_number":50,"ingredient":"plums","slug":"plums"},{"tag_number":51,"ingredient":"cherries","slug":"cherries"},{"tag_number":52,"ingredient":"oatmeal","slug":"oatmeal"},{"tag_number":53,"ingredient":"unsweetend applesauce","slug":"unsweetend-applesauce"},{"tag_number":54,"ingredient":"couscous","slug":"couscous"},{"tag_number":55,"ingredient":"lentils","slug":"lentils"},{"tag_number":56,"ingredient":"chicken stock","slug":"chicken-stock"},{"tag_number":57,"ingredient":"vegetable stock","slug":"vegetable-stock"},{"tag_number":58,"ingredient":"olive oil","slug":"olive-oil"},{"tag_number":59,"ingredient":"fresh lemon juice","slug":"fresh-lemon-juice"},{"tag_number":60,"ingredient":"grapes","slug":"grapes"},{"tag_number":61,"ingredient":"salt","slug":"salt"},{"tag_number":62,"ingredient":"ground pepper","slug":"ground-pepper"},{"tag_number":63,"ingredient":"thyme","slug":"thyme"},{"tag_number":64,"ingredient":"melons","slug":"melons"},{"tag_number":65,"ingredient":"pork","slug":"pork"},{"tag_number":66,"ingredient":"cantaloupe","slug":"cantaloupe"},{"tag_number":67,"ingredient":"watermelon","slug":"watermelon"},{"tag_number":68,"ingredient":"mint","slug":"mint"},{"tag_number":69,"ingredient":"cilantro","slug":"cilantro"},{"tag_number":70,"ingredient":"papaya","slug":"papaya"},{"tag_number":71,"ingredient":"nutmeg","slug":"nutmeg"},{"tag_number":72,"ingredient":"butternut squash","slug":"butternut-squash"},{"tag_number":73,"ingredient":"acorn squash","slug":"acorn-squash"},{"tag_number":74,"ingredient":"nectarine","slug":"nectarine"},{"tag_number":75,"ingredient":"milk","slug":"milk"},{"tag_number":76,"ingredient":"eggs","slug":"eggs"},{"tag_number":77,"ingredient":"vanilla extract","slug":"vanilla-extract"},{"tag_number":78,"ingredient":"summer squash","slug":"summer-squash"},{"tag_number":79,"ingredient":"large apples","slug":"large-apples"},{"tag_number":80,"ingredient":"barley","slug":"barley"},{"tag_number":81,"ingredient":"beef stock","slug":"beef-stock"},{"tag_number":82,"ingredient":"formula","slug":"formula"},{"tag_number":83,"ingredient":"breast milk","slug":"breast-milk"},{"tag_number":84,"ingredient":"","slug":""},{"tag_number":85,"ingredient":"","slug":""},{"tag_number":86,"ingredient":"","slug":""},{"tag_number":87,"ingredient":"","slug":""},{"tag_number":88,"ingredient":"","slug":""},{"tag_number":89,"ingredient":"","slug":""},{"tag_number":90,"ingredient":"","slug":""},{"tag_number":91,"ingredient":"","slug":""},{"tag_number":92,"ingredient":"","slug":""},{"tag_number":93,"ingredient":"","slug":""},{"tag_number":94,"ingredient":"","slug":""},{"tag_number":95,"ingredient":"","slug":""},{"tag_number":96,"ingredient":"","slug":""},{"tag_number":97,"ingredient":"","slug":""},{"tag_number":98,"ingredient":"","slug":""},{"tag_number":99,"ingredient":"","slug":""},{"tag_number":100,"ingredient":"","slug":""},{"tag_number":101,"ingredient":"","slug":""},{"tag_number":102,"ingredient":"","slug":""},{"tag_number":103,"ingredient":"","slug":""},{"tag_number":104,"ingredient":"","slug":""},{"tag_number":105,"ingredient":"","slug":""},{"tag_number":106,"ingredient":"","slug":""},{"tag_number":107,"ingredient":"","slug":""}]';
    //   // Format data into JSON
    //   const data = JSON.parse(source);
    //   // Return Fetched data
    //   return data.slug;
    // },
    src: [{"tag_number":1,"ingredient":"water","slug":"water"},{"tag_number":2,"ingredient":"avocado","slug":"avocado"},{"tag_number":3,"ingredient":"banana","slug":"banana"},{"tag_number":4,"ingredient":"wheat germ","slug":"wheat-germ"},{"tag_number":5,"ingredient":"crushed cheerios","slug":"crushed-cheerios"},{"tag_number":6,"ingredient":"garlic powder","slug":"garlic-powder"},{"tag_number":7,"ingredient":"pepper","slug":"pepper"},{"tag_number":8,"ingredient":"basil","slug":"basil"},{"tag_number":9,"ingredient":"cream cheese","slug":"cream-cheese"},{"tag_number":10,"ingredient":"pears","slug":"pears"},{"tag_number":11,"ingredient":"plain yogurt","slug":"plain-yogurt"},{"tag_number":12,"ingredient":"mango","slug":"mango"},{"tag_number":13,"ingredient":"vanilla yogurt","slug":"vanilla-yogurt"},{"tag_number":14,"ingredient":"apple juice","slug":"apple-juice"},{"tag_number":15,"ingredient":"pear juice","slug":"pear-juice"},{"tag_number":16,"ingredient":"peaches","slug":"peaches"},{"tag_number":17,"ingredient":"pumpkin puree","slug":"pumpkin-puree"},{"tag_number":18,"ingredient":"zucchini","slug":"zucchini"},{"tag_number":19,"ingredient":"yellow squash","slug":"yellow-squash"},{"tag_number":20,"ingredient":"chicken","slug":"chicken"},{"tag_number":21,"ingredient":"apples","slug":"apples"},{"tag_number":22,"ingredient":"macintosh apple","slug":"macintosh-apple"},{"tag_number":23,"ingredient":"granny smith apple","slug":"granny-smith-apple"},{"tag_number":24,"ingredient":"braeburn apple","slug":"braeburn-apple"},{"tag_number":25,"ingredient":"fuji apple","slug":"fuji-apple"},{"tag_number":26,"ingredient":"butter","slug":"butter"},{"tag_number":27,"ingredient":"gala apple","slug":"gala-apple"},{"tag_number":28,"ingredient":"ground oats","slug":"ground-oats"},{"tag_number":29,"ingredient":"brown rice","slug":"brown-rice"},{"tag_number":30,"ingredient":"bulgar wheat","slug":"bulgar-wheat"},{"tag_number":31,"ingredient":"red delicious apple","slug":"red-delicious-apple"},{"tag_number":32,"ingredient":"raisins","slug":"raisins"},{"tag_number":33,"ingredient":"low fat vanilla yogurt","slug":"low-fat-vanilla-yogurt"},{"tag_number":34,"ingredient":"brown sugar","slug":"brown-sugar"},{"tag_number":35,"ingredient":"cinnamon","slug":"cinnamon"},{"tag_number":36,"ingredient":"ginger","slug":"ginger"},{"tag_number":37,"ingredient":"sweet potatoes","slug":"sweet-potatoes"},{"tag_number":38,"ingredient":"carrots","slug":"carrots"},{"tag_number":39,"ingredient":"beef","slug":"beef"},{"tag_number":40,"ingredient":"blueberry","slug":"blueberry"},{"tag_number":41,"ingredient":"apricot","slug":"apricot"},{"tag_number":42,"ingredient":"jasmine rice","slug":"jasmine-rice"},{"tag_number":43,"ingredient":"tapioca","slug":"tapioca"},{"tag_number":44,"ingredient":"kiwis","slug":"kiwis"},{"tag_number":45,"ingredient":"cereals","slug":"cereals"},{"tag_number":46,"ingredient":"yogurt","slug":"yogurt"},{"tag_number":47,"ingredient":"firm tofu","slug":"firm-tofu"},{"tag_number":48,"ingredient":"cottage cheese","slug":"cottage-cheese"},{"tag_number":49,"ingredient":"quinoa","slug":"quinoa"},{"tag_number":50,"ingredient":"plums","slug":"plums"},{"tag_number":51,"ingredient":"cherries","slug":"cherries"},{"tag_number":52,"ingredient":"oatmeal","slug":"oatmeal"},{"tag_number":53,"ingredient":"unsweetend applesauce","slug":"unsweetend-applesauce"},{"tag_number":54,"ingredient":"couscous","slug":"couscous"},{"tag_number":55,"ingredient":"lentils","slug":"lentils"},{"tag_number":56,"ingredient":"chicken stock","slug":"chicken-stock"},{"tag_number":57,"ingredient":"vegetable stock","slug":"vegetable-stock"},{"tag_number":58,"ingredient":"olive oil","slug":"olive-oil"},{"tag_number":59,"ingredient":"fresh lemon juice","slug":"fresh-lemon-juice"},{"tag_number":60,"ingredient":"grapes","slug":"grapes"},{"tag_number":61,"ingredient":"salt","slug":"salt"},{"tag_number":62,"ingredient":"ground pepper","slug":"ground-pepper"},{"tag_number":63,"ingredient":"thyme","slug":"thyme"},{"tag_number":64,"ingredient":"melons","slug":"melons"},{"tag_number":65,"ingredient":"pork","slug":"pork"},{"tag_number":66,"ingredient":"cantaloupe","slug":"cantaloupe"},{"tag_number":67,"ingredient":"watermelon","slug":"watermelon"},{"tag_number":68,"ingredient":"mint","slug":"mint"},{"tag_number":69,"ingredient":"cilantro","slug":"cilantro"},{"tag_number":70,"ingredient":"papaya","slug":"papaya"},{"tag_number":71,"ingredient":"nutmeg","slug":"nutmeg"},{"tag_number":72,"ingredient":"butternut squash","slug":"butternut-squash"},{"tag_number":74,"ingredient":"nectarine","slug":"nectarine"},{"tag_number":75,"ingredient":"milk","slug":"milk"},{"tag_number":76,"ingredient":"eggs","slug":"eggs"},{"tag_number":77,"ingredient":"vanilla extract","slug":"vanilla-extract"},{"tag_number":78,"ingredient":"summer squash","slug":"summer-squash"},{"tag_number":79,"ingredient":"large apples","slug":"large-apples"},{"tag_number":80,"ingredient":"barley","slug":"barley"},{"tag_number":81,"ingredient":"beef stock","slug":"beef-stock"},{"tag_number":82,"ingredient":"formula","slug":"formula"},{"tag_number":83,"ingredient":"breast milk","slug":"breast-milk"},{"tag_number":84,"ingredient":"","slug":""},{"tag_number":85,"ingredient":"","slug":""},{"tag_number":86,"ingredient":"","slug":""},{"tag_number":87,"ingredient":"","slug":""},{"tag_number":88,"ingredient":"","slug":""},{"tag_number":89,"ingredient":"","slug":""},{"tag_number":90,"ingredient":"","slug":""},{"tag_number":91,"ingredient":"","slug":""},{"tag_number":92,"ingredient":"","slug":""},{"tag_number":93,"ingredient":"","slug":""},{"tag_number":94,"ingredient":"","slug":""},{"tag_number":95,"ingredient":"","slug":""},{"tag_number":96,"ingredient":"","slug":""},{"tag_number":97,"ingredient":"","slug":""},{"tag_number":98,"ingredient":"","slug":""},{"tag_number":99,"ingredient":"","slug":""},{"tag_number":100,"ingredient":"","slug":""},{"tag_number":101,"ingredient":"","slug":""},{"tag_number":102,"ingredient":"","slug":""},{"tag_number":103,"ingredient":"","slug":""},{"tag_number":104,"ingredient":"","slug":""},{"tag_number":105,"ingredient":"","slug":""},{"tag_number":106,"ingredient":"","slug":""},{"tag_number":107,"ingredient":"","slug":""}],
    key: ["ingredient"],
  },
  sort: function (a, b) {
    if (a.match < b.match) {
      return -1;
    }
    if (a.match > b.match) {a
      return 1;
    }
    return 0;
  },
  query: {
    // manipulate: function (query) {
    //   return query.replace("@pizza", "burger");
    // },
  },
  placeHolder: "Type an ingredient",
  selector: "#autoComplete",
  threshold: 0,
  debounce: 0,
  searchEngine: "strict",
  highlight: true,
  maxResults: 10,
  resultsList: {
    render: true,
    container: function (source) {
      source.setAttribute("id", "autoComplete_results_list");
    },
    element: "ul",
    destination: document.querySelector("#autoComplete"),
    position: "afterend",
  },
  resultItem: {
    content: function (data, source) {
      source.innerHTML = data.match;
    },
    element: "li",
  },
  noResults: function () {
    const result = document.createElement("li");
    result.setAttribute("class", "no_result");
    result.setAttribute("tabindex", "1");
    result.innerHTML = "No Results";
    document.querySelector("#autoComplete_results_list").appendChild(result);
  },
  onSelection: function (feedback) {
    const selection = feedback.selection.value.slug;

    window.location.href = '/search/' + selection;

    // Render selected choice to selection div
    document.querySelector(".selection").innerHTML = selection;

    // Clear Input
    document.querySelector("#autoComplete").value = "";
    // Change placeholder with the selected value
    document.querySelector("#autoComplete").setAttribute("placeholder", selection);
    // Concole log autoComplete data feedback
    console.log(feedback);
  },
});

// On page load add class to input field
window.addEventListener("load", function () {
  document.querySelector("#autoComplete").classList.add("out");
  // document.querySelector("#autoComplete_results_list").style.display = "none";
});

// Toggle Search Engine Type/Mode
document.querySelector(".toggeler").addEventListener("click", function () {
  // Holdes the toggle buttin alignment
  const toggele = document.querySelector(".toggele").style.justifyContent;

  if (toggele === "flex-start" || toggele === "") {
    // Set Search Engine mode to Loose
    document.querySelector(".toggele").style.justifyContent = "flex-end";
    document.querySelector(".toggeler").innerHTML = "Loose";
    autoCompletejs.searchEngine = "loose";
  } else {
    // Set Search Engine mode to Strict
    document.querySelector(".toggele").style.justifyContent = "flex-start";
    document.querySelector(".toggeler").innerHTML = "Strict";
    autoCompletejs.searchEngine = "strict";
  }
});

// Toggle results list and other elements
const action = function (action) {
  const github = document.querySelector(".github-corner");
  // const title = document.querySelector("h1");
  const mode = document.querySelector(".mode");
  const selection = document.querySelector(".selection");
  const footer = document.querySelector(".footer");

  if (action === "dim") {
    github.style.opacity = 1;
    // title.style.opacity = 1;
    mode.style.opacity = 1;
    selection.style.opacity = 1;
    footer.style.opacity = 1;
  } else if ("light") {
    github.style.opacity = 0.1;
    // title.style.opacity = 0.3;
    mode.style.opacity = 0.2;
    selection.style.opacity = 0.1;
    footer.style.opacity = 0.1;
  }
};

// Toggle event for search input
// showing & hidding results list onfocus / blur
["focus", "blur", "mousedown", "keydown"].forEach(function (eventType) {
  const input = document.querySelector("#autoComplete");
  const resultsList = document.querySelector("#autoComplete_results_list");

  document.querySelector("#autoComplete").addEventListener(eventType, function (event) {
    // Hide results list & show other elemennts
    if (eventType === "blur") {
      action("dim");
    } else if (eventType === "focus") {
      // Show results list & hide other elemennts
      action("light");
    }
  });

  // Hide Results list when not used
  document.addEventListener(eventType, function (event) {
    const current = event.target;
    if (
      current === input ||
      current === resultsList ||
      input.contains(current) ||
      resultsList.contains(current)
    ) {
      resultsList.style.display = "block";
    } else {
      resultsList.style.display = "none";
    }
  });
});

// Toggle Input Classes on results list focus to keep style
["focusin", "focusout", "keydown"].forEach(function (eventType) {
  document.querySelector("#autoComplete_results_list").addEventListener(eventType, function (event) {
    if (eventType === "focusin") {
      if (event.target && event.target.nodeName === "LI") {
        action("light");
        document.querySelector("#autoComplete").classList.remove("out");
        document.querySelector("#autoComplete").classList.add("in");
      }
    } else if (eventType === "focusout" || event.keyCode === 13) {
      action("dim");
      document.querySelector("#autoComplete").classList.remove("in");
      document.querySelector("#autoComplete").classList.add("out");
    }
  });
});
