var simplemaps_countymap_mapdata = {

  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#AAAAAA",
    popups: "detect",

    // State Defaults (non-active areas)
    state_description: "Outside Service Area",
    state_color: "#D3D3D3",
    state_hover_color: "#B8B8B8",
    state_url: "",

    // County Defaults
    county_description: "",
    county_color: "#E5E5E5",
    county_hover_color: "#5d8dbd",
    county_url: "",

    // Accessibility + Animation
    location_description: "",
    fade_time: 0.3,
    all_states_in_zoom: "yes",
    zoom_time: 0.3,

    div: "map-ne",
    auto_load: "no",

    // Borders
    state_border_color: "#ffffff",
    state_border_size: 1.5,
    county_border_color: "#ffffff",
    county_border_size: 1.2,

    // Label Styling
    label_color: "#333333",
    hide_labels: "yes",

    // Tooltips
    popup_color: "#ffffff",
    popup_opacity: 0.95,
    popup_shadow: 1,
    popup_font_size: 14
  },

  state_specific: {
    /* --- CONNECTICUT (Full Coverage) --- */
    "09001": { name: "Fairfield County, CT", color: "#3b6ea5", url: "/connecticut", description: "We proudly service all of Fairfield County, CT." },
    "09003": { name: "Hartford County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service area includes Hartford County, CT."},
    "09005": { name: "Litchfield County, CT", color: "#3b6ea5", url: "/connecticut"},
    "09007": { name: "Middlesex County, CT", color: "#3b6ea5", url: "/connecticut"},
    "09009": { name: "New Haven County, CT", color: "#3b6ea5", url: "/connecticut"},
    "09011": { name: "New London County, CT", color: "#3b6ea5", url: "/connecticut"},
    "09013": { name: "Tolland County, CT", color: "#3b6ea5", url: "/connecticut"},
    "09015": { name: "Windham County, CT", color: "#3b6ea5", url: "/connecticut"},

    /* --- RHODE ISLAND (Full State) --- */
    "44001": { name: "Bristol County, RI", color: "#3b6ea5", url: "/rhode-island"},
    "44003": { name: "Kent County, RI", color: "#3b6ea5", url: "/rhode-island"},
    "44005": { name: "Newport County, RI", color: "#3b6ea5", url: "/rhode-island"},
    "44007": { name: "Providence County, RI", color: "#3b6ea5", url: "/rhode-island"},
    "44009": { name: "Washington County, RI", color: "#3b6ea5", url: "/rhode-island"},

    /* --- MASSACHUSETTS (Western & Central) --- */
    "25003": { name: "Berkshire County, MA", color: "#3b6ea5", url: "/massachusetts"},
    "25011": { name: "Franklin County, MA", color: "#3b6ea5", url: "/massachusetts"},
    "25013": { name: "Hampden County, MA", color: "#3b6ea5", url: "/massachusetts"},
    "25015": { name: "Hampshire County, MA", color: "#3b6ea5", url: "/massachusetts"},
    "25027": { name: "Worcester County, MA", color: "#3b6ea5", url: "/massachusetts"},

    /* --- VERMONT (Southern) --- */
    "50003": { name: "Bennington County, VT", color: "#3b6ea5", url: "/vermont"},
    "50025": { name: "Windham County, VT", color: "#3b6ea5", url: "/vermont"},

    /* --- NEW YORK (Up to Albany) --- */
    "36001": { name: "Albany County, NY", color: "#3b6ea5", url: "/new-york"},
    "36021": { name: "Columbia County, NY", color: "#3b6ea5", url: "/new-york"},
    "36027": { name: "Dutchess County, NY", color: "#3b6ea5", url: "/new-york"},
    "36039": { name: "Greene County, NY", color: "#3b6ea5", url: "/new-york"},
    "36071": { name: "Orange County, NY", color: "#3b6ea5", url: "/new-york"},
    "36079": { name: "Putnam County, NY", color: "#3b6ea5", url: "/new-york"},
    "36083": { name: "Rensselaer County, NY", color: "#3b6ea5", url: "/new-york"},
    "36087": { name: "Rockland County, NY", color: "#3b6ea5", url: "/new-york"},
    "36111": { name: "Ulster County, NY", color: "#3b6ea5", url: "/new-york"},
    "36119": { name: "Westchester County, NY", color: "#3b6ea5", url: "/new-york"}
  },

  legend: {
    entries: [
      { name: "Active Service Area", color: "#3b6ea5" }
    ]
  }
};
